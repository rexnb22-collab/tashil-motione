import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Home, Instagram, Youtube, Menu, X, ShoppingBag, Settings } from 'lucide-react';
import { PageId } from '../data/siteData';
import { TashilLogo } from './VisualAssets';
import { useAdminAuth } from '../context/AdminAuthContext';

export interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { isAdminLoggedIn, login } = useAdminAuth();
  const [showSecretInput, setShowSecretInput] = useState(false);
  const [secretPassword, setSecretPassword] = useState('');
  const [secretError, setSecretError] = useState(false);
  const secretInputRef = useRef<HTMLInputElement>(null);
  const secretContainerRef = useRef<HTMLDivElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Close secret popup when clicking or touching outside
  useEffect(() => {
    if (!showSecretInput) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        secretContainerRef.current &&
        !secretContainerRef.current.contains(e.target as Node)
      ) {
        setShowSecretInput(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showSecretInput]);

  // Close mobile drawer when clicking or touching outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        mobileDrawerRef.current &&
        !mobileDrawerRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('button[aria-label="القائمة"]')
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const heroEl = document.getElementById('hero-section');

      // 1. Visible at the start (top of page: y <= 60)
      if (y <= 60) {
        setIsVisible(true);
        return;
      }

      // 2. While inside #hero-section, stay hidden until the very end of the Hero card
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        if (rect.bottom <= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setMobileMenuOpen(false);
        }
      } else {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  // Order (RTL): الصفحة الرئيسية → المتجر → المدونة → الدعم الفني → من نحن
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'الصفحة الرئيسية' },
    { id: 'store', label: 'المتجر' },
    { id: 'blog', label: 'المدونة' },
    { id: 'support', label: 'الدعم الفني' },
    { id: 'about', label: 'من نحن' },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Click on logo toggles the mini secret slide if not logged in
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAdminLoggedIn) {
      handleNav('home');
    } else {
      setShowSecretInput((prev) => !prev);
      setMobileMenuOpen(false);
      setSecretPassword('');
      setSecretError(false);
      setTimeout(() => secretInputRef.current?.focus(), 80);
    }
  };

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(secretPassword);
    if (ok) {
      setShowSecretInput(false);
      setSecretPassword('');
      setSecretError(false);
      handleNav('admin');
    } else {
      setSecretError(true);
      setSecretPassword('');
      setTimeout(() => setSecretError(false), 2000);
    }
  };

  return (
    <nav
      id="gCleanNavWrapper"
      className={`site-navbar navbar ${isVisible ? 'navbar-visible' : ''}`}
      aria-label="التنقل الرئيسي"
      aria-hidden={!isVisible}
    >
      <div className="navbar-inner">
        {/* Column 1 (Left): Button li l-left (.navbar-store) */}
        <div className="flex items-center gap-2 justify-self-start">
          <button
            type="button"
            onClick={() => handleNav('store')}
            className="navbar-store"
            dir="rtl"
          >
            <span>تصفح المتجر</span>
            <ArrowUpRight size={14} className="shrink-0" />
          </button>

          {cartCount > 0 && (
            <button
              type="button"
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-[#f1f5f9] text-[#0f172a] cursor-pointer"
              title="سلة المشتريات"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0B96B8] text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            </button>
          )}

          {isAdminLoggedIn && (
            <button
              type="button"
              onClick={() => handleNav('admin')}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                activePage === 'admin'
                  ? 'bg-[#0B96B8] text-white shadow-sm'
                  : 'bg-[#f1f5f9] text-[#475569] hover:text-[#0f172a] hover:bg-[#e2e8f0]'
              }`}
              title="لوحة تحكم المنتجات (Admin)"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setShowSecretInput(false);
            }}
            className="lg:hidden p-2 rounded-full text-[#0f172a] hover:bg-[#f1f5f9] cursor-pointer"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Column 2 (Center): Navigation links (.navbar-links) */}
        <div className="hidden lg:flex navbar-links">
          {navItems.map((item) => {
            const isActive =
              activePage === item.id || (item.id === 'store' && activePage === 'product');
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                className={isActive ? 'active' : ''}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Column 3 (Right): Logo li l-right (.navbar-logo, 145x44) */}
        {/* Column 3 (Right): Logo + Mini Secret Slide (.navbar-logo, 145x44) */}
        <div className="relative flex items-center justify-end">
          {/* Secret mini slide under the logo (Pure Glass transparent) */}
          <AnimatePresence>
            {showSecretInput && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px]"
                  onClick={() => setShowSecretInput(false)}
                />
                <motion.div
                  ref={secretContainerRef}
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="navbar-secret-slide absolute top-[calc(100%+8px)] right-1 z-50 flex items-center gap-1.5 py-1.5 px-3 rounded-full"
                  style={{
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
                  }}
                  dir="ltr"
                  onClick={(e) => e.stopPropagation()}
                >
                <span className="text-[12px] select-none opacity-90">🔐</span>
                <form onSubmit={handleSecretSubmit} className="flex items-center gap-1.5">
                  <input
                    ref={secretInputRef}
                    type="password"
                    value={secretPassword}
                    onChange={(e) => {
                      setSecretPassword(e.target.value);
                      if (secretError) setSecretError(false);
                    }}
                    placeholder="••••••"
                    autoComplete="off"
                    autoFocus
                    style={{
                      background: 'rgba(255, 255, 255, 0.65)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: secretError
                        ? '1px solid rgba(239, 68, 68, 0.8)'
                        : '1px solid rgba(203, 213, 225, 0.8)',
                      boxShadow: secretError
                        ? '0 0 10px rgba(239, 68, 68, 0.3)'
                        : 'inset 0 1px 2px rgba(15, 23, 42, 0.04)',
                    }}
                    className="w-20 text-[#0f172a] placeholder-slate-400 text-xs px-2.5 py-0.5 rounded-full outline-none text-center font-medium transition-all focus:border-[#0B96B8]"
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(135deg, #0B96B8 0%, #086f88 100%)',
                      boxShadow: '0 2px 8px rgba(11, 150, 184, 0.35)',
                    }}
                    className="w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] font-bold transition-transform active:scale-90 cursor-pointer"
                    title="دخول"
                  >
                    ✓
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSecretInput(false)}
                    className="w-4 h-4 rounded-full text-slate-400 hover:text-slate-800 flex items-center justify-center text-[10px] transition-colors cursor-pointer"
                    title="إلغاء"
                  >
                    ✕
                  </button>
                </form>
              </motion.div>
              </>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={handleLogoClick}
            className="navbar-logo cursor-pointer bg-transparent border-0 p-0 text-inherit"
            aria-label="تسهيل موشن - Tashil Motion"
          >
            <svg
              viewBox="0 0 145 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              height="44"
            >
              {/* Arabic side: تسهيل موشن */}
              <text
                x="44"
                y="19"
                textAnchor="end"
                fill="#0f172a"
                fontSize="13.5"
                fontWeight="800"
                fontFamily="Noto Sans Arabic, Arial, sans-serif"
              >
                تسهيل
              </text>
              <text
                x="44"
                y="34"
                textAnchor="end"
                fill="#0f172a"
                fontSize="13.5"
                fontWeight="800"
                fontFamily="Noto Sans Arabic, Arial, sans-serif"
              >
                موشن
              </text>

              {/* Center Emblem Mark */}
              <g transform="translate(50, 4) scale(0.68)">
                <path d="M4 33L21 18L21 31L11 40L4 33Z" fill="#0f172a" />
                <path d="M11 42L21 33L28 40L18 49L11 42Z" fill="#0f172a" />
                <path
                  d="M25 14L43 4L59 20L50 29L41 20L41 48L29 48L29 24L25 27L25 14Z"
                  fill="#0f172a"
                />
              </g>

              {/* English side: tashil motion */}
              <text
                x="96"
                y="19"
                textAnchor="start"
                fill="#0f172a"
                fontSize="14"
                fontWeight="800"
                fontFamily="Noto Sans Arabic, Arial, sans-serif"
              >
                tashil
              </text>
              <text
                x="96"
                y="34"
                textAnchor="start"
                fill="#0f172a"
                fontSize="14"
                fontWeight="800"
                fontFamily="Noto Sans Arabic, Arial, sans-serif"
              >
                motion
              </text>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (< 1024px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 z-40 bg-black/15 backdrop-blur-[1px]"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              ref={mobileDrawerRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="navbar-mobile-drawer lg:hidden absolute top-[calc(100%+8px)] inset-x-0 bg-white border border-[#e5e7eb] rounded-[24px] p-3 flex flex-col z-50"
              style={{
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.12)',
              }}
              dir="rtl"
            >
            {navItems.map((item) => {
              const isActive =
                activePage === item.id || (item.id === 'store' && activePage === 'product');
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.id);
                  }}
                  className={`w-full text-right py-3.5 px-5 rounded-2xl text-[16px] font-semibold cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-[#f1f5f9] text-[#0f172a] font-bold'
                      : 'text-[#334155] hover:bg-[#f8fafc]'
                  }`}
                  style={{ minHeight: '52px', display: 'flex', alignItems: 'center' }}
                >
                  {item.label}
                </a>
              );
            })}
            {isAdminLoggedIn && (
              <a
                href="#admin"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('admin');
                }}
                className={`mt-1 w-full inline-flex items-center justify-end gap-2 py-3 px-5 rounded-2xl text-[15px] font-semibold cursor-pointer transition-colors ${
                  activePage === 'admin'
                    ? 'bg-[#0B96B8] text-white'
                    : 'bg-slate-100 text-[#475569] hover:bg-slate-200 hover:text-[#0f172a]'
                }`}
                style={{ minHeight: '48px' }}
              >
                <Settings className="w-4 h-4" />
                <span>الإدارة</span>
              </a>
            )}
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

/**
 * Centered Pill Breadcrumb used on Store, Support, and About pages
 */
export const BreadcrumbPill: React.FC<{
  currentLabel: string;
  onGoHome: () => void;
}> = ({ currentLabel, onGoHome }) => {
  return (
    <nav className="tm-breadcrumbs-wrapper" aria-label="Breadcrumb" dir="rtl">
      <div className="tm-breadcrumbs-container">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onGoHome();
          }}
          className="tm-bc-item"
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>الرئيسية</span>
        </a>
        <span className="tm-bc-sep">/</span>
        <span className="tm-bc-item active">{currentLabel}</span>
      </div>
    </nav>
  );
};

/**
 * Global Footer matching the rounded card design system
 */
export const Footer: React.FC<{
  onNavigate: (page: PageId) => void;
  onOpenPolicyModal: (title: string) => void;
}> = ({ onNavigate, onOpenPolicyModal }) => {
  const { isAdminLoggedIn } = useAdminAuth();
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-10 pb-8 bg-white mt-12" dir="rtl">
      <div className="site-container">
        <div className="site-card-muted p-8 sm:p-10 flex flex-col items-center text-center">
          {/* Centered Brand Logo */}
          <TashilLogo size="lg" onClick={() => handleNav('home')} />

          {/* Tagline */}
          <p className="text-[13px] text-[#475569] mt-3.5 font-normal leading-[1.75]">
            المنصة العربية الأولى لابتكار أدوات الموشن جرافيك والحلول البرمجية.
          </p>

          {/* Footer Links Row (Right to Left in RTL) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 text-[13px] font-bold text-[#334155]">
            <button
              type="button"
              onClick={() => handleNav('refund-policy')}
              className="px-4 py-2 rounded-full bg-white border border-[#e5e7eb] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              سياسة الشراء والاسترجاع
            </button>
            <button
              type="button"
              onClick={() => handleNav('terms')}
              className="px-4 py-2 rounded-full bg-white border border-[#e5e7eb] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              شروط الاستخدام
            </button>
            <button
              type="button"
              onClick={() => handleNav('privacy')}
              className="px-4 py-2 rounded-full bg-white border border-[#e5e7eb] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </button>
            <button
              type="button"
              onClick={() => handleNav('support')}
              className="px-4 py-2 rounded-full bg-white border border-[#e5e7eb] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              الدعم الفني
            </button>
            <button
              type="button"
              onClick={() => handleNav('about')}
              className="px-4 py-2 rounded-full bg-white border border-[#e5e7eb] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors cursor-pointer"
            >
              من نحن
            </button>
            {isAdminLoggedIn && (
              <button
                type="button"
                onClick={() => handleNav('admin')}
                className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-[#0B96B8] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>لوحة الإدارة</span>
                <span className="text-amber-400">⚙️</span>
              </button>
            )}
          </div>

          {/* Bottom Copyright & Social Icons Bar */}
          <div
            className="w-full border-t border-[#e5e7eb] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]"
            dir="ltr"
          >
            <p className="font-medium">© 2026 TashilMotion.com. All rights reserved.</p>

            <div className="flex items-center gap-2.5">
              <motion.a
                whileHover={{ y: -2 }}
                href="#instagram"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('support');
                }}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#e5e7eb] text-[#0f172a] hover:bg-[#0b1220] hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#youtube"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('support');
                }}
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-[#e5e7eb] text-[#0f172a] hover:bg-[#0b1220] hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#x"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('support');
                }}
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white border border-[#e5e7eb] text-[#0f172a] hover:bg-[#0b1220] hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
              >
                𝕏
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
