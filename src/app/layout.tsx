import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { CMSProvider } from "@/components/CMSProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emperor Sami Group | Custom Home Building & Renovations",
  description:
    "Emperor Sami Group provides expert residential construction services including custom home building, home renovations, and basement finishing in the Toronto area.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read cryptographic nonce from Edge Middleware (defaults to empty in static environments)
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || undefined;

  // Fetch global CMS content
  const supabase = await createClient();
  const { data: contentData } = await supabase.from("site_content").select("*");
  const siteContent = contentData || [];

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
