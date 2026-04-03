"use client";

import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createBrowserClient } from "@supabase/ssr";
import { Plus, Trash2, Loader2, Save } from "lucide-react";

const stringItemSchema = z.object({ value: z.string().min(1, "Cannot be empty") });

const categorySchema = z.object({
  title: z.string().min(1, "Title is required"),
  items: z.array(stringItemSchema),
});

const stepSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

const megaMenuSchema = z.object({
  residential: z.object({
    title: z.string().min(1, "Required"),
    description: z.string().min(1, "Required"),
    categories: z.array(categorySchema),
  }),
  commercial: z.object({
    title: z.string().min(1, "Required"),
    description: z.string().min(1, "Required"),
    categories: z.array(categorySchema),
  }),
  howItWorks: z.object({
    title: z.string().min(1, "Required"),
    steps: z.array(stepSchema),
  }),
  actions: z.object({
    primaryButton: z.string().min(1, "Required"),
    secondaryLink: z.string().min(1, "Required"),
  }),
});

type MegaMenuFormValues = z.infer<typeof megaMenuSchema>;

const CategoryItemEditor = ({ control, register, categoryIndex, type }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${type}.categories.${categoryIndex}.items`,
  });

  return (
    <div className="pl-5 border-l-2 border-slate-200 mt-4 space-y-3">
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 items-center">
          <input
            {...register(`${type}.categories.${categoryIndex}.items.${index}.value`)}
            className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            placeholder="Link item name"
          />
          <button type="button" onClick={() => remove(index)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ value: "" })}
        className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 mt-3 transition-colors font-semibold"
      >
        <Plus size={16} strokeWidth={2.5} /> Add Link Item
      </button>
    </div>
  );
};

const CategoryEditor = ({ control, register, type }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${type}.categories`,
  });

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative group shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 mr-4">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Category Title</label>
              <input
                {...register(`${type}.categories.${index}.title`)}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
                placeholder="e.g. Custom Home Building"
              />
            </div>
            <button type="button" onClick={() => remove(index)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Category Links ({type})</label>
          <CategoryItemEditor control={control} register={register} categoryIndex={index} type={type} />
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ title: "", items: [{ value: "" }] })}
        className="w-full py-4 border-2 border-dashed border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 hover:border-indigo-300 rounded-xl text-indigo-600 transition-all flex items-center justify-center gap-2 font-bold text-sm shadow-sm"
      >
        <Plus size={18} strokeWidth={2.5} /> Add New Category
      </button>
    </div>
  );
};

