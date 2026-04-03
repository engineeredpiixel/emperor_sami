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

// Components to abstract Field Arrays for cleaner code
const CategoryItemEditor = ({ control, register, categoryIndex, type }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${type}.categories.${categoryIndex}.items`,
  });

  return (
    <div className="pl-4 border-l-2 border-white/10 mt-3 space-y-2">
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 items-center">
          <input
            {...register(`${type}.categories.${categoryIndex}.items.${index}.value`)}
            className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-[#F9A825]"
            placeholder="Link item name"
          />
          <button type="button" onClick={() => remove(index)} className="p-1.5 text-red-400 hover:bg-white/5 rounded transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ value: "" })}
        className="text-xs text-[#F9A825] hover:text-white flex items-center gap-1 mt-2 transition-colors font-medium"
      >
        <Plus size={14} /> Add Link Item
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
        <div key={field.id} className="bg-white/5 border border-white/10 rounded-lg p-4 relative group">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 mr-4">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Category Title</label>
              <input
                {...register(`${type}.categories.${index}.title`)}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#F9A825]"
                placeholder="e.g. Custom Home Building"
              />
            </div>
            <button type="button" onClick={() => remove(index)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-white/5 rounded transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-1.5">Category Links ({type})</label>
          <CategoryItemEditor control={control} register={register} categoryIndex={index} type={type} />
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ title: "", items: [{ value: "" }] })}
        className="w-full py-3 border border-dashed border-[#F9A825]/50 hover:bg-[#F9A825]/10 rounded-lg text-[#F9A825] transition-colors flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm"
      >
        <Plus size={18} /> Add New Category
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
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-4">
          <div className="flex-1 space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Step {index + 1} Title</label>
              <input
                {...register(`howItWorks.steps.${index}.title`)}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#F9A825]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Description</label>
              <textarea
                {...register(`howItWorks.steps.${index}.description`)}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-[#F9A825] min-h-[80px]"
              />
            </div>
          </div>
          <button type="button" onClick={() => remove(index)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-white/5 rounded transition-colors mt-6">
            <Trash2 size={18} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ title: "", description: "" })}
        className="w-full py-3 border border-dashed border-[#F9A825]/50 hover:bg-[#F9A825]/10 rounded-lg text-[#F9A825] transition-colors flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm"
      >
        <Plus size={18} /> Add Step
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
          // Transform items back into array of objects for react-hook-form useFieldArray
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
      // Transform form data back to expected JSON schema (arrays of strings)
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
    <div className="bg-[#111] rounded-xl border border-white/5 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-white/10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
              activeTab === tab.id 
                ? "bg-white/5 text-[#F9A825] border-b-2 border-[#F9A825]" 
                : "text-gray-500 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        
        {/* Residential Tab */}
        <div className={activeTab === 'residential' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-white/5 pb-8">
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Division Title</label>
              <input 
                {...register("residential.title")} 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#F9A825] transition-all outline-none" 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Division Description</label>
              <textarea 
                {...register("residential.description")} 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#F9A825] transition-all outline-none h-[48px]" 
              />
            </div>
          </div>
          <CategoryEditor control={control} register={register} type="residential" />
        </div>

        {/* Commercial Tab */}
        <div className={activeTab === 'commercial' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-white/5 pb-8">
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Division Title</label>
              <input 
                {...register("commercial.title")} 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#F9A825] transition-all outline-none" 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Division Description</label>
              <textarea 
                {...register("commercial.description")} 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#F9A825] transition-all outline-none h-[48px]" 
              />
            </div>
          </div>
          <CategoryEditor control={control} register={register} type="commercial" />
        </div>

        {/* Process & Links Tab */}
        <div className={activeTab === 'process' ? 'block' : 'hidden'}>
          <div className="mb-8 border-b border-white/5 pb-8">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Section Title</label>
            <input 
              {...register("howItWorks.title")} 
              className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-1 focus:ring-[#F9A825] transition-all outline-none" 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-[#F9A825] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 Steps
              </h3>
              <HowItWorksEditor control={control} register={register} />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-[#F9A825] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 Call To Actions
              </h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Primary Button</label>
                  <input 
                    {...register("actions.primaryButton")} 
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-[#F9A825] outline-none" 
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5 block">Secondary Link</label>
                  <input 
                    {...register("actions.secondaryLink")} 
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-[#F9A825] outline-none" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Submit Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <div>
            {Object.keys(errors).length > 0 && (
              <span className="text-red-400 text-sm">Please fix all missing fields before saving.</span>
            )}
            {statusMsg && (
              <span className={`text-sm font-semibold px-4 py-2 rounded-lg ${statusMsg.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {statusMsg.text}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 px-8 py-3 bg-[#F9A825] hover:bg-[#e6960c] text-black font-black uppercase tracking-widest rounded-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(249,168,37,0.3)]"
          >
            {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {isSaving ? "Syncing to JSON..." : "Update Mega Menu"}
          </button>
        </div>
      </form>
    </div>
  );
}
