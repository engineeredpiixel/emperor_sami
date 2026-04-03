"use client";

import React, { createContext, useContext, ReactNode } from "react";

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
  t: (key: string) => string;
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
  const t = (key: string) => {
    const item = content.find((c) => c.key === key);
    if (!item) return `[Missing: ${key}]`;
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
