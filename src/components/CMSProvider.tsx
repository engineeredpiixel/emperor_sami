"use client";

import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { getSortedProjects, hydrateProjectsWithCMS } from "@/lib/projectsData";

interface ContentItem {
  id: string;
  section: string;
  key: string;
  value: string;
  type: string;
  label: string;
}

interface CMSContextType {
  content: ContentItem[];
  t: (key: string, defaultValue?: string) => string;
  getImage: (key: string) => string;
  getRaw: (key: string) => string;
}

const CMSContext = createContext<CMSContextType | null>(null);

export function CMSProvider({
  content,
  children,
}: {
  content: ContentItem[];
  children: ReactNode;
}) {
  // Returns text string; handles multiline properly out-of-the-box in React when used in suitable elements
  const t = (key: string, defaultValue?: string) => {
    const item = content.find((c) => c.key === key);
    if (!item) return defaultValue !== undefined ? defaultValue : `[Missing: ${key}]`;
    return item.value;
  };

  // Helper dedicated to getting image URLs
  const getImage = (key: string) => {
    const item = content.find((c) => c.key === key);
    return item?.value || "";
  };

  // Helper alias
  const getRaw = (key: string) => t(key);

  return (
    <CMSContext.Provider value={{ content, t, getImage, getRaw }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error("useCMS must be used within a CMSProvider");
  }
  return context;
}

export function useHydratedProjects() {
  const { content } = useCMS();
  return useMemo(() => {
    const rawStatics = getSortedProjects();
    // Optimize: if content is completely empty (say during fallback or pre-fetch), just return raw statics
    if (!content || content.length === 0) return rawStatics;
    
    // Create a dictionary for overrides specific to projects to speed up hydrateProjectsWithCMS
    const projectOverrides = content.filter(c => c.key.startsWith("project."));
    if (projectOverrides.length === 0) return rawStatics;

    return hydrateProjectsWithCMS(rawStatics, content);
  }, [content]);
}
