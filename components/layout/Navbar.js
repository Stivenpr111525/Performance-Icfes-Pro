"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useSimuladorStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const { currentLevel, username } = useSimuladorStore();

  // No mostrar la barra en el Login ni en el Simulador activo
  const hiddenRoutes = ['/login', '/simulador'];
  const isHidden = hiddenRoutes.includes(pathname);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen to changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isHidden) return null;

  // Lógica de Personalidad Gamificada
  const getPersonality = (level) => {
    if (level <= 2) return { name: "El Curioso", emoji: "🌱", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" };
    if (level <= 5) return { name: "El Analista", emoji: "🧠", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" };
    if (level <= 9) return { name: "El Estratega", emoji: "💡", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" };
    return { name: "El Maestro Icfes", emoji: "👑", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" };
  };

  const personality = getPersonality(currentLevel);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
    router.push('/');
  };

  return (
    <nav className="w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Performance Icfes Pro
            </span>
          </Link>

          {/* Right section: Avatar or Login button */}
          <div className="flex items-center gap-4">
            {session ? (
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all hover:ring-2 ring-zinc-200 dark:ring-zinc-800 ${personality.color}`}
                >
                  <span className="text-xl">{personality.emoji}</span>
                  <span className="font-bold text-sm hidden sm:block">
                    {username || session.user.email.split('@')[0]}
                  </span>
                  <div className="px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20 flex items-center justify-center ml-1">
                    <span className="text-[10px] font-black uppercase tracking-tighter">Nivel {currentLevel}</span>
                  </div>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                    >
                      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-1">Cuenta</p>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                          {session.user.email}
                        </p>
                      </div>
                      <div className="p-2">
                        {pathname !== '/dashboard' && (
                          <Link 
                            href="/dashboard"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors mb-1"
                          >
                            <User className="w-4 h-4" />
                            Ir al Dashboard
                          </Link>
                        )}
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Cerrar Sesión
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link 
                href="/login"
                className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
