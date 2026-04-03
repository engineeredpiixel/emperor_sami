import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import { CMSProvider } from "@/components/CMSProvider";
import { unstable_cache } from "next/cache";
import { createClient } from "@supabase/supabase-js";

// Create a static client for global read-only CMS fetches
const getStaticSupabase = () => createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

// Cache the CMS queries to edge memory with a 60-second revalidation loop
const getGlobalContent = unstable_cache(
  async () => {
    const { data } = await getStaticSupabase().from("site_content").select("*");
    return data || [];
  },
  ['global-site-content'],
  { tags: ['cms'], revalidate: 60 }
);

const getSeoContent = unstable_cache(
  async () => {
    const { data } = await getStaticSupabase().from("site_content").select("*").eq('section', 'seo_settings');
    return data || [];
  },
  ['seo-settings'],
  { tags: ['cms-seo'], revalidate: 60 }
);



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteContent = await getSeoContent();
  const getValue = (key: string) => siteContent.find((c: any) => c.key === key)?.value;

  const title = getValue("seo.title") || "Emperor Sami Group | Custom Home Building & Renovations";
  const description = getValue("seo.description") || "Emperor Sami Group provides expert residential construction services including custom home building, home renovations, and basement finishing in the Toronto area.";
  
  const rawFavicon = getValue("seo.favicon");
  // Check if string contains standard URL otherwise use bucket format
  const getImageUrl = (raw: string) => raw.startsWith('http') || raw.startsWith('/') ? raw : `https://tlmsotvucwrudumpktgr.supabase.co/storage/v1/object/public/images/${raw}`;

  const favicon = rawFavicon ? getImageUrl(rawFavicon) : "/favicon.ico";
  const rawOgImage = getValue("seo.og_image");
  const ogImage = rawOgImage ? getImageUrl(rawOgImage) : "";

  return {
    title,
    description,
    icons: {
      icon: favicon,
    },
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read cryptographic nonce from Edge Middleware (defaults to empty in static environments)
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || undefined;

  // Fetch global CMS content (instantly from cache)
  const siteContent = await getGlobalContent();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-clip w-full`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip w-full max-w-[100vw]" suppressHydrationWarning>
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
                try {
                  window.trustedTypes.createPolicy('default', {
                    createHTML: function(s) { return s; },
                    createScript: function(s) { return s; },
                    createScriptURL: function(s) { return s; }
                  });
                } catch (e) {}
              }
            `,
          }}
        />
        <CMSProvider content={siteContent}>
          <Navbar />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
          <Footer />
        </CMSProvider>
      </body>
    </html>
  );
}
