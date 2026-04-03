import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Emperor Sami",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080808]">
      {children}
    </div>
  );
}
