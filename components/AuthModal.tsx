import React, { useState } from 'react';
import { X, Mail, Lock, User, Chrome } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const authT = t.auth || {
    login: "Login",
    signup: "Sign Up",
    email: "Email Address",
    password: "Password",
    name: "Full Name",
    or: "Or continue with",
    google: "Sign in with Google",
    kakao: "Sign in with Kakao",
    switchLogin: "Already have an account? Login",
    switchSignup: "New to THEART? Create Account"
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-zinc-800">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            {mode === 'login' ? authT.login : authT.signup}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          {/* Social Logins */}
          <div className="space-y-3">
            {/* Google Button */}
            <button className="w-full flex items-center justify-center space-x-3 bg-white text-black py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all active:scale-[0.98]">
              <Chrome size={20} />
              <span>{authT.google}</span>
            </button>

            {/* Kakao Button */}
            <button className="w-full flex items-center justify-center space-x-3 bg-[#FEE500] text-[#3C1E1E] py-3 rounded-xl font-bold text-sm hover:bg-[#FADA0A] transition-all active:scale-[0.98]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c-5.523 0-10 3.582-10 8c0 2.957 1.93 5.539 4.874 7.031l-1.235 4.521c-.08.293.123.58.406.58.113 0 .224-.038.318-.11l5.242-3.486c.13.011.263.017.395.017 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/>
              </svg>
              <span>{authT.kakao}</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex-1 h-[1px] bg-zinc-800"></div>
            <span className="text-xs text-zinc-500 uppercase font-bold tracking-widest">{authT.or}</span>
            <div className="flex-1 h-[1px] bg-zinc-800"></div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">{authT.name}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-500 uppercase ml-1">{authT.email}</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-500 uppercase ml-1">{authT.password}</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl mt-4 transition-all uppercase tracking-widest text-sm active:scale-[0.98]">
              {mode === 'login' ? authT.login : authT.signup}
            </button>
          </form>

          {/* Footer Toggle */}
          <button 
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="w-full text-center text-xs font-bold text-zinc-400 hover:text-white transition-colors"
          >
            {mode === 'login' ? authT.switchSignup : authT.switchLogin}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;