import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, User, Chrome, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { login, isLoading: authLoading } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form State
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

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

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    await login(email, name || 'Member', 'email');
    setIsSuccess(true);
    setTimeout(onClose, 1500);
  };

  const handleSocialLogin = async (provider: 'google' | 'kakao') => {
    const mockEmail = provider === 'google' ? 'googleuser@gmail.com' : 'kakaouser@kakao.com';
    const mockName = provider === 'google' ? 'Google User' : 'Kakao Member';
    await login(mockEmail, mockName, provider);
    setIsSuccess(true);
    setTimeout(onClose, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center px-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>

      <div 
        className={`relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isSuccess ? (
          <div className="p-12 text-center space-y-4 flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <CheckCircle2 size={64} className="text-green-500 mb-2" />
            <h2 className="text-2xl font-black uppercase tracking-tighter">Welcome Back!</h2>
            <p className="text-zinc-400 text-sm">Successfully authenticated. Get ready to dance.</p>
          </div>
        ) : (
          <>
            <div className="p-6 flex justify-between items-center border-b border-zinc-800">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                {mode === 'login' ? authT.login : authT.signup}
              </h2>
              <button onClick={onClose} className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-6 overflow-y-auto max-h-[80vh]">
              <div className="space-y-3">
                <button 
                  disabled={authLoading}
                  onClick={() => handleSocialLogin('google')}
                  className="w-full flex items-center justify-center space-x-3 bg-white text-black py-3.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authLoading ? <Loader2 className="animate-spin" size={18} /> : <Chrome size={18} />}
                  <span>{authT.google}</span>
                </button>

                <button 
                  disabled={authLoading}
                  onClick={() => handleSocialLogin('kakao')}
                  className="w-full flex items-center justify-center space-x-3 bg-[#FEE500] text-[#3C1E1E] py-3.5 rounded-xl font-bold text-sm hover:bg-[#FADA0A] transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {authLoading ? <Loader2 className="animate-spin" size={18} /> : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-5.523 0-10 3.582-10 8c0 2.957 1.93 5.539 4.874 7.031l-1.235 4.521c-.08.293.123.58.406.58.113 0 .224-.038.318-.11l5.242-3.486c.13.011.263.017.395.017 5.523 0 10-3.582 10-8s-4.477-8-10-8z"/>
                    </svg>
                  )}
                  <span>{authT.kakao}</span>
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-1 h-[1px] bg-zinc-800"></div>
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em]">{authT.or}</span>
                <div className="flex-1 h-[1px] bg-zinc-800"></div>
              </div>

              <form className="space-y-4" onSubmit={handleEmailAuth}>
                {mode === 'signup' && (
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-zinc-500 uppercase ml-1 tracking-widest">{authT.name}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-1 tracking-widest">{authT.email}</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-zinc-500 uppercase ml-1 tracking-widest">{authT.password}</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input 
                      required
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-black border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <button 
                  disabled={authLoading}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl mt-4 transition-all uppercase tracking-widest text-sm active:scale-[0.98] cursor-pointer shadow-lg shadow-red-600/20 flex items-center justify-center space-x-2"
                >
                  {authLoading && <Loader2 className="animate-spin" size={18} />}
                  <span>{mode === 'login' ? authT.login : authT.signup}</span>
                </button>
              </form>

              <button 
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="w-full text-center text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer py-2"
              >
                {mode === 'login' ? authT.switchSignup : authT.switchLogin}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;