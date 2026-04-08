"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState, useCallback } from "react";

interface Lead {
  id: string;
  created_at: string;
  source: string;
  full_name: string;
  email: string;
  phone: string;
  project_location: string;
  allocation_range: string;
  service_scope: string;
  consultation_date: string;
  preferred_time: string;
  message: string;
  status: string;
  notes: string;
}

interface Subscriber {
  id: string;
  created_at: string;
  email: string;
  status: string;
}

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  new:       { label: "New",       bg: "bg-amber-50",  text: "text-amber-700",  dot: "bg-amber-400" },
  contacted: { label: "Contacted", bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-400" },
  qualified: { label: "Qualified", bg: "bg-green-50",  text: "text-green-700",  dot: "bg-green-500" },
  closed:    { label: "Closed",    bg: "bg-slate-100", text: "text-slate-500",  dot: "bg-slate-400" },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.new;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${cfg.bg} ${cfg.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

// ── LEADS CRM ─────────────────────────────────────────────────────────────────
export function LeadsCRM() {
  const supabase = createClient();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSource, setFilterSource] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState<Record<string, string>>({});
  const [editStatus, setEditStatus] = useState<Record<string, string>>({});

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    if (data) {
      setLeads(data as Lead[]);
      const notes: Record<string, string> = {};
      const statuses: Record<string, string> = {};
      data.forEach((l: Lead) => {
        notes[l.id] = l.notes || "";
        statuses[l.id] = l.status || "new";
      });
      setEditNotes(notes);
      setEditStatus(statuses);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const saveLead = async (id: string) => {
    setSavingId(id);
    await supabase.from("leads").update({ status: editStatus[id], notes: editNotes[id] }).eq("id", id);
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: editStatus[id], notes: editNotes[id] } : l));
    setSavingId(null);
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this lead?")) return;
    setSavingId(id);
    await supabase.from("leads").delete().eq("id", id);
    setLeads(prev => prev.filter(l => l.id !== id));
    setSavingId(null);
    setExpandedId(null);
  };

  const filtered = leads.filter(l => {
    if (filterStatus !== "all" && l.status !== filterStatus) return false;
    if (filterSource !== "all" && l.source !== filterSource) return false;
    return true;
  });

  const counts = { all: leads.length, new: 0, contacted: 0, qualified: 0, closed: 0 };
  leads.forEach(l => { if (l.status in counts) (counts as any)[l.status]++; });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {(["all", "new", "contacted", "qualified", "closed"] as const).filter(k => k !== "all").map(key => {
          const cfg = STATUS_CONFIG[key];
          return (
            <button key={key} onClick={() => setFilterStatus(key === filterStatus ? "all" : key)}
              className={`p-4 rounded-xl border text-left transition-all ${filterStatus === key ? `${cfg.bg} border-current ${cfg.text}` : "bg-white border-slate-200 hover:border-slate-300"}`}>
              <p className="text-2xl font-black">{(counts as any)[key]}</p>
              <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${filterStatus === key ? cfg.text : "text-slate-500"}`}>{cfg.label}</p>
            </button>
          );
        })}
      </div>

      {/* Filters Row */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-wrap gap-3 items-center">
        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Filter:</span>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
          className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 bg-slate-50">
          <option value="all">All Status</option>
          {Object.entries(STATUS_CONFIG).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
        </select>
        <select value={filterSource} onChange={e => setFilterSource(e.target.value)}
          className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 bg-slate-50">
          <option value="all">All Sources</option>
          <option value="contact_page">Secure Data Link</option>
          <option value="homepage_contact">Homepage Form</option>
        </select>
        <span className="ml-auto text-slate-400 text-xs font-medium">{filtered.length} of {leads.length} leads</span>
      </div>

      {/* Leads List */}
      {loading ? (
        <div className="bg-white rounded-xl border border-slate-200 p-16 text-center">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-slate-400 text-sm font-medium">Loading leads...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-16 text-center">
          <p className="text-5xl mb-4">📋</p>
          <p className="text-slate-700 font-bold text-lg">No leads yet</p>
          <p className="text-slate-400 text-sm mt-1">Submissions from your contact forms will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(lead => (
            <div key={lead.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              {/* Lead Row */}
              <button onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                className="w-full text-left px-5 py-4 flex flex-wrap gap-3 items-center hover:bg-slate-50 transition-colors">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-sm flex-shrink-0">
                  {(lead.full_name || "?")[0].toUpperCase()}
                </div>
                {/* Name + email */}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-slate-900 text-sm truncate">{lead.full_name || "—"}</p>
                  <p className="text-slate-400 text-xs truncate">{lead.email}</p>
                </div>
                {/* Budget */}
                <div className="hidden md:block text-right">
                  <p className="text-xs font-bold text-slate-700 truncate">{lead.allocation_range || "—"}</p>
                  <p className="text-slate-400 text-[11px]">{lead.service_scope || "—"}</p>
                </div>
                {/* Source */}
                <span className="hidden lg:inline text-[11px] font-bold px-2 py-1 rounded-md bg-slate-100 text-slate-500 uppercase tracking-wider">
                  {lead.source === "contact_page" ? "Secure Link" : "Homepage"}
                </span>
                {/* Status */}
                <StatusBadge status={lead.status} />
                {/* Date */}
                <p className="text-slate-400 text-xs hidden sm:block flex-shrink-0">{formatDate(lead.created_at)}</p>
                {/* Chevron */}
                <svg className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${expandedId === lead.id ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>

              {/* Expanded Detail */}
              {expandedId === lead.id && (
                <div className="border-t border-slate-100 px-5 py-5 bg-slate-50 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    {[
                      { label: "Phone", value: lead.phone },
                      { label: "Project Location", value: lead.project_location },
                      { label: "Budget", value: lead.allocation_range },
                      { label: "Service", value: lead.service_scope },
                      { label: "Consultation Date", value: lead.consultation_date },
                      { label: "Preferred Time", value: lead.preferred_time },
                    ].map(f => (
                      <div key={f.label}>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{f.label}</p>
                        <p className="text-slate-800 font-medium">{f.value || "—"}</p>
                      </div>
                    ))}
                  </div>
                  {lead.message && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Project Specifications</p>
                      <p className="text-slate-700 text-sm leading-relaxed bg-white border border-slate-200 rounded-lg p-3">{lead.message}</p>
                    </div>
                  )}
                  {/* Status + Notes editor */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2 border-t border-slate-200">
                    <div className="flex-shrink-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Status</p>
                      <select value={editStatus[lead.id] || "new"} onChange={e => setEditStatus(p => ({ ...p, [lead.id]: e.target.value }))}
                        className="text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 bg-white">
                        {Object.entries(STATUS_CONFIG).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
                      </select>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Internal Notes</p>
                      <textarea value={editNotes[lead.id] || ""} onChange={e => setEditNotes(p => ({ ...p, [lead.id]: e.target.value }))}
                        rows={2} placeholder="Add notes about this lead..."
                        className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 bg-white resize-none" />
                    </div>
                    <div className="flex items-end gap-2">
                      <button onClick={() => deleteLead(lead.id)} disabled={savingId === lead.id}
                        className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 disabled:opacity-50 text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                        Delete
                      </button>
                      <button onClick={() => saveLead(lead.id)} disabled={savingId === lead.id}
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                        {savingId === lead.id ? (
                          <><span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />Saving...</>
                        ) : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── SUBSCRIBERS CRM ───────────────────────────────────────────────────────────
export function SubscribersCRM() {
  const supabase = createClient();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubs = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from("subscribers").select("*").order("created_at", { ascending: false });
    if (data) setSubscribers(data as Subscriber[]);
    setLoading(false);
  }, [supabase]);

  useEffect(() => { fetchSubs(); }, [fetchSubs]);

  const toggle = async (sub: Subscriber) => {
    const newStatus = sub.status === "active" ? "unsubscribed" : "active";
    await supabase.from("subscribers").update({ status: newStatus }).eq("id", sub.id);
    setSubscribers(prev => prev.map(s => s.id === sub.id ? { ...s, status: newStatus } : s));
  };

  const deleteSub = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this subscriber?")) return;
    await supabase.from("subscribers").delete().eq("id", id);
    setSubscribers(prev => prev.filter(s => s.id !== id));
  };

  const activeCount = subscribers.filter(s => s.status === "active").length;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Stat */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-2xl font-black text-slate-900">{subscribers.length}</p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-0.5">Total Subscribers</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-2xl font-black text-green-700">{activeCount}</p>
          <p className="text-xs font-bold uppercase tracking-wider text-green-600 mt-0.5">Active</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-16 text-center">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-slate-400 text-sm">Loading subscribers...</p>
          </div>
        ) : subscribers.length === 0 ? (
          <div className="p-16 text-center">
            <p className="text-5xl mb-4">📧</p>
            <p className="text-slate-700 font-bold text-lg">No subscribers yet</p>
            <p className="text-slate-400 text-sm mt-1">Footer email subscriptions will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Email</th>
                  <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Subscribed</th>
                  <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {subscribers.map(sub => (
                  <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-slate-800">{sub.email}</td>
                    <td className="px-5 py-3.5 text-slate-400">{formatDate(sub.created_at)}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${sub.status === "active" ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-500"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${sub.status === "active" ? "bg-green-500" : "bg-slate-400"}`} />
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right flex justify-end gap-4">
                      <button onClick={() => toggle(sub)}
                        className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
                        {sub.status === "active" ? "Unsubscribe" : "Reactivate"}
                      </button>
                      <button onClick={() => deleteSub(sub.id)}
                        className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
