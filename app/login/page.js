"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, ArrowRight, Home, User } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [debugInfo, setDebugInfo] = useState("");

  const checkSupabase = () => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return "❌ Configuración faltante en .env.local";
    if (!key.startsWith("eyJ")) return "⚠️ La clave ANON parece ser incorrecta (debe empezar con eyJ)";
    return "✅ Configuración cargada";
  };

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log("Attempting login/signup for:", email);
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (isForgotPassword) {
        console.log("Sending password reset email...");
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/update-password`,
        });
        if (error) throw error;
        setSuccess("Te hemos enviado un enlace para recuperar tu contraseña. Revisa tu correo.");
        setIsForgotPassword(false);
        setIsLogin(true);
      } else if (isLogin) {
        console.log("Signing in with password...");
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          console.error("Login error:", error);
          throw error;
        }
        console.log("Login successful:", data.user.id);
        router.push("/dashboard");
      } else {
        console.log("Signing up...");
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        
        if (data?.user) {
          console.log("Signup successful, updating profile...");
          await supabase.from('profiles').update({ username }).eq('id', data.user.id);
        }

        setSuccess("Registro exitoso. Ya puedes iniciar sesión.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error("Caught error in handleSubmit:", err);
      setError(err.message || "Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center items-center p-4">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
        <Home className="w-5 h-5" />
        <span className="font-medium">Volver al inicio</span>
      </Link>

      <motion.div 
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {isForgotPassword ? "Recuperar Contraseña" : isLogin ? "Bienvenido de vuelta" : "Comienza tu viaje"}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            {isForgotPassword 
              ? "Ingresa tu correo y te enviaremos un enlace para restablecerla" 
              : isLogin 
                ? "Inicia sesión para continuar tu entrenamiento" 
                : "Crea una cuenta para guardar tu progreso y estadísticas"}
          </p>
          <div className="mt-4 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-[10px] font-mono inline-block">
            {checkSupabase()}
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl text-sm font-medium border border-red-200 dark:border-red-900/50">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl text-sm font-medium border border-green-200 dark:border-green-900/50">
            {success}
          </div>
        )}

        <div className="space-y-5">
          {!isLogin && !isForgotPassword && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
                Nombre de Usuario
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="text" 
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-zinc-100 dark:bg-zinc-950 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-zinc-900 dark:text-zinc-100"
                  placeholder="Tu nombre de usuario"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-100 dark:bg-zinc-950 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-zinc-900 dark:text-zinc-100"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {!isForgotPassword && (
            <div>
              <label className="block text-sm font-semibold mb-2 text-zinc-700 dark:text-zinc-300">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-100 dark:bg-zinc-950 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-zinc-900 dark:text-zinc-100"
                  placeholder="••••••••"
                  minLength={6}
                />
              </div>
              {isLogin && (
                <div className="mt-2 text-right">
                  <button 
                    type="button"
                    onClick={() => {
                      setIsForgotPassword(true);
                      setError(null);
                      setSuccess(null);
                    }}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}
            </div>
          )}

          <button 
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl py-4 flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
              <>
                {isForgotPassword 
                  ? "Enviar Enlace" 
                  : isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        <div className="mt-8 text-center">
          {isForgotPassword ? (
            <button 
              onClick={() => {
                setIsForgotPassword(false);
                setIsLogin(true);
                setError(null);
                setSuccess(null);
              }}
              className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Volver a Iniciar Sesión
            </button>
          ) : (
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setSuccess(null);
              }}
              className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {isLogin 
                ? "¿No tienes cuenta? Regístrate aquí" 
                : "¿Ya tienes cuenta? Inicia sesión"}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
