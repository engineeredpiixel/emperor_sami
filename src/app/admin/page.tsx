"use client";

import { createClient } from "@/utils/supabase/client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useMemo } from "react";
import { ChevronDown, Search, Menu, LogOut, Loader2, Save, UploadCloud } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContentItem {
  id: string;
  section: string;
  key: string;
  value: string;
  type: "text" | "textarea" | "image";
  label: string;
}

interface SidebarSection {
  id: string;
  label: string;
  icon: string;
  order_index: number;
  parent_id: string | null;
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const [activeSection, setActiveSection] = useState("homepage_hero");
  const [content, setContent] = useState<ContentItem[]>([]);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Database Sidebar state
  const [sidebarSections, setSidebarSections] = useState<SidebarSection[]>([]);
  const [expandedParents, setExpandedParents] = useState<Record<string, boolean>>({
    'homepage': true,
    'navbar': true
  });

  // ── Fetch user & sidebar ──
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserEmail(data.user.email ?? "");
    });
    
    supabase.from("admin_sidebar").select("*").order("order_index").then(({ data }) => {
      if (data) setSidebarSections(data as SidebarSection[]);
    });
  }, [supabase]);

  // ── Fetch content for active section ──
  const fetchContent = useCallback(async () => {

    
    setLoading(true);
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .eq("section", activeSection)
      .order("key");

    if (!error && data) {
      setContent(data as ContentItem[]);
      const initialEdits: Record<string, string> = {};
      data.forEach((item: ContentItem) => {
        initialEdits[item.key] = item.value;
      });
      setEdits(initialEdits);
    }
    setLoading(false);
  }, [activeSection, supabase]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // ── Data Hierarchy Building ──
  const { rootSections, childSections } = useMemo(() => {
    const root = sidebarSections.filter(s => !s.parent_id);
    const children = sidebarSections.filter(s => !!s.parent_id);
    return { rootSections: root, childSections: children };
  }, [sidebarSections]);

  const toggleParent = (parentId: string) => {
    setExpandedParents(prev => ({ ...prev, [parentId]: !prev[parentId] }));
  };

  // ── Save a single field ──
  const handleSave = async (key: string) => {
    setSaving((prev) => ({ ...prev, [key]: true }));
    const { error } = await supabase
      .from("site_content")
      .update({ value: edits[key] })
      .eq("key", key);

    setSaving((prev) => ({ ...prev, [key]: false }));
    if (!error) {
      setSaved((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000);
    } else {
      alert("Error saving: " + error.message);
    }
  };

  // ── Image Upload ──
  const handleImageUpload = async (key: string, file: File) => {
    setUploadingKey(key);
    try {
      // Client-side WebP Conversion & 4K Optimization
      const webpBlob = await new Promise<Blob>((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
          URL.revokeObjectURL(url);
          const canvas = document.createElement("canvas");
          
          // Downscale 4K+ images to a reasonable maximum (2560px wide) to save bandwidth
          let width = img.width;
          let height = img.height;
          const MAX_DIMENSION = 2560;
          
          if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
            const ratio = Math.min(MAX_DIMENSION / width, MAX_DIMENSION / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) return reject(new Error("Canvas context failed"));
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob(
            (blob) => { if (blob) resolve(blob); else reject(new Error("WebP conversion failed")); },
            "image/webp",
            0.85 // 85% high-quality compression
          );
        };
        img.onerror = () => reject(new Error("Image load failed"));
        img.src = url;
      });

      const fileName = `${key}_${Date.now()}.webp`;
      const filePath = `cms/${fileName}`;

      const { error: uploadError } = await supabase.storage.from("images").upload(filePath, webpBlob, {
        contentType: "image/webp",
        upsert: true
      });
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(filePath);

      setEdits((prev) => ({ ...prev, [key]: publicUrl }));
      const { error: updateError } = await supabase.from("site_content").update({ value: publicUrl }).eq("key", key);
      if (updateError) throw updateError;
      
      setSaved((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000);
    } catch (error: any) {
      alert("Error processing or uploading image: " + error.message);
    } finally {
      setUploadingKey(null);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const filteredContent = content.filter(
    (item) =>
      searchQuery === "" ||
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentSection = sidebarSections.find((s) => s.id === activeSection);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden selection:bg-indigo-100">
      
      {/* ─── Light Mode Sidebar ─────────────────────────────────────────── */}
      <aside
        className={`${sidebarOpen ? "w-72" : "w-16"} flex-shrink-0 border-r border-slate-200 bg-white flex flex-col transition-all duration-300 ease-in-out shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10`}
      >
        <div className="flex items-center gap-3 px-5 py-6 border-b border-slate-100 min-h-[80px]">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          {sidebarOpen && (
            <div className="overflow-hidden whitespace-nowrap">
              <p className="text-slate-800 font-bold text-[15px] tracking-tight">Emperor Sami</p>
              <p className="text-slate-500 text-[11px] font-semibold tracking-wider uppercase mt-0.5">CMS Dashboard</p>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-5 px-3 custom-scrollbar">
          {rootSections.map((rootItem) => {
            const children = childSections.filter(c => c.parent_id === rootItem.id);
            const isParent = children.length > 0;
            const isExpanded = expandedParents[rootItem.id];
            const isActive = activeSection === rootItem.id;

            return (
              <div key={rootItem.id} className="mb-1">
                <button
                  onClick={() => isParent ? toggleParent(rootItem.id) : setActiveSection(rootItem.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 group
                    ${isActive && !isParent ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg opacity-80">{rootItem.icon}</span>
                    {sidebarOpen && <span className="text-sm">{rootItem.label}</span>}
                  </div>
                  {sidebarOpen && isParent && (
                    <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  )}
                </button>

                {isParent && sidebarOpen && (
                  <div className={`overflow-hidden transition-all duration-300 flex flex-col ${isExpanded ? "max-h-[500px] mt-1 mb-2 opacity-100" : "max-h-0 opacity-0"}`}>
                    {children.map(child => (
                      <button
                        key={child.id}
                        onClick={() => setActiveSection(child.id)}
                        className={`w-full flex items-center gap-3 pl-10 pr-3 py-2.5 rounded-lg text-sm transition-all duration-200 
                          ${activeSection === child.id ? "bg-indigo-50/70 text-indigo-700 font-semibold border-l-2 border-indigo-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium border-l-2 border-transparent"}
                        `}
                      >
                        <span className="opacity-70 text-base">{child.icon}</span>
                        <span>{child.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-3">
            {sidebarOpen && (
              <div className="overflow-hidden">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Logged in as</p>
                <p className="text-slate-700 text-xs font-semibold truncate">{userEmail || "Admin"}</p>
              </div>
            )}
            <button
              onClick={handleSignOut}
              className="flex items-center justify-center gap-2 w-full py-2 bg-white border border-slate-200 hover:bg-slate-100 hover:border-slate-300 rounded-lg text-slate-600 font-semibold text-xs tracking-wide transition-all shadow-sm"
            >
              <LogOut size={14} />
              {sidebarOpen && "Sign Out"}
            </button>
          </div>
        </div>
      </aside>

      {/* ─── Main Content Pane ─────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#FBFBFB]">
        
        <header className="h-[80px] bg-white border-b border-slate-200 px-6 sm:px-10 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex-shrink-0 z-10">
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all shadow-sm"
            >
              <Menu size={18} />
            </button>
            <div>
              <h1 className="text-slate-900 font-extrabold text-xl tracking-tight flex items-center gap-2">
                <span>{currentSection?.icon}</span> {currentSection?.label || "Select Section"}
              </h1>
              {!isMegaMenu && (
                <p className="text-slate-500 text-xs font-medium mt-0.5">{filteredContent.length} active database fields</p>
              )}
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fields or keys..."
              className="bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all w-64 shadow-inner"
            />
          </div>
        </header>

        {/* Dynamic Fields Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
          {loading ? (
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <div className="flex flex-col items-center gap-3">
                <Loader2 size={32} className="animate-spin text-indigo-600" />
                <p className="text-slate-400 font-medium text-sm">Querying database...</p>
              </div>
            </div>
          ) : filteredContent.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2-2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
              </div>
              <p className="text-slate-700 font-bold text-lg mb-1">No content fields found</p>
              <p className="text-slate-500 text-sm">
                This section currently has no editable CMS mapping. You may need to run the SQL injection script for <b>{activeSection}</b>.
              </p>
            </div>
          ) : activeSection === "homepage_shield" ? (
            <ShieldBadgesTabbedEditor 
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              uploadingKey={uploadingKey}
              setEdits={setEdits}
              handleSave={handleSave}
              handleImageUpload={handleImageUpload}
            />
          ) : activeSection === "homepage_values" ? (
            <CoreValuesEditor
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              uploadingKey={uploadingKey}
              setEdits={setEdits}
              handleSave={handleSave}
              handleImageUpload={handleImageUpload}
            />
          ) : activeSection === "page_contact" ? (
            <ContactPageEditor
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              uploadingKey={uploadingKey}
              setEdits={setEdits}
              handleSave={handleSave}
              handleImageUpload={handleImageUpload}
            />
          ) : activeSection === "global_footer" ? (
            <FooterEditor
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              uploadingKey={uploadingKey}
              setEdits={setEdits}
              handleSave={handleSave}
              handleImageUpload={handleImageUpload}
            />
          ) : activeSection === "homepage_contact" ? (
            <ContactFormEditor
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              setEdits={setEdits}
              handleSave={handleSave}
            />
          ) : activeSection === "homepage_faq" ? (
            <FAQEditor 
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              setEdits={setEdits}
              handleSave={handleSave}
            />
          ) : activeSection === "page_about" ? (
            <AboutPageEditor
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              uploadingKey={uploadingKey}
              setEdits={setEdits}
              handleSave={handleSave}
              handleImageUpload={handleImageUpload}
            />
          ) : activeSection === "nav_mega" ? (
            <MegaMenuTabbedEditor
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              uploadingKey={uploadingKey}
              setEdits={setEdits}
              handleSave={handleSave}
              handleImageUpload={handleImageUpload}
            />
          ) : activeSection === "page_services" ? (
            <ServicesTabbedEditor
              content={filteredContent}
              edits={edits}
              saving={saving}
              saved={saved}
              uploadingKey={uploadingKey}
              setEdits={setEdits}
              handleSave={handleSave}
              handleImageUpload={handleImageUpload}
            />
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {filteredContent.map((item) => (
                <ContentField
                  key={item.key}
                  item={item}
                  value={edits[item.key] ?? ""}
                  saving={saving[item.key]}
                  saved={saved[item.key]}
                  uploading={uploadingKey === item.key}
                  onChange={(val: string) => setEdits((prev) => ({ ...prev, [item.key]: val }))}
                  onSave={() => handleSave(item.key)}
                  onImageUpload={(file: File) => handleImageUpload(item.key, file)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// ─── Tab Bar Shield Badges Extension ─────────────────────────────────────────
function ShieldBadgesTabbedEditor({ content, edits, saving, saved, uploadingKey, setEdits, handleSave, handleImageUpload }: any) {
  const [activeTab, setActiveTab] = useState("headers");
  
  const tabs = [
    { id: 'headers', label: 'Global Headers', filter: (key: string) => !key.includes('badge1') && !key.includes('badge2') && !key.includes('badge3') },
    { id: 'badge1', label: 'Badge 1', filter: (key: string) => key.includes('badge1') },
    { id: 'badge2', label: 'Badge 2', filter: (key: string) => key.includes('badge2') },
    { id: 'badge3', label: 'Badge 3', filter: (key: string) => key.includes('badge3') },
  ];

  const currentFilter = tabs.find(t => t.id === activeTab)?.filter || (() => true);
  const tabContent = content.filter((item: any) => currentFilter(item.key));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto">
      {/* Tab Row */}
      <div className="flex flex-col sm:flex-row border-b border-slate-200 bg-slate-50/50">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 px-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
              activeTab === tab.id 
                ? "bg-white text-indigo-600 border-indigo-600 shadow-[0_4px_10px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Content for Active Tab */}
      <div className="p-6 sm:p-10 bg-[#FBFBFB]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {tabContent.map((item: any) => (
            <ContentField
              key={item.key}
              item={item}
              value={edits[item.key] ?? ""}
              saving={saving[item.key]}
              saved={saved[item.key]}
              uploading={uploadingKey === item.key}
              onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
              onSave={() => handleSave(item.key)}
              onImageUpload={(file: File) => handleImageUpload(item.key, file)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── FAQ Paired Editor ───────────────────────────────────────────────────
function FAQEditor({ content, edits, saving, saved, setEdits, handleSave }: any) {
  const globalFields = content.filter((c: any) => !c.key.match(/faq\.[qa]\d/));
  const faqs = [1,2,3,4,5,6].map(num => ({
    num,
    q: content.find((c: any) => c.key === `faq.q${num}`),
    a: content.find((c: any) => c.key === `faq.a${num}`)
  })).filter(f => f.q && f.a);

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Global Headers */}
      {globalFields.length > 0 && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {globalFields.map((item: any) => (
            <ContentField
              key={item.key}
              item={item}
              value={edits[item.key] ?? ""}
              saving={saving[item.key]}
              saved={saved[item.key]}
              onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
              onSave={() => handleSave(item.key)}
            />
          ))}
        </div>
      )}

      {/* Paired FAQ Cards */}
      <div>
        <h3 className="text-slate-800 font-extrabold text-lg mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Question &amp; Answer Pairs
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map(({ num, q, a }) => {
            const isDirtyQ = (edits[q.key] ?? "") !== (q.value ?? "");
            const isDirtyA = (edits[a.key] ?? "") !== (a.value ?? "");
            const isDirty = isDirtyQ || isDirtyA;
            const isSaving = saving[q.key] || saving[a.key];
            const isSaved = saved[q.key] || saved[a.key];

            return (
              <div key={num} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-slate-800 font-bold text-[15px]">FAQ Item {num}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-slate-400 text-xs font-mono bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">{q.key} + {a.key}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-600 border border-indigo-100">
                    PAIRED
                  </span>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Question</label>
                  <input
                    type="text"
                    value={edits[q.key] ?? ""}
                    onChange={(e) => setEdits((prev: any) => ({ ...prev, [q.key]: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                    placeholder="Enter question..."
                  />
                </div>

                <div className="flex-1 mb-6">
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider">Answer</label>
                  <textarea
                    value={edits[a.key] ?? ""}
                    onChange={(e) => setEdits((prev: any) => ({ ...prev, [a.key]: e.target.value }))}
                    rows={4}
                    className="w-full h-full min-h-[100px] bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
                    placeholder="Enter answer..."
                  />
                </div>

                <div className="mt-auto flex justify-end">
                  <button
                    onClick={() => { 
                      if (isDirtyQ) handleSave(q.key); 
                      if (isDirtyA) handleSave(a.key); 
                    }}
                    disabled={!isDirty || isSaving}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all
                      ${isSaved ? "bg-emerald-500 text-white shadow-emerald-500/20" :
                        isDirty ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:-translate-y-0.5" :
                        "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
                  >
                    {isSaving ? (
                      <><Loader2 size={16} className="animate-spin" /> Saving...</>
                    ) : isSaved ? (
                      <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg> Paired Save</>
                    ) : (
                      <><Save size={16} /> Save Changes</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Contact Form Tabbed Editor ───────────────────────────────────────
function ContactFormEditor({ content, edits, saving, saved, setEdits, handleSave }: any) {
  const [activeTab, setActiveTab] = useState("headers");

  const groupFilter = (keys: string[]) => content.filter((c: any) => keys.includes(c.key));

  const headerGroup = groupFilter(['contact.badge_text', 'contact.headline', 'contact.description', 'contact.button_text']);
  const contactGroup = groupFilter(['contact.phone', 'contact.email', 'contact.location']);
  const placeholdersGroup = groupFilter([
    'contact.placeholder_name', 
    'contact.placeholder_email', 
    'contact.placeholder_phone', 
    'contact.placeholder_location', 
    'contact.placeholder_message'
  ]);

  const tabs = [
    { id: 'headers', label: 'Global Headers', fields: headerGroup },
    { id: 'contact_info', label: 'Contact Info', fields: contactGroup },
    { id: 'placeholders', label: 'Form Placeholders', fields: placeholdersGroup }
  ];

  const activeFields = tabs.find(t => t.id === activeTab)?.fields || [];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto flex flex-col sm:flex-row">
      {/* Side Tabs (Vertical) */}
      <div className="w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-50/50 flex flex-row sm:flex-col shrink-0 overflow-x-auto sm:overflow-visible">
        <div className="p-4 sm:p-5 border-b border-slate-200 hidden sm:block">
           <p className="text-slate-800 font-extrabold text-sm uppercase tracking-widest">Navigation</p>
        </div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-between py-4 sm:py-5 px-6 font-bold uppercase tracking-wider transition-all text-left whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-white text-indigo-600 sm:border-r-[3px] border-indigo-600 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent text-[11px] sm:text-xs"}
            `}
          >
            <span>{tab.label}</span>
            {tab.fields.length > 0 && (
              <span className={`hidden sm:flex text-[10px] items-center justify-center w-5 h-5 rounded-full ${activeTab === tab.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                {tab.fields.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Area */}
      <div className="flex-1 p-6 sm:p-10 bg-[#FBFBFB]">
        <div className="space-y-6 max-w-4xl">
           <h3 className="text-slate-800 font-extrabold text-xl mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              {tabs.find(t => t.id === activeTab)?.label}
           </h3>
          {activeFields.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {activeFields.map((item: any) => (
                <ContentField
                  key={item.key}
                  item={item}
                  value={edits[item.key] ?? ""}
                  saving={saving[item.key]}
                  saved={saved[item.key]}
                  onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
                  onSave={() => handleSave(item.key)}
                />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No fields found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Global Footer Editor ─────────────────────────────────────────────
function FooterEditor({ content, edits, saving, saved, uploadingKey, setEdits, handleSave, handleImageUpload }: any) {
  const [activeTab, setActiveTab] = useState("cta");

  const groupFilter = (keys: string[]) => content.filter((c: any) => keys.includes(c.key));

  const ctaGroup = groupFilter(['footer.banner_img', 'footer.banner_title', 'footer.cta_headline', 'footer.cta_desc', 'footer.cta_button', 'footer.cta_placeholder']);
  const infoGroup = groupFilter(['footer.description', 'footer.links1_header', 'footer.links2_header', 'footer.links3_header', 'footer.contact_phone', 'footer.contact_location', 'footer.contact_email']);
  const socialGroup = groupFilter(['footer.social_facebook', 'footer.social_instagram', 'footer.social_twitter', 'footer.social_houzz']);
  const bottomGroup = groupFilter(['footer.copyright', 'footer.bottom_text', 'footer.terms_text', 'footer.privacy_text']);

  const tabs = [
    { id: 'cta', label: 'Top CTA Banner', fields: ctaGroup },
    { id: 'info', label: 'Company Info & Headers', fields: infoGroup },
    { id: 'social', label: 'Social Links', fields: socialGroup },
    { id: 'bottom', label: 'Bottom Bar', fields: bottomGroup }
  ];

  const activeFields = tabs.find(t => t.id === activeTab)?.fields || [];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto flex flex-col sm:flex-row">
      {/* Side Tabs (Vertical) */}
      <div className="w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-50/50 flex flex-row sm:flex-col shrink-0 overflow-x-auto sm:overflow-visible">
        <div className="p-4 sm:p-5 border-b border-slate-200 hidden sm:block">
           <p className="text-slate-800 font-extrabold text-sm uppercase tracking-widest">Navigation</p>
        </div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-between py-4 sm:py-5 px-6 font-bold uppercase tracking-wider transition-all text-left whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-white text-indigo-600 sm:border-r-[3px] border-indigo-600 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent text-[11px] sm:text-xs"}
            `}
          >
            <span>{tab.label}</span>
            {tab.fields.length > 0 && (
              <span className={`hidden sm:flex text-[10px] items-center justify-center w-5 h-5 rounded-full ${activeTab === tab.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                {tab.fields.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Area */}
      <div className="flex-1 p-6 sm:p-10 bg-[#FBFBFB]">
        <div className="space-y-6 max-w-4xl">
           <h3 className="text-slate-800 font-extrabold text-xl mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              {tabs.find(t => t.id === activeTab)?.label}
           </h3>
          {activeFields.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {activeFields.map((item: any) => (
                <ContentField
                  key={item.key}
                  item={item}
                  value={edits[item.key] ?? ""}
                  saving={saving[item.key]}
                  saved={saved[item.key]}
                  uploading={uploadingKey === item.key}
                  onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
                  onSave={() => handleSave(item.key)}
                  onImageUpload={(file: File) => handleImageUpload(item.key, file)}
                />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No fields found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Contact Us Page Editor ───────────────────────────────────────────
function ContactPageEditor({ content, edits, saving, saved, uploadingKey, setEdits, handleSave, handleImageUpload }: any) {
  const [activeTab, setActiveTab] = useState("hero");

  const groupFilter = (keys: string[]) => content.filter((c: any) => keys.includes(c.key));

  const tabs = [
    {
      id: 'hero',
      label: 'Hero Section',
      fields: groupFilter(['contactpage.hero_img', 'contactpage.hero_label', 'contactpage.hero_title1', 'contactpage.hero_title2', 'contactpage.hero_button'])
    },
    {
      id: 'protocol',
      label: 'Initiate Protocol',
      fields: groupFilter(['contactpage.sec2_eyebrow', 'contactpage.sec2_title1', 'contactpage.sec2_title2', 'contactpage.sec2_desc', 'contactpage.sec2_box1_label', 'contactpage.sec2_phone', 'contactpage.sec2_box2_label', 'contactpage.sec2_email'])
    },
    {
      id: 'form',
      label: 'Message Box (Form)',
      fields: groupFilter(['contactpage.form_header', 'contactpage.form_subheader', 'contactpage.placeholder_name', 'contactpage.placeholder_email', 'contactpage.placeholder_phone', 'contactpage.placeholder_location', 'contactpage.placeholder_budget', 'contactpage.form_budget_placeholder', 'contactpage.form_budget_1', 'contactpage.form_budget_2', 'contactpage.form_budget_3', 'contactpage.form_budget_4', 'contactpage.placeholder_service', 'contactpage.form_service_placeholder', 'contactpage.placeholder_date', 'contactpage.placeholder_time', 'contactpage.form_time_placeholder', 'contactpage.placeholder_specs', 'contactpage.form_submit'])
    }
  ];

  const activeFields = tabs.find(t => t.id === activeTab)?.fields || [];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto flex flex-col sm:flex-row">
      {/* Side Tabs */}
      <div className="w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-50/50 flex flex-row sm:flex-col shrink-0 overflow-x-auto sm:overflow-visible">
        <div className="p-4 sm:p-5 border-b border-slate-200 hidden sm:block">
           <p className="text-slate-800 font-extrabold text-sm uppercase tracking-widest">Navigation</p>
        </div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-between py-4 sm:py-5 px-6 font-bold uppercase tracking-wider transition-all text-left whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-white text-indigo-600 sm:border-r-[3px] border-indigo-600 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent text-[11px] sm:text-xs"}
            `}
          >
            <span>{tab.label}</span>
            {tab.fields.length > 0 && (
              <span className={`hidden sm:flex text-[10px] items-center justify-center w-5 h-5 rounded-full ${activeTab === tab.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                {tab.fields.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Area */}
      <div className="flex-1 p-6 sm:p-10 bg-[#FBFBFB]">
        <div className="space-y-6 max-w-4xl">
           <h3 className="text-slate-800 font-extrabold text-xl mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              {tabs.find(t => t.id === activeTab)?.label}
           </h3>
          {activeFields.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {activeFields.map((item: any) => (
                <ContentField
                  key={item.key}
                  item={item}
                  value={edits[item.key] ?? ""}
                  saving={saving[item.key]}
                  saved={saved[item.key]}
                  uploading={uploadingKey === item.key}
                  onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
                  onSave={() => handleSave(item.key)}
                  onImageUpload={(file: File) => handleImageUpload(item.key, file)}
                />
              ))}
            </div>
          ) : (
             <p className="text-slate-500">No fields found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Core Values Paired Editor ─────────────────────────────────────────
function CoreValuesEditor({ content, edits, saving, saved, uploadingKey, setEdits, handleSave, handleImageUpload }: any) {
  const [activeTab, setActiveTab] = useState("headers");

  const globalFields = content.filter((c: any) => !c.key.match(/corevalues\.value\d/));
  const values = [1,2,3,4].map(num => ({
    num,
    title: content.find((c: any) => c.key === `corevalues.value${num}_title`),
    desc: content.find((c: any) => c.key === `corevalues.value${num}_desc`),
    img: content.find((c: any) => c.key === `corevalues.value${num}_img`)
  })).filter(v => v.title && v.desc);

  const tabs = [
    { id: 'headers', label: 'Global Headers', count: globalFields.length },
    ...values.map(v => ({ id: `value${v.num}`, label: `Value ${v.num}`, count: 3 }))
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto flex flex-col sm:flex-row">
      {/* Side Tabs (Vertical) */}
      <div className="w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-50/50 flex flex-row sm:flex-col shrink-0 overflow-x-auto sm:overflow-visible">
        <div className="p-4 sm:p-5 border-b border-slate-200 hidden sm:block">
           <p className="text-slate-800 font-extrabold text-sm uppercase tracking-widest">Navigation</p>
        </div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-between py-4 sm:py-5 px-6 font-bold uppercase tracking-wider transition-all text-left whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-white text-indigo-600 sm:border-r-[3px] border-indigo-600 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent text-[11px] sm:text-xs"}
            `}
          >
            <span>{tab.label}</span>
            {tab.count > 0 && (
              <span className={`hidden sm:flex text-[10px] items-center justify-center w-5 h-5 rounded-full ${activeTab === tab.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Area */}
      <div className="flex-1 p-6 sm:p-10 bg-[#FBFBFB]">
        {activeTab === "headers" && (
          <div className="space-y-6">
             <h3 className="text-slate-800 font-extrabold text-xl mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
                Global Headers
             </h3>
            {globalFields.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {globalFields.map((item: any) => (
                  <ContentField
                    key={item.key}
                    item={item}
                    value={edits[item.key] ?? ""}
                    saving={saving[item.key]}
                    saved={saved[item.key]}
                    onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
                    onSave={() => handleSave(item.key)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-slate-500">No global headers found.</p>
            )}
          </div>
        )}

        {values.map(v => (
          activeTab === `value${v.num}` && (
            <div key={v.num} className="space-y-6 max-w-2xl">
               {/* Header Area */}
               <div className="flex items-center justify-between mb-2">
                 <h3 className="text-slate-800 font-extrabold text-xl flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                       <path d="M2 20h20M4 20V5h16v15M8 9h8m-8 4h8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Value {v.num} Card
                 </h3>
               </div>
               <p className="text-slate-500 text-sm font-medium mb-6">
                 Edit the expanding section representing your #{v.num} core commitment.
               </p>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Card Title</label>
                  <input
                    type="text"
                    value={edits[v.title.key] ?? ""}
                    onChange={(e) => setEdits((prev: any) => ({ ...prev, [v.title.key]: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
                    placeholder="Enter title..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Detailed Description</label>
                  <textarea
                    value={edits[v.desc.key] ?? ""}
                    onChange={(e) => setEdits((prev: any) => ({ ...prev, [v.desc.key]: e.target.value }))}
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm leading-relaxed resize-none"
                    placeholder="Enter description..."
                  />
                </div>

                {v.img && (
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Hover Background Image</label>
                    <div className="space-y-4">
                      {edits[v.img.key] && (
                        <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                          <img src={edits[v.img.key]} alt="BG" className="w-full h-48 object-cover bg-slate-50" />
                        </div>
                      )}
                      <label className="flex items-center justify-center gap-2 cursor-pointer w-full border-2 border-dashed border-slate-200 rounded-xl px-4 py-4 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all duration-200">
                        {uploadingKey === v.img.key ? <Loader2 size={18} className="animate-spin text-indigo-500" /> : <UploadCloud size={20} className="text-slate-400" />}
                        <span className="text-slate-600 font-medium text-sm">
                          {uploadingKey === v.img.key ? "Uploading image..." : "Upload replacement image"}
                        </span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files && e.target.files[0]) handleImageUpload(v.img.key, e.target.files[0]); }} />
                      </label>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => { 
                      const isDirtyTitle = (edits[v.title.key] ?? "") !== (v.title.value ?? "");
                      const isDirtyDesc = (edits[v.desc.key] ?? "") !== (v.desc.value ?? "");
                      if (isDirtyTitle) handleSave(v.title.key); 
                      if (isDirtyDesc) handleSave(v.desc.key); 
                    }}
                    disabled={!((edits[v.title.key] ?? "") !== (v.title.value ?? "") || (edits[v.desc.key] ?? "") !== (v.desc.value ?? "")) || saving[v.title.key] || saving[v.desc.key]}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all
                      ${saved[v.title.key] || saved[v.desc.key] ? "bg-emerald-500 text-white shadow-emerald-500/20" :
                        (edits[v.title.key] ?? "") !== (v.title.value ?? "") || (edits[v.desc.key] ?? "") !== (v.desc.value ?? "") ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:-translate-y-0.5" :
                        "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
                  >
                    {saving[v.title.key] || saving[v.desc.key] ? (
                      <><Loader2 size={16} className="animate-spin" /> Saving...</>
                    ) : saved[v.title.key] || saved[v.desc.key] ? (
                      <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg> Paired Save</>
                    ) : (
                      <><Save size={16} /> Save Active Card</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

// ─── Content Field Component (Light Mode Refactor) ──────────────────────────
function ContentField({ item, value, saving, saved, uploading, onChange, onSave, onImageUpload }: any) {
  const isDirty = value !== (item.value ?? "");

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative group flex flex-col h-full">
      {/* Field Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <p className="text-slate-800 font-bold text-[15px]">{item.label}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-slate-400 text-xs font-mono bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">{item.key}</span>
          </div>
        </div>
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex-shrink-0 border
          ${item.type === "image" ? "bg-purple-50 text-purple-600 border-purple-100" :
            item.type === "textarea" ? "bg-amber-50 text-amber-600 border-amber-100" :
            "bg-blue-50 text-blue-600 border-blue-100"}`}>
          {item.type}
        </span>
      </div>

      {/* Input Area */}
      <div className="flex-1">
        {item.type === "image" ? (
          <div className="space-y-4">
            {value && (
              <div className="relative group/img overflow-hidden rounded-xl border border-slate-200">
                <img src={value} alt={item.label} className="w-full h-40 object-cover bg-slate-50" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white text-xs font-semibold px-3 py-1 bg-black/50 rounded-full">Current Image</span>
                </div>
              </div>
            )}
            <label className="flex items-center justify-center gap-2 cursor-pointer w-full border-2 border-dashed border-slate-200 rounded-xl px-4 py-6 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all duration-200">
              {uploading ? (
                <Loader2 size={18} className="animate-spin text-indigo-500" />
              ) : (
                <UploadCloud size={20} className="text-slate-400" />
              )}
              <span className="text-slate-600 font-medium text-sm">
                {uploading ? "Uploading chunk..." : "Upload new image"}
              </span>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                if (e.target.files && e.target.files[0]) onImageUpload(e.target.files[0]);
              }} />
            </label>
          </div>
        ) : item.type === "textarea" ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
            placeholder="Enter configuration value..."
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm font-medium"
            placeholder="Enter configuration value..."
          />
        )}
      </div>

      {/* Save Trigger */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onSave}
          disabled={!isDirty || saving}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all
            ${saved ? "bg-emerald-500 text-white shadow-emerald-500/20" :
            isDirty ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:-translate-y-0.5" :
            "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
        >
          {saving ? (
            <><Loader2 size={16} className="animate-spin" /> Saving...</>
          ) : saved ? (
            <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg> Deployed Live</>
          ) : (
            <><Save size={16} /> Save Changes</>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── About Page Tabbed Editor ────────────────────────────────────
function AboutPageEditor({ content, edits, saving, saved, uploadingKey, setEdits, handleSave, handleImageUpload }: any) {
  const [activeTab, setActiveTab] = useState("hero");
  const [activeSubTab, setActiveSubTab] = useState("General Setup");

  // Reset subtab when changing main tab
  useEffect(() => {
    setActiveSubTab("General Setup");
  }, [activeTab]);

  const groupFilter = (matchStr: string) => content.filter((c: any) => c.key.includes(matchStr));

  const tabs = [
    { id: 'hero', label: 'Hero Section', fields: groupFilter('about.hero') },
    { id: 'apex', label: 'Apex Executions', fields: groupFilter('about.apex') },
    { id: 'team', label: 'The Elite Team', fields: groupFilter('about.team') },
    { id: 'promise', label: 'Our Promise', fields: groupFilter('about.promise') },
  ];

  const activeFields = tabs.find(t => t.id === activeTab)?.fields || [];

  const getSubGroup = (key: string) => {
    if (key.includes(".shard.1.")) return "Shard 1";
    if (key.includes(".shard.2.")) return "Shard 2";
    if (key.includes(".shard.3.")) return "Shard 3";
    if (key.includes(".card.1.")) return "Card 1";
    if (key.includes(".card.2.")) return "Card 2";
    if (key.includes(".card.3.")) return "Card 3";
    if (key.includes(".card.4.")) return "Card 4";
    if (key.includes(".reveal.")) return "Hover Reveal";
    if (key.includes(".1.")) return "Item 1";
    if (key.includes(".2.")) return "Item 2";
    if (key.includes(".3.")) return "Item 3";
    if (key.includes(".4.")) return "Item 4";
    if (key.includes(".5.")) return "Item 5";
    if (key.includes(".6.")) return "Item 6";
    return "General Setup";
  };

  const subGroups = (Array.from(new Set(activeFields.map((f: any) => getSubGroup(f.key)))) as string[]).sort((a, b) => {
    if (a === "General Setup") return -1;
    if (b === "General Setup") return 1;
    return a.localeCompare(b);
  });

  // Ensure activeSubTab is always valid
  const validSubTab = subGroups.includes(activeSubTab) ? activeSubTab : subGroups[0] || "General Setup";
  const displayFields = activeFields.filter((f: any) => getSubGroup(f.key) === validSubTab);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto flex flex-col sm:flex-row">
      {/* Side Tabs (Vertical) */}
      <div className="w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-50/50 flex flex-row sm:flex-col shrink-0 overflow-x-auto sm:overflow-visible">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-between py-4 sm:py-5 px-6 font-bold uppercase tracking-wider transition-all text-left whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-white text-indigo-600 sm:border-r-[3px] border-indigo-600 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent text-[11px] sm:text-xs"}
            `}
          >
            <span>{tab.label}</span>
            {tab.fields.length > 0 && (
              <span className={`hidden sm:flex text-[10px] items-center justify-center w-5 h-5 rounded-full ${activeTab === tab.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-200 text-slate-500'}`}>
                {tab.fields.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Area */}
      <div className="flex-1 p-6 sm:p-10 bg-[#FBFBFB]">
        <div className="space-y-6 max-w-4xl">
          {subGroups.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
              {subGroups.map(sg => (
                <button
                  key={sg}
                  onClick={() => setActiveSubTab(sg)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    validSubTab === sg 
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {sg}
                </button>
              ))}
            </div>
          )}
          
          {displayFields.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {displayFields.map((item: any) => (
                <ContentField
                  key={item.key}
                  item={item}
                  value={edits[item.key] ?? ""}
                  saving={saving[item.key]}
                  saved={saved[item.key]}
                  uploading={uploadingKey === item.key}
                  onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
                  onSave={() => handleSave(item.key)}
                  onImageUpload={(file: File) => handleImageUpload(item.key, file)}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 italic">No content fields mapped to this section.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Mega Menu Tabbed Editor ───────────────────────────
function MegaMenuTabbedEditor({ content, edits, saving, saved, uploadingKey, setEdits, handleSave, handleImageUpload }: any) {
  const [activeTab, setActiveTab] = useState("residential");

  const groupFilter = (keys: string[]) => content.filter((c: any) => keys.some((k) => c.key.includes(k)));

  const tabs = [
    { id: 'residential', label: 'Res Division', filter: (key: string) => key.includes('nav.mega.res') },
    { id: 'commercial', label: 'Com Division', filter: (key: string) => key.includes('nav.mega.com') },
    { id: 'how', label: 'How it Works', filter: (key: string) => key.includes('nav.mega.how') }
  ];

  const currentFilter = tabs.find(t => t.id === activeTab)?.filter || (() => true);
  const tabContent = content.filter((item: any) => currentFilter(item.key));

  const getSubGroup = (key: string) => {
    if (key.includes('.title') && !key.includes('.sec') && !key.includes('.step')) return "General Info";
    if (key.includes('.desc') && !key.includes('.step')) return "General Info";
    if (key.includes('.sec1')) return "Column 1";
    if (key.includes('.sec2')) return "Column 2";
    if (key.includes('.sec3')) return "Column 3";
    if (key.includes('.sec4')) return "Column 4";
    if (key.includes('.step1')) return "Step 1";
    if (key.includes('.step2')) return "Step 2";
    if (key.includes('.step3')) return "Step 3";
    return "General Info";
  };

  const subGroups = (Array.from(new Set(tabContent.map((f: any) => getSubGroup(f.key)))) as string[]).sort((a, b) => {
    if (a === "General Info") return -1;
    if (b === "General Info") return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto flex flex-col sm:flex-row">
      <div className="w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-50/50 flex flex-row sm:flex-col shrink-0 overflow-x-auto sm:overflow-visible">
        <div className="p-4 sm:p-5 border-b border-slate-200 hidden sm:block">
           <p className="text-slate-800 font-extrabold text-sm uppercase tracking-widest">Navigation</p>
        </div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-between py-4 sm:py-5 px-6 font-bold uppercase tracking-wider transition-all text-left whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-white text-indigo-600 sm:border-r-[3px] border-indigo-600 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent text-[11px] sm:text-xs"}
            `}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="flex-1 p-6 sm:p-10 bg-[#FBFBFB] space-y-12 max-h-[80vh] overflow-y-auto custom-scrollbar">
        {subGroups.map((group) => {
          const groupFields = tabContent.filter((f: any) => getSubGroup(f.key) === group);
          return (
            <div key={group} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-slate-800 font-extrabold text-lg uppercase tracking-wider">
                  {group}
                </h3>
                <div className="flex-1 h-[1px] bg-slate-200"></div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {groupFields.map((item: any) => (
                  <ContentField
                    key={item.key}
                    item={item}
                    value={edits[item.key] ?? ""}
                    saving={saving[item.key]}
                    saved={saved[item.key]}
                    uploading={uploadingKey === item.key}
                    onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
                    onSave={() => handleSave(item.key)}
                    onImageUpload={(file: File) => handleImageUpload(item.key, file)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Services Tabbed Editor ───────────────────────────
function ServicesTabbedEditor({ content, edits, saving, saved, uploadingKey, setEdits, handleSave, handleImageUpload }: any) {
  const [activeTab, setActiveTab] = useState("ui_text");

  const tabs = [
    { id: 'ui_text', label: 'Grid UI Strings', filter: (key: string) => key.includes('services.grid') },
    { id: 'res_cards', label: 'Residential Cards', filter: (key: string) => !key.includes('services.grid') && !['ground', 'design', 'material', 'tenant', 'vanilla', 'office', 'ada', 'adaptive', 'executive', 'cafeteria', 'acoustic', 'commercial', 'facade', 'storefront', 'security'].some(sub => key.includes(sub)) },
    { id: 'com_cards', label: 'Commercial Cards', filter: (key: string) => !key.includes('services.grid') && ['ground', 'design', 'material', 'tenant', 'vanilla', 'office', 'ada', 'adaptive', 'executive', 'cafeteria', 'acoustic', 'commercial', 'facade', 'storefront', 'security'].some(sub => key.includes(sub)) }
  ];

  const currentFilter = tabs.find(t => t.id === activeTab)?.filter || (() => true);
  const tabContent = content.filter((item: any) => currentFilter(item.key));

  const getSubGroup = (key: string) => {
    if (key.includes('services.grid')) return "Grid Display Labels";
    const slugParts = key.split('.');
    // e.g. new-construction.card.title
    if (slugParts.length > 0) {
      const rawSlug = slugParts[0];
      return rawSlug.replace(/-/g, ' ').replace(/\b\w/g, (l: any) => l.toUpperCase());
    }
    return "General Info";
  };

  const subGroups = (Array.from(new Set(tabContent.map((f: any) => getSubGroup(f.key)))) as string[]).sort((a, b) => {
    return a.localeCompare(b);
  });

  // Need sub-tabs to avoid massive vertical scrolling because there are 17 groups now
  const [activeSubGroup, setActiveSubGroup] = useState<string | null>(null);
  const currentSubGroup = activeSubGroup && subGroups.includes(activeSubGroup) ? activeSubGroup : subGroups[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-7xl mx-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50 flex flex-row lg:flex-col shrink-0 overflow-x-auto lg:overflow-visible">
        <div className="p-4 sm:p-5 border-b border-slate-200 hidden lg:block">
           <p className="text-slate-800 font-extrabold text-sm uppercase tracking-widest">Navigation</p>
        </div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setActiveSubGroup(null); }}
            className={`flex items-center justify-between py-4 sm:py-5 px-6 font-bold uppercase tracking-wider transition-all text-left whitespace-nowrap
              ${activeTab === tab.id 
                ? "bg-white text-indigo-600 lg:border-r-[3px] border-indigo-600 shadow-[-4px_0_15px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100 border-transparent text-[11px] sm:text-xs"}
            `}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="flex-1 flex flex-col max-h-[80vh]">
        
        {subGroups.length > 1 && (
           <div className="p-4 border-b border-slate-200 bg-slate-50 flex gap-2 overflow-x-auto custom-scrollbar shrink-0">
              {subGroups.map(group => (
                 <button 
                    key={group}
                    onClick={() => setActiveSubGroup(group)}
                    className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                        currentSubGroup === group ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" : "bg-white border border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                 >
                   {group}
                 </button>
              ))}
           </div>
        )}

        <div className="p-6 sm:p-10 bg-[#FBFBFB] overflow-y-auto space-y-12">
          {subGroups.filter(g => activeTab === 'ui_text' || g === currentSubGroup).map((group) => {
            const groupFields = tabContent.filter((f: any) => getSubGroup(f.key) === group);
            return (
              <div key={group} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-slate-800 font-extrabold text-lg uppercase tracking-wider">
                    {group}
                  </h3>
                  <div className="flex-1 h-[1px] bg-slate-200"></div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {groupFields.map((item: any) => (
                    <ContentField
                      key={item.key}
                      item={item}
                      value={edits[item.key] ?? ""}
                      saving={saving[item.key]}
                      saved={saved[item.key]}
                      uploading={uploadingKey === item.key}
                      onChange={(val: string) => setEdits((prev: any) => ({ ...prev, [item.key]: val }))}
                      onSave={() => handleSave(item.key)}
                      onImageUpload={(file: File) => handleImageUpload(item.key, file)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
