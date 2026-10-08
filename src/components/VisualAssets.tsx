import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import atheerPresenterImg from '../assets/images/atheer_glass_presenter_1791260502579.jpg';
import atheerArabicImg from '../assets/images/atheer_arabic_saudi_1791260514830.jpg';
import productTashilProjectImg from '../assets/images/product_tashil_project_1791353351359.jpg';
import productRamadanytImg from '../assets/images/product_ramadanyt_pack_1791353363139.jpg';
import productAtheerVerticalImg from '../assets/images/product_atheer_vertical_1791353374806.jpg';
import productAtheerPhotoshopImg from '../assets/images/product_atheer_photoshop_1791353383206.jpg';
import teamDevImg from '../assets/images/team_developer_avatar_1791260523526.jpg';
import teamDesignImg from '../assets/images/team_designer_avatar_1791260533153.jpg';
import founderPortraitImg from '../assets/images/about_founder_portrait_1791260542436.jpg';

export const ASSETS = {
  atheerPresenterImg,
  atheerArabicImg,
  productTashilProjectImg,
  productRamadanytImg,
  productAtheerVerticalImg,
  productAtheerPhotoshopImg,
  teamDevImg,
  teamDesignImg,
  founderPortraitImg,
};

/**
 * Exact Geometric Emblem of Tashil Motion
 */
export const TashilEmblem: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-7 h-7',
  color = 'currentColor',
}) => (
  <svg
    viewBox="0 0 64 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left upward chevron block */}
    <path d="M4 33L21 18L21 31L11 40L4 33Z" fill={color} />
    <path d="M11 42L21 33L28 40L18 49L11 42Z" fill={color} />
    {/* Right dominant upward arrow/mountain */}
    <path
      d="M25 14L43 4L59 20L50 29L41 20L41 48L29 48L29 24L25 27L25 14Z"
      fill={color}
    />
  </svg>
);

/**
 * Exact Horizontal Brand Lockup: [تسهيل موشن] [Emblem] [tashil motion]
 */
