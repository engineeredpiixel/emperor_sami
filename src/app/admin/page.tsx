"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContentItem {
  id: string;
  section: string;
  key: string;
  value: string;
  type: "text" | "textarea" | "image";
  label: string;
}

// ─── Sidebar Sections ─────────────────────────────────────────────────────────
const SECTIONS = [
  { id: "hero", label: "Hero Section", icon: "🏠" },
  { id: "about", label: "About Section", icon: "👤" },
  { id: "services", label: "Services", icon: "⚙️" },
  { id: "projects", label: "Projects", icon: "📁" },
  { id: "testimonials", label: "Testimonials", icon: "💬" },
  { id: "shieldbadges", label: "Shield Badges", icon: "🛡️" },
  { id: "servicearea", label: "Service Area", icon: "📍" },
  { id: "corevalues", label: "Core Values", icon: "💎" },
  { id: "scrolling", label: "Scrolling Text", icon: "📜" },
  { id: "cta", label: "CTA Section", icon: "🎯" },
  { id: "commitment", label: "Commitment", icon: "🏆" },
  { id: "faq", label: "FAQ", icon: "❓" },
  { id: "contact", label: "Contact", icon: "📞" },
  { id: "footer", label: "Footer", icon: "📄" },
  { id: "navbar", label: "Navigation", icon: "🧭" },
];

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createClient();

  const [activeSection, setActiveSection] = useState("hero");
  const [content, setContent] = useState<ContentItem[]>([]);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ── Fetch user ──
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserEmail(data.user.email ?? "");
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

  // ── Save a single field ──
  const handleSave = async (key: string) => {
    setSaving((prev) => ({ ...prev, [key]: true }));
    const { error } = await supabase
      .from("site_content")
      .update({ value: edits[key] })
      .eq("key", key)
      .eq("section", activeSection);

    setSaving((prev) => ({ ...prev, [key]: false }));
    if (!error) {
      setSaved((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000);
    }
  };

  // ── Upload image to Supabase Storage ──
  const handleImageUpload = async (key: string, file: File) => {
    setUploadingKey(key);
    const ext = file.name.split(".").pop();
    const filename = `${key.replace(/\./g, "_")}_${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("cms_assets")
      .upload(filename, file, { upsert: true });

    if (!uploadError) {
      const { data } = supabase.storage.from("cms_assets").getPublicUrl(filename);
      const publicUrl = data.publicUrl;
      setEdits((prev) => ({ ...prev, [key]: publicUrl }));
      await supabase
        .from("site_content")
        .update({ value: publicUrl })
        .eq("key", key)
        .eq("section", activeSection);
      setSaved((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000);
    }
    setUploadingKey(null);
  };

  // ── Sign out ──
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

  const currentSection = SECTIONS.find((s) => s.id === activeSection);

  return (
    <div className="flex h-screen bg-[#080808] text-white overflow-hidden">
      {/* ─── Sidebar ──────────────────────────────────────────────── */}
      <aside
        className={`${sidebarOpen ? "w-64" : "w-16"} flex-shrink-0 border-r border-white/8 bg-[#0c0c0c] flex flex-col transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/8 min-h-[72px]">
          <div className="w-8 h-8 rounded-lg bg-[#F9A825]/15 border border-[#F9A825]/25 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-[#F9A825]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          {sidebarOpen && (
            <div className="overflow-hidden">
              <p className="text-white font-black text-sm tracking-tight">Emperor Sami</p>
              <p className="text-white/30 text-[10px] tracking-widest uppercase">CMS Dashboard</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 text-left transition-all duration-150 group
                ${activeSection === section.id
                  ? "bg-[#F9A825]/12 text-[#F9A825]"
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
                }`}
            >
              <span className="text-base flex-shrink-0">{section.icon}</span>
              {sidebarOpen && (
                <span className="text-sm font-medium truncate">{section.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* User */}
        {sidebarOpen && (
          <div className="p-3 border-t border-white/8">
            <div className="flex items-center gap-2 px-2 py-2 rounded-xl bg-white/5 mb-2">
              <div className="w-7 h-7 rounded-full bg-[#F9A825]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#F9A825] text-xs font-bold">{userEmail[0]?.toUpperCase()}</span>
              </div>
              <p className="text-white/50 text-xs truncate">{userEmail}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-white/30 hover:text-red-400 hover:bg-red-500/8 transition-all duration-150 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              Sign Out
            </button>
          </div>
        )}
      </aside>

      {/* ─── Main Content ──────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-[#0c0c0c] min-h-[72px]">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
              </svg>
            </button>
            <div>
              <h1 className="text-white font-black text-lg">
                {currentSection?.icon} {currentSection?.label}
              </h1>
              <p className="text-white/30 text-xs">{filteredContent.length} editable fields</p>
            </div>
          </div>
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fields..."
              className="bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 w-56"
            />
          </div>
        </header>

        {/* Fields */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-[#F9A825]/30 border-t-[#F9A825] rounded-full animate-spin" />
            </div>
          ) : filteredContent.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-white/20 text-lg mb-2">No content fields found</p>
              <p className="text-white/15 text-sm">
                This section has no editable content yet. Run the SQL setup script to populate it.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-6xl">
              {filteredContent.map((item) => (
                <ContentField
                  key={item.key}
                  item={item}
                  value={edits[item.key] ?? ""}
                  saving={saving[item.key]}
                  saved={saved[item.key]}
                  uploading={uploadingKey === item.key}
                  onChange={(val) => setEdits((prev) => ({ ...prev, [item.key]: val }))}
                  onSave={() => handleSave(item.key)}
                  onImageUpload={(file) => handleImageUpload(item.key, file)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// ─── Content Field Component ──────────────────────────────────────────────────
function ContentField({
  item,
  value,
  saving,
  saved,
  uploading,
  onChange,
  onSave,
  onImageUpload,
}: {
  item: ContentItem;
  value: string;
  saving?: boolean;
  saved?: boolean;
  uploading?: boolean;
  onChange: (v: string) => void;
  onSave: () => void;
  onImageUpload: (file: File) => void;
}) {
  const isDirty = value !== (item.value ?? "");

  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-white/12 transition-all duration-200">
      {/* Field Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-white font-semibold text-sm">{item.label}</p>
          <p className="text-white/25 text-xs font-mono mt-0.5">{item.key}</p>
        </div>
        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider flex-shrink-0
          ${item.type === "image" ? "bg-purple-500/15 text-purple-300" :
            item.type === "textarea" ? "bg-blue-500/15 text-blue-300" :
            "bg-white/8 text-white/30"}`}>
          {item.type}
        </span>
      </div>

      {/* Input */}
      {item.type === "image" ? (
        <div className="space-y-3">
          {value && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt={item.label} className="w-full h-32 object-cover rounded-xl border border-white/10" />
          )}
          <label className="flex items-center gap-2 cursor-pointer w-full border border-dashed border-white/15 rounded-xl px-4 py-3 hover:border-[#F9A825]/40 hover:bg-[#F9A825]/5 transition-all duration-200 group">
            <svg className="w-4 h-4 text-white/30 group-hover:text-[#F9A825]/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <span className="text-white/30 group-hover:text-white/50 text-sm">
              {uploading ? "Uploading..." : "Click to upload new image"}
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              disabled={uploading}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onImageUpload(file);
              }}
            />
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-white/5 border border-white/8 rounded-xl px-3 py-2 text-white/50 text-xs font-mono focus:outline-none focus:border-white/20"
            placeholder="Or paste image URL..."
          />
        </div>
      ) : item.type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm resize-none focus:outline-none focus:border-[#F9A825]/40 focus:bg-white/[0.06] transition-all duration-200"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F9A825]/40 focus:bg-white/[0.06] transition-all duration-200"
        />
      )}

      {/* Save Button */}
      {item.type !== "image" && (
        <div className="flex justify-end mt-3">
          <button
            onClick={onSave}
            disabled={saving || !isDirty}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200
              ${saved
                ? "bg-green-500/15 text-green-400 border border-green-500/20"
                : isDirty
                ? "bg-[#F9A825] text-[#080808] hover:bg-[#F9A825]/90"
                : "bg-white/5 text-white/20 cursor-not-allowed"
              }`}
          >
            {saving ? (
              <><div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" /> Saving</>
            ) : saved ? (
              <><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg> Saved!</>
            ) : (
              "Save"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
