import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  FileCode2,
  FileText,
  LayoutTemplate,
  Link2,
  Play,
  Quote,
  Settings,
  ShoppingCart,
  Sparkles,
} from 'lucide-react';
import { PageId, ProductItem, WP_HOME_PAGE_META } from '../data/siteData';
import { useProducts } from '../context/ProductContext';
import {
  ASSETS,
  OFFICIAL_ASSETS,
  PRODUCT_FALLBACK_IMAGES,
  getProductFallbackImage,
  getProductImage,
  ProductCardVisual,
  TASHIL_PROJECT_CAROUSEL_SLIDES,
  TashilEmblem,
  TashilLogo,
} from '../components/VisualAssets';
import featureCardVisualImg from '../assets/images/feature_card_motion_visual_1791354241456.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  const { products } = useProducts();
  const [storeFilter, setStoreFilter] = useState<'all' | 'featured'>('all');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [projectSlide, setProjectSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const displayedProducts =
    storeFilter === 'all'
      ? products
      : products.filter((p) => (p.isFeaturedFilter ?? p.featured));

  return (
    <div
      id={`post-${WP_HOME_PAGE_META.id}`}
      data-page-id={WP_HOME_PAGE_META.id}
      data-slug={WP_HOME_PAGE_META.slug}
      aria-label={WP_HOME_PAGE_META.title.rendered}
      className={`${WP_HOME_PAGE_META.class_list.join(' ')} space-y-20 pb-8`}
      dir="rtl"
    >
      {/* 1. HERO SECTION (.video-card) */}
      <div className="hero-frame">
        <div id="hero-section" className="video-card hero bg-[#161F25]">
          {/* 1. الفيديو فـ الخلفية (https://www.youtube.com/watch?v=-Q27Z5nYedw) */}
          <div className="card-video hero-yt-bg select-none pointer-events-none overflow-hidden">
            <iframe
              src="https://www.youtube-nocookie.com/embed/-Q27Z5nYedw?autoplay=1&mute=1&controls=0&loop=1&playlist=-Q27Z5nYedw&playsinline=1&rel=0&start=0&wmode=opaque&enablejsapi=1&modestbranding=1&iv_load_policy=3&disablekb=1"
              title="Tashil Motion Hero Video"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="hero-yt-iframe"
            />
          </div>

          {/* 2. طبقة شفافة باش تبان الكتابة */}
          <div className="card-overlay pointer-events-none" />

          {/* 3. المحتوى ديال الـ Card (.card-content) */}
          <div className="card-content hero-content">
            {/* BADGE (.collection-badge) */}
            <div
              className="collection-badge bg-white/10 backdrop-blur-md border border-white/15 text-white"
              dir="ltr"
            >
              <span className="w-[8px] h-[8px] rounded-full bg-emerald-400 shrink-0" />
              <span>New Collection 2026</span>
            </div>

            {/* MAIN HEADING (.hero-title — IBM Plex Sans Arabic) */}
            <h1 className="hero-title">
              أدوات وسكريبتات
              <br />
              موشن جرافيك تعمل
              <br />
              باحترافية لتختصر وقتك!
            </h1>

            {/* DESCRIPTION (.hero-description — Noto Sans Arabic, 16px / 1.5) */}
            <p className="hero-description">
              ابتكر فيديوهات متحركة ومبهرة في دقائق. نوفر لك جيلاً جديداً من سكريبتات{' '}
              <span dir="ltr" className="inline-block">
                After Effects
              </span>{' '}
              وقوالب{' '}
              <span dir="ltr" className="inline-block">
                MOGRT
              </span>{' '}
              الذكية المصممة لرفع جودة إنتاجك البصري.
            </p>

            {/* CTA BUTTON (.hero-button) */}
            <button
              type="button"
              onClick={() => onNavigate('store')}
              className="hero-button cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-98 group"
            >
              <span>تصفح المتجر والملحقات</span>
              <ArrowLeft className="w-[16px] h-[16px] text-[#161F25] transition-transform duration-200 group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. BELOW HERO: SERVICES SECTION ("كل ما يحتاجه مشروعك في مكان واحد" — 6 Official Cards) */}
      <motion.section
        id="start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="next-section pt-4 bg-white"
      >
        <div className="site-container text-center">
          {/* Circular Badge Icon (#0B96B8) */}
          <div className="w-16 h-16 rounded-full bg-[#0B96B8] text-white flex items-center justify-center mx-auto mb-5 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 6h.01M8 6h.01M11 6h.01M2 9V6.2c0-1.12 0-1.6801.218-2.108a2 2 0 0 1 .874-.874C3.5198 3 4.08 3 5.2 3h13.6c1.1201 0 1.6802 0 2.108.218.3763.1917.6823.4977.874.874C22 4.52 22 5.08 22 6.2V9M2 9v8.8c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C3.52 21 4.08 21 5.2 21h13.6c1.1201 0 1.6802 0 2.108-.218a2 2 0 0 0 .874-.874C22 19.4802 22 18.9201 22 17.8V9M2 9h20"
              />
            </svg>
          </div>

          <h2 className="font-bold text-2xl sm:text-3xl md:text-[36px] text-[#161F25] tracking-tight text-center">
            كل ما يحتاجه مشروعك في مكان واحد
          </h2>
          <p className="text-[#4B5B66] text-[16px] mt-2.5 max-w-2xl mx-auto font-normal leading-[1.7] text-center">
            نقدم حلولاً متكاملة تجمع بين البرمجة الحصرية والتصميم الإبداعي لتسهيل رحلة صناعة الفيديو.
          </p>

          {/* 6-Item 3-Column Grid matching official M_EL25 MSC8 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-stretch">
            {/* 1. برمجيات وسكريبتات */}
            <article className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M6 15h12M6 15c-1.5 0-2-.5714-2-2v-1c0-3 5-1 5-5V5c0-1.578 1.3431-3 3-3s3 1.422 3 3v2c0 4 5 2 5 5v1c0 1.4286-.5 2-2 2M6 15c0 1.1063-1.7991 4.6971-2.6109 6.2609-.1743.3358.0697.7391.448.7391H13.1c.2568 0 .508-.0957.6609-.3021.4925-.6648.9464-1.7786 1.1402-2.2872.0337-.0884.1641-.0884.1978 0 .1938.5086.6477 1.6224 1.1402 2.2872.1529.2064.4041.3021.6609.3021h3.2629c.3783 0 .6223-.4033.448-.7391C19.7991 19.6971 18 16.1063 18 15"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#161F25] mb-2 text-center">
                برمجيات وسكريبتات
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.65] max-w-[320px] text-center">
                سكريبتات وأدوات برمجية حصرية تحول العمليات التكرارية إلى ضغطة زر.
              </p>
            </article>

            {/* 2. قوالب MOGRT وجاهزة للتحريك */}
            <article className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m17 17 5-5-5-5M7 7l-5 5 5 5m7-14-4 18"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#161F25] mb-2 text-center">
                قوالب MOGRT وجاهزة للتحريك
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.65] max-w-[320px] text-center">
                عناوين، انتقالات، ومؤشرات بصرية جاهزة للسحب والإفلات داخل Premiere Pro.
              </p>
            </article>

            {/* 3. تطوير حلول SaaS و Custom Scripts */}
            <article className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 2h1.142a1 1 0 0 1 .9884.848L4.6155 6m0 0 1.1237 7.3041c.15.9757.9895 1.6959 1.9766 1.6959h9.8427a2 2 0 0 0 1.8973-1.3675l2.1055-6.3163C21.7771 6.6687 21.2951 6 20.6126 6zM19 20c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2m-9 0c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#161F25] mb-2 text-center">
                تطوير حلول SaaS و Custom Scripts
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.65] max-w-[320px] text-center">
                برمجة أدوات خاصة بالشركات والوكالات لتسهيل سير العمل البرمجي والبصري.
              </p>
            </article>

            {/* 4. دروس وشروحات احترافية */}
            <article className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 3v2m0 0v2m0-2H2m2 0h2M5 17v2m0 0v2m0-2H3m2 0h2m6-16 2.431 6.569L22 12l-6.569 2.431L13 21l-2.431-6.569L4 12l6.569-2.431z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#161F25] mb-2 text-center">
                دروس وشروحات احترافية
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.65] max-w-[320px] text-center">
                محتوى تعليمي ودورات لتعلم تقنيات التحريك المتقدمة وزيادة إنتاجيتك.
              </p>
            </article>

            {/* 5. تحسين أداء الرندر وسير العمل */}
            <article className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35M19 11c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#161F25] mb-2 text-center">
                تحسين أداء الرندر وسير العمل
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.65] max-w-[320px] text-center">
                ملفات خفيفة ومصممة بأعلى معايير البرمجة لضمان سرعة العمل بدون تهنيج.
              </p>
            </article>

            {/* 6. دعم فني وتحديثات مستمرة */}
            <article className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.1048 15c1.6648 0 3.0144-1.3431 3.0144-3s-1.3496-3-3.0144-3-3.0145 1.3431-3.0145 3 1.3496 3 3.0145 3"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9.3808 19.3711.5872 1.3145c.1746.3912.4595.7237.8202.957A2.23 2.23 0 0 0 12 22a2.23 2.23 0 0 0 1.2118-.3574 2.215 2.215 0 0 0 .8202-.957l.5872-1.3145a2.43 2.43 0 0 1 1.0049-1.1111 2.454 2.454 0 0 1 1.4771-.3122l1.4369.1522a2.23 2.23 0 0 0 1.2426-.2287 2.22 2.22 0 0 0 .9166-.8657 2.203 2.203 0 0 0 .2952-1.2227 2.204 2.204 0 0 0-.4225-1.1851l-.8507-1.1634A2.42 2.42 0 0 1 19.2571 12a2.42 2.42 0 0 1 .4667-1.4289l.8507-1.1633A2.203 2.203 0 0 0 20.7018 7a2.22 2.22 0 0 0-.9166-.8658 2.23 2.23 0 0 0-1.2427-.2286l-1.4369.1522a2.455 2.455 0 0 1-1.4771-.3122 2.43 2.43 0 0 1-1.0048-1.1167l-.5917-1.3145a2.215 2.215 0 0 0-.8202-.957A2.23 2.23 0 0 0 12 2c-.4302 0-.8511.124-1.2118.3574a2.215 2.215 0 0 0-.8202.957L9.3808 4.629a2.43 2.43 0 0 1-1.0049 1.1167 2.455 2.455 0 0 1-1.477.3122l-1.4414-.1522a2.23 2.23 0 0 0-1.2427.2286A2.22 2.22 0 0 0 3.2982 7a2.203 2.203 0 0 0 .1273 2.4078l.8508 1.1633a2.421 2.421 0 0 1 0 2.8578l-.8508 1.1633A2.203 2.203 0 0 0 3.2982 17c.2152.3706.5336.6712.9168.8654a2.234 2.234 0 0 0 1.2425.229l1.4369-.1522a2.456 2.456 0 0 1 1.477.3122 2.43 2.43 0 0 1 1.0094 1.1167"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-[18px] text-[#161F25] mb-2 text-center">
                دعم فني وتحديثات مستمرة
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.65] max-w-[320px] text-center">
                مرافقة كاملة لمساعدتك في تثبيت الملحقات واستخدامها بكل سهولة.
              </p>
            </article>
          </div>
        </div>
      </motion.section>

      {/* 3. MACOS WINDOW VIDEO SHOWCASE & 4 BRAND LOGOS STRIP */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="site-container relative">
          {/* Background Watermark Icon (Ico-3-Tashilmotion.webp) */}
          <img
            src={OFFICIAL_ASSETS.ico3Tashilmotion}
            alt=""
            aria-hidden="true"
            className="hidden lg:block absolute -top-20 left-4 w-[320px] h-auto opacity-10 pointer-events-none select-none"
          />

          {/* macOS Browser Frame (.M_EL62) */}
          <div className="max-w-[1008px] mx-auto relative z-10 rounded-[12px] overflow-hidden shadow-[0_1px_3px_rgba(15,22,37,0.05),0_12px_16px_-4px_rgba(15,22,37,0.08)] border border-[#e5e7eb] bg-white">
            {/* Window Traffic Dots (.M_EL64) */}
            <div
              className="flex items-center gap-2 px-4 py-3 bg-black/10 backdrop-blur-[2.5px]"
              dir="ltr"
            >
              <span className="w-2 h-2 rounded-full bg-white/80" />
              <span className="w-2 h-2 rounded-full bg-white/80" />
              <span className="w-2 h-2 rounded-full bg-white/80" />
            </div>

            {/* Official YouTube Embed (-Q27Z5nYedw) */}
            <div className="M_EL_YouTube w-full aspect-video bg-[#09090b]">
              <iframe
                className="M_EL_YouTube__Frame"
                src="https://www.youtube-nocookie.com/embed/-Q27Z5nYedw?autoplay=1&mute=1&controls=0&loop=1&playlist=-Q27Z5nYedw&playsinline=1&rel=0&start=0&wmode=opaque&enablejsapi=1"
                title="Tashil Motion Official Showcase"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </div>

          {/* 4 Official Brand/Product Logos Strip (.M_EL73) */}
          <div
            className="max-w-[1008px] mx-auto mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center"
            dir="ltr"
          >
            <div
              onClick={() => onNavigate('about')}
              className="flex items-center justify-center p-2 cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={OFFICIAL_ASSETS.logoWideB}
                alt="Tashil Motion"
                className="max-h-14 w-auto object-contain"
              />
            </div>

            <div
              onClick={() => onSelectProduct(PRODUCTS[1])}
              className="flex items-center justify-center p-2 cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={OFFICIAL_ASSETS.tashilProjectLogo}
                alt="TashilProject"
                className="max-h-14 w-auto object-contain"
              />
            </div>

            <div
              onClick={() => onSelectProduct(PRODUCTS[2])}
              className="flex items-center justify-center p-2 cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={OFFICIAL_ASSETS.ramadanytLogo}
                alt="Ramadanyt"
                className="max-h-16 w-auto object-contain mix-blend-difference"
              />
            </div>

            <div
              onClick={() => onNavigate('store')}
              className="flex items-center justify-center p-2 cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={OFFICIAL_ASSETS.mainLogoBB}
                alt="Tashil Motion Store"
                className="max-h-20 w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. TASHILPROJECT™ – PROJECT STRUCTURE GENERATOR SPLIT SHOWCASE */}
      <section className="showcase-section" dir="rtl">
        <div className="showcase-container">
          {/* 1. الجهة اليسرى: الكتابة والزر */}
          <div className="text-content">
            <h1 className="main-title">
              TashilProject™ –<br />
              Project Structure Generator
            </h1>

            <p className="description">
              توقف عن إضاعة الساعات في إنشاء المجلدات المتكررة يدوياً.
              <br />
              وفر وقتك، حافظ على تنظيمك، وابدأ الإبداع فوراً مع TashilProject™ مجاناً.
            </p>

            <a
              href="#tashil-project"
              onClick={(e) => {
                e.preventDefault();
                onSelectProduct(PRODUCTS[1]);
              }}
              className="primary-btn"
            >
              <span>جربه الآن</span>
              <div className="btn-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
            </a>
          </div>

          {/* 2. الجهة اليمنى: سلايدر الصور (5 شرائح رسمية) */}
          <div
            className="slider-card"
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const deltaX = e.changedTouches[0].clientX - touchStartX;
              const totalSlides = TASHIL_PROJECT_CAROUSEL_SLIDES.length;
              if (Math.abs(deltaX) > 40) {
                if (deltaX < 0) {
                  setProjectSlide((prev) => (prev + 1) % totalSlides);
                } else {
                  setProjectSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
                }
              }
              setTouchStartX(null);
            }}
          >
            {/* حاوية الصور */}
            <div className="slides-wrapper" id="slidesWrapper">
              {TASHIL_PROJECT_CAROUSEL_SLIDES.map((slideSrc, idx) => (
                <img
                  key={idx}
                  src={slideSrc}
                  onError={(e) => {
                    e.currentTarget.src = PRODUCT_FALLBACK_IMAGES['tashil-project'];
                  }}
                  alt={`TashilProject Slide ${idx + 1}`}
                  draggable={false}
                  className={`slide ${projectSlide === idx ? 'active' : ''}`}
                />
              ))}
            </div>

            {/* أسهم التنقل (يمين ويسار) */}
            <button
              type="button"
              className="nav-btn prev-btn"
              id="prevBtn"
              aria-label="Previous slide"
              onClick={() =>
                setProjectSlide(
                  (prev) =>
                    (prev - 1 + TASHIL_PROJECT_CAROUSEL_SLIDES.length) %
                    TASHIL_PROJECT_CAROUSEL_SLIDES.length
                )
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1f2937"
                strokeWidth="2.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              className="nav-btn next-btn"
              id="nextBtn"
              aria-label="Next slide"
              onClick={() =>
                setProjectSlide((prev) => (prev + 1) % TASHIL_PROJECT_CAROUSEL_SLIDES.length)
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1f2937"
                strokeWidth="2.5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* نقاط السلايدر (Pagination Dots) */}
            <div className="dots-container" id="dotsContainer">
              {TASHIL_PROJECT_CAROUSEL_SLIDES.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setProjectSlide(idx)}
                  className={`dot ${projectSlide === idx ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOOLS DESIGNED TO ELEVATE YOUR WORK BANNER (.feature-card) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="site-container">
          <div className="feature-card" dir="rtl">
            <div className="video-card-wrapper">
              <img
                src={OFFICIAL_ASSETS.mainLogoBW}
                onError={(e) => {
                  e.currentTarget.src = featureCardVisualImg;
                }}
                alt="تسهيل موشن - أدوات مصممة للارتقاء بأعمالك"
                className="card-video"
              />
              {/* التدرج لي كيدمج الفيديو/الصورة مع الخلفية */}
              <div className="gradient-fade" />
            </div>

            <div className="card-content">
              <h2 className="card-title">
                أدوات مصممة <br />
                للارتقاء بأعمالك.
              </h2>
              <p className="card-description">
                استكشف ملحقات الموشن جرافيك والقوالب الجاهزة
              </p>
              <a
                href="#store"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('store');
                }}
                className="card-btn"
              >
                استكشف الأدوات
                <span className="btn-icon">↗</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. FEATURED STORE PRODUCTS GRID (.tm-featured-section-wrapper) */}
      <section className="tm-featured-section-wrapper" dir="rtl">
        <div className="tm-section-header">
          <span className="tm-section-badge">✨ القوالب والأدوات المتاحة</span>
          <h2 className="tm-section-title">أحدث أدوات وقوالب المونتاج والتصميم</h2>
          <p className="tm-section-subtitle">
            اختر من بين مجموعة حصرية من الملحقات الجاهزة للاستخدام في مشاريعك القادمة
          </p>

          <div className="tm-section-tabs">
            <button
              type="button"
              data-filter="all"
              onClick={() => setStoreFilter('all')}
              className={`tm-tab-btn ${storeFilter === 'all' ? 'active' : ''}`}
            >
              جميع المنتجات
            </button>
            <button
              type="button"
              data-filter="featured"
              onClick={() => setStoreFilter('featured')}
              className={`tm-tab-btn ${storeFilter === 'featured' ? 'active' : ''}`}
            >
              🔥 الأكثر تميزاً
            </button>
          </div>
        </div>

        <div className="tm-latest-grid" id="tmLatestGrid">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              data-featured={product.featured ? '1' : '0'}
              className={`tm-latest-card ${product.featured ? 'is-featured-item' : ''}`}
            >
              <div
                className="tm-latest-media"
                onClick={() => onSelectProduct(product)}
              >
                {product.featured && (
                  <span className="tm-badge-featured">✦ مميز</span>
                )}
                <img
                  src={getProductImage(product)}
                  onError={(e) => {
                    e.currentTarget.src = getProductFallbackImage(product);
                  }}
                  alt={product.title}
                  loading="lazy"
                />
              </div>

              <div className="tm-latest-body">
                <h3 className="tm-latest-title">
                  <a
                    href={`#product-${product.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectProduct(product);
                    }}
                  >
                    {product.title}
                  </a>
                </h3>

                <div className="tm-latest-footer">
                  <div className="flex items-baseline gap-1.5">
                    <span className="tm-latest-price">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#94a3b8] line-through tabular-nums">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="tm-latest-btns">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="tm-btn-buy"
                    >
                      عرض وشراء
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="tm-btn-view"
                    >
                      معاينة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tm-section-footer">
          <a
            href="#store"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('store');
            }}
            className="tm-btn-all-store"
          >
            <span>تصفح المتجر بالكامل</span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* 7. PACKAGES & SUBSCRIPTIONS + FAQ (.pricing-wrapper) */}
      <section className="pricing-wrapper" dir="rtl">
        {/* الهيدر (الأيقونة والعنوان) */}
        <div className="pricing-header">
          <div className="top-icon">
            {/* أيقونة العملات/الباقات */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
          <h2 className="main-title">باقات واشتراكات تناسب احتياجاتك</h2>
          <p className="main-subtitle">
            اختر الخطة المناسبة لك واصل على وصول فورياً لمكتبتنا المتنامية من الملحقات.
          </p>
        </div>

        {/* الكروت (الباقات) */}
        <div className="cards-container">
          {/* الكارت الأيمن: الباقة الاحترافية (29$) */}
          <div className="card pro-card">
            <div className="badge">الباقة الاحترافية ⭐ الأكثر شعبية</div>
            <div className="price">$29</div>
            <p className="desc">
              الخيار الشامل للمصممين المحترفين والوكالات الذين يرغبون بالوصول لكافة الأدوات.
            </p>

            <button type="button" className="btn btn-disabled">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              قريبا جدا (الاشتراك الشهري و التحميل لا محدود)
            </button>

            <ul className="features">
              <li>
                جميع قوالب الموشن جرافيك والمؤثرات الصوتية <span>✓</span>
              </li>
              <li>
                الحصرية After Effects وصول لكافة سكريبتات <span>✓</span>
              </li>
              <li>
                تراخيص استخدام تجاري لا محدود <span>✓</span>
              </li>
              <li>
                تحديثات مجانية مدى الحياة <span>✓</span>
              </li>
              <li>
                دعم فني مباشر وسريع <span>✓</span>
              </li>
            </ul>
          </div>

          {/* الكارت الأيسر: باقة البداية (1$) */}
          <div className="card start-card">
            <div className="badge">باقة البداية</div>
            <div className="price">+$1</div>
            <p className="desc">
              مثالية للمبتدئين وصناع المحتوى الذين يبحثون عن أصول تحريك أساسية وسريعة.
            </p>

            <a
              href="#store"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('store');
              }}
              className="btn btn-light"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              شراء الآن عبر المتجر
            </a>

            <ul className="features">
              <li className="has-icon">
                <svg
                  className="gear-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0 2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                حزمة عناصر تحريك وانتقالات أساسية <span>✓</span>
              </li>
              <li>
                نصوص وعناوين MOGRT قوالب <span>✓</span>
              </li>
              <li>
                استخدام لمشروع تجاري واحد <span>✓</span>
              </li>
              <li>
                دعم فني عبر البريد الإلكتروني <span>✓</span>
              </li>
            </ul>
          </div>
        </div>

        {/* الأسئلة الشائعة (6 أسئلة في عمودين) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="faq-box">
            <h3>هل يمكنني ترقية الترخيص بعد الشراء الأول؟</h3>
            <p>
              نعم، يمكنك ترقية باقتك أو ترخيصك في أي وقت لتغطية مشاريع أكبر، وسوف تدفع فقط الفارق
              بين الخطتين.
            </p>
          </div>

          <div className="faq-box">
            <h3>ما هي متطلبات التشغيل والبرامج المدعومة؟</h3>
            <p>
              تعمل القوالب والملحقات على إصدارات After Effects و Premiere Pro الحديثة (CC 2021 وما
              فوق). نوضح البرامج والتوافق بدقة في صفحة كل منتج.
            </p>
          </div>

          <div className="faq-box">
            <h3>لماذا يُنصح بالترقية للباقة الاحترافية (Pro Plan)؟</h3>
            <p>
              تمنحك الباقة الاحترافية وصولاً كاملاً لجميع سكريبتات After Effects وقوالب MOGRT
              الحصرية مع تراخيص استخدام تجاري لا محدود وتحديثات مدى الحياة.
            </p>
          </div>

          <div className="faq-box">
            <h3>هل تقدمون دعماً فنياً وتحديثات للملفات؟</h3>
            <p>
              نعم، نوفر دعماً فنياً متواصلاً لمساعدتك في أي استفسار، بالإضافة إلى تحديثات مجانية
              لجميع المنتجات لضمان توافقها مع أحدث إصدارات البرامج.
            </p>
          </div>

          <div className="faq-box">
            <h3>هل يمكنني استخدام القوالب في مشاريع تجارية للعملاء؟</h3>
            <p>
              نعم! يسمح لك الترخيص باستخدام المنتجات في مشاريعك الخاصة أو المشاريع التي تنفذها
              لعملائك التجاريين بكل حرية وبدون مشاكل حقوق.
            </p>
          </div>

          <div className="faq-box">
            <h3>ما هي سياسة الاسترجاع واسترداد الأموال؟</h3>
            <p>
              نظراً لأن المنتجات رقمية وقابلة للتحميل الفوري، فإن الاسترجاع يخضع لشروط محددة في حال
              وجود مشكلة تقنية بالمنتج لم نتمكن من حلها لك.
            </p>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS ("آراء حقيقية، ونتائج ملموسة" — Official Avatars & Copy) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="pt-2"
      >
        <div className="site-container text-center">
          {/* Circular Quote Icon (#0B96B8) */}
          <div className="w-16 h-16 rounded-full bg-[#0B96B8] text-white flex items-center justify-center mx-auto mb-5 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2 15c0 2.2091 1.7909 4 4 4s4-1.7909 4-4-1.7909-4-4-4-4 1.7909-4 4m0 0c0-2.762.6092-5.337 2.6361-7.364A9 9 0 0 1 11 5m2 10c0 2.2091 1.7909 4 4 4s4-1.7909 4-4-1.7909-4-4-4-4 1.7909-4 4m0 0c0-2.762.6092-5.337 2.6361-7.364A9 9 0 0 1 22 5"
              />
            </svg>
          </div>

          <h2 className="font-bold text-2xl sm:text-3xl md:text-[36px] text-[#161F25] tracking-tight text-center">
            آراء حقيقية، ونتائج ملموسة
          </h2>
          <p className="text-[#4B5B66] text-[16px] mt-2 font-normal leading-[1.75] text-center">
            استمع لما يقوله المصممون وصناع المحتوى الذين استخدموا ملحقات تسهيل موشن لتطوير أعمالهم.
          </p>

          {/* 3 Official Testimonial Cards with Avatars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* 1. عمر */}
            <article className="flex flex-col items-center justify-between text-center p-4">
              <p className="text-[#4B5B66] text-[16px] font-normal leading-[1.7] mb-6 text-center">
                "سكريبتات Tashilmotion غيرت أسلوب عملي في After Effects تماماً. أصبحت أنجز المشاريع
                التي كانت تأخذ أياماً في بضع ساعات فقط!"
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={OFFICIAL_ASSETS.avatarOmar}
                  onError={(e) => {
                    e.currentTarget.src = ASSETS.teamDevImg;
                  }}
                  alt="عمر"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[16px] text-[#0B96B8] text-center">عمر</div>
                  <div className="text-[14px] text-[#4B5B66] italic mt-0.5 text-center">
                    مصمم موشن جرافيك حر
                  </div>
                </div>
              </div>
            </article>

            {/* 2. سارة إبراهيم */}
            <article className="flex flex-col items-center justify-between text-center p-4">
              <p className="text-[#4B5B66] text-[16px] font-normal leading-[1.7] mb-6 text-center">
                قوالب الـ MOGRT ممتازة وسريعة جداً داخل Premiere. المرونة في تغيير الألوان والنصوص
                وفرت عليّ وعلى فريقي الكثير من المجهود.
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={OFFICIAL_ASSETS.avatarSara}
                  onError={(e) => {
                    e.currentTarget.src = ASSETS.teamDesignImg;
                  }}
                  alt="سارة إبراهيم"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[16px] text-[#0B96B8] text-center">
                    سارة إبراهيم
                  </div>
                  <div className="text-[14px] text-[#4B5B66] mt-0.5 text-center">
                    مديرة إنتاج بصرى
                  </div>
                </div>
              </div>
            </article>

            {/* 3. كريم عبد العزيز */}
            <article className="flex flex-col items-center justify-between text-center p-4">
              <p className="text-[#4B5B66] text-[16px] font-normal leading-[1.7] mb-6 text-center">
                الدعم الفني ممتاز وتجربة الشراء والتحميل عبر Lemon Squeezy كانت سلسة للغاية. أنصح بها
                بشدة لكل مصمم عربي
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={OFFICIAL_ASSETS.avatarKarim}
                  onError={(e) => {
                    e.currentTarget.src = ASSETS.founderPortraitImg;
                  }}
                  alt="كريم عبد العزيز"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[16px] text-[#0B96B8] text-center">
                    كريم عبد العزيز
                  </div>
                  <div className="text-[14px] text-[#4B5B66] italic mt-0.5 text-center">
                    صانع محتوى وفيديوهات
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