export const TashilLogo: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light' | 'sand';
  onClick?: () => void;
}> = ({ size = 'md', variant = 'dark', onClick }) => {
  const textColor =
    variant === 'light'
      ? 'text-white'
      : variant === 'sand'
      ? 'text-[#E5C39C]'
      : 'text-[#0A0D14]';

  const scaleClass =
    size === 'sm'
      ? 'scale-90'
      : size === 'lg'
      ? 'scale-110'
      : 'scale-100';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 focus:outline-none select-none cursor-pointer ${textColor} ${scaleClass}`}
      dir="ltr"
    >
      {/* Arabic side */}
      <div className="flex flex-col items-end leading-[0.95] font-display font-black tracking-tight text-right">
        <span className={size === 'lg' ? 'text-[17px]' : 'text-[13.5px]'}>تسهيل</span>
        <span className={size === 'lg' ? 'text-[17px]' : 'text-[13.5px]'}>موشن</span>
      </div>

      <motion.div
        whileHover={{ rotate: [0, -6, 6, 0] }}
        transition={{ duration: 0.45 }}
      >
        <TashilEmblem
          className={size === 'lg' ? 'w-9 h-8' : 'w-7 h-6'}
          color="currentColor"
        />
      </motion.div>

      {/* English side */}
      <div className="flex flex-col items-start leading-[0.92] font-en font-extrabold tracking-tight text-left">
        <span className={size === 'lg' ? 'text-[17px]' : 'text-[13.5px]'}>tashil</span>
        <span className={size === 'lg' ? 'text-[13.5px]' : 'text-[13.5px]'}>motion</span>
      </div>
    </motion.button>
  );
};

/**
 * The wide After Effects / Motion Graphics Timeline Hero Banner
 * Now enhanced with live keyframe motion, sweeping playhead, timecode counter, and animated layers
 */
export const TimelineBannerVisual: React.FC<{ rounded?: boolean }> = ({ rounded = false }) => {
  const [frame, setFrame] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 60);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  const formattedFrame = frame.toString().padStart(2, '0');

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${
        rounded
          ? 'rounded-[22px] h-[250px] sm:h-[310px] md:h-[350px] shadow-lg'
          : 'h-[250px] sm:h-[310px] md:h-[350px]'
      }`}
      style={{
        background:
          'linear-gradient(115deg, #27323F 0%, #3E5463 28%, #688B98 55%, #7DA2AE 75%, #2D4A54 100%)',
      }}
      dir="ltr"
    >
      {/* Animated Ambient Radial Glow */}
      <div
        className="absolute inset-0 animate-pulse-glow pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.26) 0%, rgba(16,32,44,0.5) 75%)',
        }}
      />

      {/* Left Graph Editor / Bezier Curve Panel */}
      <div className="absolute left-0 top-10 bottom-12 w-[30%] border-t border-b border-r border-white/15 bg-black/15 backdrop-blur-[1px] hidden sm:flex flex-col justify-between p-3 overflow-hidden">
        <div className="w-full h-full relative flex items-center">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 border border-white/10">
            <div className="border-r border-b border-white/10" />
            <div className="border-r border-b border-white/10" />
            <div className="border-r border-b border-white/10" />
            <div className="border-b border-white/10" />
          </div>

          {/* Sweeping Playhead Line */}
          <div className="absolute top-0 bottom-0 left-2 w-[1.5px] bg-sky-400/90 shadow-[0_0_8px_#38BDF8] z-10 animate-playhead">
            <div className="w-2.5 h-2.5 -ml-[4px] -mt-1 bg-sky-400 rotate-45" />
          </div>

          {/* Speed Graph SVG curve */}
          <svg viewBox="0 0 240 100" className="w-full h-24 overflow-visible">
            <line
              x1="0"
              y1="85"
              x2="240"
              y2="85"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
            <motion.path
              d="M 10 85 C 45 85, 50 18, 75 18 C 100 18, 105 85, 130 85 C 160 85, 165 25, 195 25 C 220 25, 225 85, 240 85"
              fill="rgba(45, 212, 191, 0.16)"
              stroke="#5EEAD4"
              strokeWidth="2.2"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            {/* Keyframe handles */}
            <line
              x1="75"
              y1="18"
              x2="75"
              y2="85"
              stroke="#38BDF8"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle cx="75" cy="18" r="4" fill="#FBBF24" className="animate-ping opacity-40" />
            <circle cx="75" cy="18" r="3.5" fill="#FBBF24" />
            <circle cx="195" cy="25" r="3.5" fill="#FBBF24" />
          </svg>
        </div>
        {/* Bottom mini timeline icons with live timecode */}
        <div className="flex items-center justify-between text-[10px] text-white/65 font-mono pt-1 border-t border-white/10 tabular-nums">
          <span>00:00:04:{formattedFrame}</span>
          <div className="flex items-center gap-2">
            <span className="text-amber-300 animate-pulse">◆</span>
            <span>60.0 fps</span>
          </div>
        </div>
      </div>

      {/* Top Left Anchor Target Box Icon (Floating Motion) */}
      <div className="absolute left-[28%] top-4 w-11 h-11 rounded-lg bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center text-white/85 animate-float-slow shadow-md">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 6v2M12 16v2M6 12h2M16 12h2" />
        </svg>
      </div>

      {/* Top Right "fx" badge (Floating Reverse Motion) */}
      <div className="absolute right-[27%] top-7 w-10 h-10 rounded-lg bg-black/25 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white/95 font-serif italic font-bold text-lg shadow-md animate-float-reverse">
        fx
      </div>

      {/* Right Floating Toolbar Pill */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute right-0 top-14 bg-black/30 backdrop-blur-md border border-white/15 rounded-l-xl px-3.5 py-2 hidden md:flex items-center gap-3.5 text-white/75 shadow-lg"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 hover:text-white transition-colors" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-sky-400 animate-pulse" fill="currentColor">
          <path d="M4 2l16 10-7 2 4 7-3 1-4-7-6 5z" />
        </svg>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      </motion.div>

      {/* Bottom Right Animated Timeline Layers */}
      <div className="absolute right-0 bottom-4 w-[24%] space-y-1.5 hidden sm:block">
        <motion.div
          animate={{ width: ['90%', '84%', '90%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="h-2.5 bg-[#0D9488]/75 rounded-l-full ml-auto border-l-4 border-teal-300"
        />
        <motion.div
          animate={{ width: ['75%', '82%', '75%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-2.5 bg-[#0284C7]/65 rounded-l-full ml-auto border-l-4 border-sky-300"
        />
        <div className="h-2.5 bg-slate-800/70 rounded-l-full w-[95%] ml-auto" />
        <motion.div
          animate={{ width: ['82%', '74%', '82%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-2.5 bg-[#0D9488]/65 rounded-l-full ml-auto"
        />
      </div>

      {/* Center Content: Logo & Tagline */}
      <div className="relative z-10 h-full max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {/* Left text block */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-right"
        >
          <p className="text-white/95 font-display font-bold text-lg sm:text-2xl md:text-[26px] tracking-wide drop-shadow">
            نُبرمج الأفكار... <span className="font-black text-white">لنُسهّل</span> الإبداع.
          </p>
          <p className="text-white/80 font-en font-semibold text-sm sm:text-lg tracking-wider mt-0.5">
            tashilmotion.com
          </p>
        </motion.div>

        {/* Right Logo Lockup with Animated Cursor Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex items-center gap-3 text-white/90"
        >
          <div className="flex flex-col items-end leading-[0.92] font-display font-black text-2xl sm:text-4xl">
            <span>تسهيل</span>
            <span>موشن</span>
          </div>
          <TashilEmblem className="w-14 h-12 sm:w-20 sm:h-16 text-white/90" />
          <div className="flex flex-col items-start leading-[0.9] font-en font-extrabold text-2xl sm:text-4xl">
            <span>tashil</span>
            <span>motion</span>
          </div>
          {/* Animated Cursor Arrow clicking/hovering below logo */}
          <motion.svg
            viewBox="0 0 24 24"
            animate={{
              x: [0, 6, 0],
              y: [0, -5, 0],
              scale: [1, 0.92, 1],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-7 absolute -bottom-5 left-12 text-amber-200 drop-shadow-md -rotate-12"
            fill="currentColor"
          >
            <path d="M5 2l14 10-6 1.5 3.5 6.5-2.5 1.2-3.5-6.5-4.5 4.3z" />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};

/**
 * Product Card Visual Thumbnail — Clean Product Image Only
 */
export const PRODUCT_FALLBACK_IMAGES: Record<
  | 'atheer-4k-en'
  | 'tashil-project'
  | 'ramadanyt'
  | 'atheer-wide-ar'
  | 'atheer-vertical-ar'
  | 'atheer-photoshop',
  string
> = {
  'atheer-4k-en': atheerPresenterImg,
  'tashil-project': productTashilProjectImg,
  ramadanyt: productRamadanytImg,
  'atheer-wide-ar': atheerArabicImg,
  'atheer-vertical-ar': productAtheerVerticalImg,
  'atheer-photoshop': productAtheerPhotoshopImg,
};

export const PRODUCT_IMAGES: Record<
  | 'atheer-4k-en'
  | 'tashil-project'
  | 'ramadanyt'
  | 'atheer-wide-ar'
  | 'atheer-vertical-ar'
  | 'atheer-photoshop',
  string
> = {
  'atheer-4k-en':
    '/wp-content/uploads/2026/08/377225f7-7774-453c-ba37-2768dd7b2920.jpg',
  'tashil-project':
    '/media/233620/40370ad6-490b-42e0-9607-d6f831b35293.jpg',
  ramadanyt:
    '/wp-content/uploads/2026/07/8611c556-ccb0-41e5-8a96-57c3ab0e1b20.jpg',
  'atheer-wide-ar':
    '/media/233620/6564f9f6-f340-4133-8fe7-c687f4c7ac51.png',
  'atheer-vertical-ar':
    '/media/233620/15093890-2299-47e9-8f93-30ef8ea59123.png',
  'atheer-photoshop':
    '/media/233620/33ea3b91-58aa-4810-adce-ab59beb3dc5d.jpg',
};

export const getProductImage = (product: {
  imageUrl?: string;
  visualType?: string;
}): string => {
  if (product.imageUrl) return product.imageUrl;
  if (product.visualType && (PRODUCT_IMAGES as Record<string, string>)[product.visualType]) {
    return (PRODUCT_IMAGES as Record<string, string>)[product.visualType];
  }
  return atheerPresenterImg;
};

export const getProductFallbackImage = (product: {
  visualType?: string;
}): string => {
  if (
    product.visualType &&
    (PRODUCT_FALLBACK_IMAGES as Record<string, string>)[product.visualType]
  ) {
    return (PRODUCT_FALLBACK_IMAGES as Record<string, string>)[product.visualType];
  }
  return atheerPresenterImg;
};

export const TASHIL_PROJECT_CAROUSEL_SLIDES = [
  '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-3-scaled.webp',
  '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-4-scaled.webp',
  '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-5-scaled.webp',
  '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-6-scaled.webp',
  '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-scaled.webp',
];

export const OFFICIAL_ASSETS = {
  logoWideBL: '/wp-content/uploads/2026/07/Logo-Wide-BL-Tashilmotion.webp',
  logoWideB: '/wp-content/uploads/2026/07/Logo-Wide-B-Tashilmotion.webp',
  tashilProjectLogo: '/wp-content/uploads/2026/07/Tashil-Project-logo-7.webp',
  ramadanytLogo: '/wp-content/uploads/2026/07/Ramadanyt-logo-.webp',
  mainLogoBB: '/wp-content/uploads/2026/07/main-logo-BB-Tashilmotion.webp',
  mainLogoBW: '/wp-content/uploads/2026/07/main-logo-BW-Tashilmotion.png.webp',
  ico3Tashilmotion: '/wp-content/uploads/2026/07/Ico-3-Tashilmotion.webp',
  avatarOmar: '/wp-content/uploads/2026/07/clipboard-image-276.webp',
  avatarSara: '/wp-content/uploads/2026/07/clipboard-image-275.webp',
  avatarKarim: '/wp-content/uploads/2026/07/clipboard-image-277.webp',
  blogFoldersImg:
    '/wp-content/uploads/2026/08/how-to-organize-motion-graphics-project-folders.webp',
  blogFontsImg: '/wp-content/uploads/2026/08/Gemini_Generated_Image_bopk5lbopk5lbopk.png',
  youtubeBanner: '/wp-content/uploads/2026/07/Youtube-Banner.webp',
  simoBenAvatar: '/wp-content/uploads/2026/07/SimoBen-Avatar.webp',
  saraTeamAvatar: '/wp-content/uploads/2026/07/Sara-Avatar.webp',
  aterGuestGif: '/wp-content/uploads/2026/07/ATER-Guest-with-Contents-Out_Right.gif',
  authorAdminAvatar:
    '/wp-content/litespeed/avatar/ec7002abca9b1243927b590772991c26.jpg?ver=1790712984',
};

export const ProductCardVisual: React.FC<{
  type:
    | 'atheer-4k-en'
    | 'tashil-project'
    | 'ramadanyt'
    | 'atheer-wide-ar'
    | 'atheer-vertical-ar'
    | 'atheer-photoshop';
  featuredBadge?: boolean;
}> = ({ type }) => {
  const imageSrc = PRODUCT_IMAGES[type] || atheerPresenterImg;
  const fallbackSrc = PRODUCT_FALLBACK_IMAGES[type] || atheerPresenterImg;

  return (
    <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-[#f1f5f9] select-none">
      <img
        src={imageSrc}
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== fallbackSrc) {
            target.src = fallbackSrc;
          }
        }}
        alt={type}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

/**
 * Blog Post Visual Thumbnail Renderer
 */
export const BlogCardVisual: React.FC<{
  type: 'folders-guide' | 'google-fonts' | 'welcome-tashil';
  tall?: boolean;
}> = ({ type, tall = false }) => {
  const [imgError, setImgError] = useState(false);

  const officialImgUrl =
    type === 'folders-guide'
      ? OFFICIAL_ASSETS.blogFoldersImg
      : type === 'google-fonts'
      ? OFFICIAL_ASSETS.blogFontsImg
      : OFFICIAL_ASSETS.youtubeBanner;

  if (!imgError) {
    return (
      <div
        className={`relative w-full ${
          tall ? 'aspect-[16/9]' : 'aspect-[16/9]'
        } rounded-[20px] overflow-hidden select-none bg-[#f1f5f9]`}
      >
        <img
          src={officialImgUrl}
          alt={type}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${
        tall ? 'aspect-[16/10]' : 'aspect-[16/10]'
      } rounded-2xl overflow-hidden select-none border border-slate-200/70`}
    >
      {type === 'folders-guide' && (
        <div
          className="w-full h-full p-4 flex items-center justify-between relative"
          style={{
            background: 'linear-gradient(135deg, #D6CFC7 0%, #EAE4DC 50%, #C8BFA8 100%)',
          }}
          dir="ltr"
        >
          {/* Left Folder Tree Diagram & Laptop Screen */}
          <div className="w-[55%] h-full flex flex-col justify-between bg-white/85 backdrop-blur-sm rounded-xl p-3 border border-slate-300/80 shadow-sm text-left transition-transform duration-300 group-hover:-translate-y-0.5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
              <span className="font-en font-extrabold text-[10px] text-slate-800">
                TashilProject™
              </span>
              <span className="text-[8px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-en font-semibold">
                Standard Structure
              </span>
            </div>
            <div className="space-y-1 font-en text-[8.5px] text-slate-700 pl-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-amber-500">📁</span> Project_Root
              </div>
              <div className="pl-3 space-y-0.5 text-[8px] text-slate-600 border-l border-slate-300 ml-1.5">
                <div>📁 01_Assets</div>
                <div>📁 02_Footage</div>
                <div>📁 03_Audio</div>
                <div>📁 04_Projects (Ae / Pr)</div>
                <div>📁 05_Exports</div>
              </div>
            </div>
          </div>

          {/* Right Arabic Headline Poster */}
          <div className="w-[42%] h-full flex flex-col justify-between text-right pl-2" dir="rtl">
            <div className="self-end bg-[#F3DEC8] px-2 py-1 rounded-lg text-[8px] font-bold text-slate-900">
              تسهيل موشن
            </div>
            <div>
              <div className="text-slate-900 font-display font-black text-sm sm:text-base leading-tight">
                تنظيم مجلدات
                <br />
                الموشن جرافيك
              </div>
              <p className="text-[9px] text-slate-700 font-semibold mt-1 leading-snug">
                احمِ مشاريعك من ضياع الملفات وفر وقتك
              </p>
            </div>
          </div>
        </div>
      )}

      {type === 'google-fonts' && (
        <div
          className="w-full h-full p-4 flex items-center justify-between relative"
          style={{
            background: 'linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 55%, #E0F2FE 100%)',
          }}
          dir="ltr"
        >
          {/* Left Flowchart of Arabic Fonts */}
          <div className="w-[54%] h-full flex flex-col justify-center gap-2">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-white rounded-lg p-2 border border-blue-200 shadow-xs flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-0.5">
                <span className="font-en font-bold text-xs text-blue-600">Aa</span>
                <span className="text-[9px] font-bold text-slate-700">القاهرة</span>
              </div>
              <div className="bg-white rounded-lg p-2 border border-blue-200 shadow-xs flex items-center justify-between transition-transform duration-300 group-hover:translate-y-0.5">
                <span className="font-en font-bold text-xs text-amber-500">T</span>
                <span className="text-[9px] font-bold text-slate-700">Tajawal</span>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-2.5 text-white border border-slate-700 shadow-md">
              <div className="text-[7px] text-sky-400 font-en mb-1">Google Fonts Arabic</div>
              <div className="grid grid-cols-3 gap-1 text-[8px] font-en text-slate-200">
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Cairo</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Almarai</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Tajawal</span>
              </div>
            </div>
          </div>

          {/* Right Title Block */}
          <div
            className="w-[43%] h-full flex flex-col justify-between items-end text-right"
            dir="rtl"
          >
            <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center font-en font-black text-blue-600 text-xs">
              G
            </div>
            <div>
              <div className="text-[#1D4ED8] font-display font-black text-base sm:text-lg leading-tight">
                اكتشف
              </div>
              <div className="text-[#1E3A8A] font-en font-black text-xs sm:text-sm tracking-tight">
                GOOGLE FONTS
              </div>
              <div className="text-[8px] text-slate-500 font-en font-semibold">
                SCOPRI GOOGLE FONTS
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full px-2.5 py-0.5 text-[9px] font-bold">
              + 5,000 خط مجاني 🟢
            </div>
          </div>
        </div>
      )}

      {type === 'welcome-tashil' && (
        <div
          className="w-full h-full relative flex items-center justify-center p-4"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, #1E4E5F 0%, #0D2638 55%, #050E17 100%)',
          }}
          dir="ltr"
        >
          {/* Faint graph curve */}
          <svg viewBox="0 0 200 80" className="absolute left-2 bottom-2 w-28 h-14 opacity-35">
            <path
              d="M 5 70 C 35 70, 40 15, 65 15 C 90 15, 95 70, 125 70"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="2"
            />
          </svg>
          <div className="relative z-10 flex items-center gap-4 text-white">
            <div className="text-right pr-3 border-r border-white/20">
              <div className="text-xs sm:text-sm font-display font-bold">
                نُبرمج الأفكار... <span className="text-cyan-300">لنُسهّل</span> الإبداع.
              </div>
              <div className="text-[10px] font-en text-white/70">tashilmotion.com</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex flex-col items-end leading-none font-display font-black text-xs">
                <span>تسهيل</span>
                <span>موشن</span>
              </div>
              <TashilEmblem className="w-7 h-7 text-white" />
              <div className="flex flex-col items-start leading-none font-en font-extrabold text-xs">
                <span>tashil</span>
                <span>motion</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