const HowItWorksEditor = ({ control, register }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "howItWorks.steps",
  });

  return (
    <div className="space-y-5">
      {fields.map((field, index) => (
        <div key={field.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-1 space-y-4">
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Step {index + 1} Title</label>
              <input
                {...register(`howItWorks.steps.${index}.title`)}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Description</label>
              <textarea
                {...register(`howItWorks.steps.${index}.description`)}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-700 min-h-[90px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm text-sm leading-relaxed"
              />
            </div>
          </div>
          <button type="button" onClick={() => remove(index)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-7">
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ title: "", description: "" })}
        className="w-full py-4 border-2 border-dashed border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 hover:border-indigo-300 rounded-xl text-indigo-600 transition-all flex items-center justify-center gap-2 font-bold text-sm shadow-sm"
      >
        <Plus size={18} strokeWidth={2.5} /> Add Step
      </button>
    </div>
  );
};

export default function MegaMenuEditor() {
  const [activeTab, setActiveTab] = useState("residential");
  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const form = useForm<MegaMenuFormValues>({
    resolver: zodResolver(megaMenuSchema),
    defaultValues: async () => {
      const { data } = await supabase.from('site_content').select('value').eq('key', 'navbar.mega_menu_json').single();
      const initialJson = data?.value;
      if (initialJson) {
        try {
          const parsed = typeof initialJson === 'string' ? JSON.parse(initialJson) : initialJson;
          const transformCategories = (cats: any[]) => cats.map(c => ({
            title: c.title || "",
            items: (c.items || []).map((i: string) => ({ value: i }))
          }));
          return {
            residential: {
              title: parsed.residential?.title || "",
              description: parsed.residential?.description || "",
              categories: transformCategories(parsed.residential?.categories || [])
            },
            commercial: {
              title: parsed.commercial?.title || "",
              description: parsed.commercial?.description || "",
              categories: transformCategories(parsed.commercial?.categories || [])
            },
            howItWorks: {
              title: parsed.howItWorks?.title || "",
              steps: parsed.howItWorks?.steps || []
            },
            actions: {
              primaryButton: parsed.actions?.primaryButton || "",
              secondaryLink: parsed.actions?.secondaryLink || ""
            }
          };
        } catch (e) {
          console.error("Failed to parse mega menu JSON", e);
        }
      }
      return {
        residential: { title: "", description: "", categories: [] },
        commercial: { title: "", description: "", categories: [] },
        howItWorks: { title: "", steps: [] },
        actions: { primaryButton: "", secondaryLink: "" }
      };
    }
  });

  const { register, handleSubmit, control, formState: { errors } } = form;

  const onSubmit = async (data: MegaMenuFormValues) => {
    setIsSaving(true);
    setStatusMsg(null);
    try {
      const transformToSave = (cats: any[]) => cats.map(c => ({
        title: c.title,
        items: c.items.map((i: any) => i.value).filter(Boolean)
      }));

      const finalPayload = {
        residential: {
          title: data.residential.title,
          description: data.residential.description,
          categories: transformToSave(data.residential.categories)
        },
        commercial: {
          title: data.commercial.title,
          description: data.commercial.description,
          categories: transformToSave(data.commercial.categories)
        },
        howItWorks: data.howItWorks,
        actions: data.actions
      };

      const { error } = await supabase
        .from('site_content')
        .update({ value: JSON.stringify(finalPayload, null, 2) })
        .eq('key', 'navbar.mega_menu_json');

      if (error) throw error;
      
      setStatusMsg({ type: 'success', text: 'Mega Menu updated dynamically via CMS!' });
    } catch (e: any) {
      console.error(e);
      setStatusMsg({ type: 'error', text: e.message || 'Failed to save' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setStatusMsg(null), 5000);
    }
  };

  const tabs = [
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'process', label: 'Process & Links' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50/50">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4.5 text-[13px] font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === tab.id 
                ? "bg-white text-indigo-600 border-indigo-600 shadow-[0_4px_10px_rgba(0,0,0,0.02)] z-10" 
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        
        {/* Residential Tab */}
        <div className={activeTab === 'residential' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-slate-100 pb-8">
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Division Title</label>
              <input 
                {...register("residential.title")} 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" 
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Division Description</label>
              <textarea 
                {...register("residential.description")} 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all h-[48px] resize-none overflow-hidden shadow-sm text-sm" 
              />
            </div>
          </div>
          <CategoryEditor control={control} register={register} type="residential" />
        </div>

        {/* Commercial Tab */}
        <div className={activeTab === 'commercial' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-slate-100 pb-8">
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Division Title</label>
              <input 
                {...register("commercial.title")} 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" 
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Division Description</label>
              <textarea 
                {...register("commercial.description")} 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all h-[48px] resize-none overflow-hidden shadow-sm text-sm" 
              />
            </div>
          </div>
          <CategoryEditor control={control} register={register} type="commercial" />
        </div>

        {/* Process & Links Tab */}
        <div className={activeTab === 'process' ? 'block' : 'hidden'}>
          <div className="mb-8 border-b border-slate-100 pb-8">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Section Title</label>
            <input 
              {...register("howItWorks.title")} 
              className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h3 className="text-slate-800 font-bold tracking-tight mb-5 flex items-center gap-2">
                 Process Steps Configuration
              </h3>
              <HowItWorksEditor control={control} register={register} />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-slate-800 font-bold tracking-tight mb-5 flex items-center gap-2">
                 Call To Actions
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-5 shadow-sm">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Primary Button (Black)</label>
                  <input 
                    {...register("actions.primaryButton")} 
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none shadow-sm" 
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">Secondary Button (Outline)</label>
                  <input 
                    {...register("actions.secondaryLink")} 
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none shadow-sm" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Submit Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
          <div>
            {Object.keys(errors).length > 0 && (
              <span className="text-red-500 text-sm font-medium flex items-center gap-1.5"><Trash2 size={14}/> Please fix missing fields.</span>
            )}
            {statusMsg && (
              <span className={`text-sm font-bold tracking-wide px-4 py-2 rounded-lg ${statusMsg.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                {statusMsg.text}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold tracking-wide rounded-xl transition-all shadow-md shadow-indigo-600/20 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:-translate-y-0"
          >
            {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {isSaving ? "Syncing..." : "Publish Mega Menu"}
          </button>
        </div>
      </form>
    </div>
  );
}
