"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase.auth.updateUser({
      password: password
    });

    if (error) {
      setStatus("error");
      setMessage(error.message);
    } else {
      setStatus("success");
      setMessage("Your password was successfully updated!");
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a] to-[#111111]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D8A02A]/10 via-transparent to-transparent" />
      </div>

      <div className="w-full max-w-md bg-[#111] p-8 md:p-10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 hover:border-[#D8A02A]/50 transition-colors duration-500">
        
        {/* Logo / Header */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/" className="mb-4">
            <svg viewBox="0 0 40 20" className="h-10 w-auto text-white" fill="currentColor">
              <path d="M15,20 L20,10 L25,20 Z" />
              <path d="M18,10 L20,6 L22,10 Z" fill="#D8A02A" />
            </svg>
          </Link>
          <h1 className="text-2xl font-black text-white tracking-widest uppercase mb-2">Update Credentials</h1>
          <p className="text-[#888] text-sm text-center">Please enter your new secure password.</p>
        </div>

        {/* Update Password Form */}
        <form onSubmit={handleUpdate} className="flex flex-col gap-5">
          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-4 rounded text-center">
              {message}
            </div>
          )}
          {status === "success" && (
            <div className="bg-green-500/10 border border-green-500/50 text-green-400 text-sm p-4 rounded text-center">
              {message}<br /><span className="text-xs text-green-500/70 mt-2 block">Redirecting to Admin...</span>
            </div>
          )}

          {status !== "success" && (
            <>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">New Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 text-white px-5 py-3.5 focus:outline-none focus:border-[#D8A02A] focus:ring-1 focus:ring-[#D8A02A] transition-colors rounded placeholder-gray-600"
                  placeholder="••••••••"
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#D8A02A] hover:bg-[#C28C22] text-white font-bold tracking-widest uppercase py-4 mt-4 rounded transition-all flex justify-center items-center gap-2 group"
              >
                {status === "loading" ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    Save Password
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </>
          )}
        </form>

        <div className="mt-8 text-center border-t border-white/10 pt-6">
          <Link href="/login" className="text-[#888] text-xs hover:text-white transition-colors">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
