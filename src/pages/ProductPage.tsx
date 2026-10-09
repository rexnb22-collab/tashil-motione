import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  ExternalLink,
  Flame,
  HelpCircle,
  Home,
  Mail,
  Play,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import { PageId, ProductItem } from '../data/siteData';
import { useProducts } from '../context/ProductContext';
import {
  OFFICIAL_ASSETS,
  PRODUCT_FALLBACK_IMAGES,
  PRODUCT_IMAGES,
  getProductFallbackImage,
  getProductImage,
} from '../components/VisualAssets';

interface ProductPageProps {
  product: ProductItem;
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [relatedSlide, setRelatedSlide] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  // Reset active media when product changes
  useEffect(() => {
    setActiveMediaIndex(0);
    setShowMoreDetails(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  // Handle sticky floating bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setStickyVisible(true);
      } else {
        setStickyVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { products } = useProducts();

  const galleryItems = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [{ url: getProductImage(product), title: product.title }];

  const currentMedia = galleryItems[activeMediaIndex] || galleryItems[0];

  const scrollToGallery = () => {
    const el = document.getElementById('tmGalleryViewer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Filter related products
  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="pb-16 text-[#0F172A]" dir="rtl">
      {/* 1. OFFICIAL BREADCRUMB */}
      <nav className="tm-breadcrumbs-wrapper !my-4 !px-4" aria-label="Breadcrumb" dir="rtl">
        <div className="tm-breadcrumbs-container">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
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
          <a
            href="#store"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('store');
            }}
            className="tm-bc-item"
          >
            <span>المتجر</span>
          </a>
          <span className="tm-bc-sep">/</span>
          <span className="tm-bc-item">{product.breadcrumbCategory}</span>
          <span className="tm-bc-sep">/</span>
          <span className="tm-bc-item active">{product.title}</span>
        </div>
      </nav>

      <div className="site-container max-w-[1200px] mx-auto px-4 space-y-16">
        {/* 2. HERO SECTION (M_EL13) */}
        <section className="bg-gradient-to-b from-[#f8fafc] to-white rounded-3xl p-6 sm:p-10 border border-[#edf2f7] shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text column (RTL Right side) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f4f6] text-[#004d5a] text-xs font-bold font-en">
                <Sparkles className="w-3.5 h-3.5 text-[#0B96B8]" />
                <span>{product.category}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] leading-[1.25] tracking-tight">
                {product.title}
              </h1>

              <p className="text-base sm:text-lg text-[#64748b] leading-relaxed">
                {product.heroSubtitle}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#004d5a] hover:bg-[#00363f] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#004d5a]/15 transition-all hover:-translate-y-0.5 active:scale-98"
                >
                  <span>شراء الآن ({product.price})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="inline-flex items-center gap-2 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>إضافة إلى السلة</span>
                </button>

                <button
                  type="button"
                  onClick={scrollToGallery}
                  className="inline-flex items-center gap-2 text-[#004d5a] hover:text-[#0f172a] font-bold text-sm px-4 py-3.5 rounded-full transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>معاينة العينات</span>
                </button>
              </div>
            </div>

              {/* Right Artwork column (RTL Left side) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-xl bg-slate-900 group">
                <img
                  src={getProductImage(product)}
                  onError={(e) => {
                    e.currentTarget.src = getProductFallbackImage(product);
                  }}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-emerald-400 border border-emerald-400/30 text-xs font-bold px-3 py-1.5 rounded-full">
                  {product.price}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DETAILED OVERVIEW (M_EL24: "ارتقِ بمشاريعك إلى المستوى التالي 🚀") */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e2e8f0] shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#0f172a]">
              {product.overviewTitle || 'نظرة عامة على المنتج'}
            </h2>
          </div>

          {/* First paragraph is always visible */}
          <div className="space-y-4 text-base sm:text-[17px] text-[#334155] leading-relaxed">
            <p>{(product.overviewParagraphs && product.overviewParagraphs[0]) || product.description}</p>
          </div>

          {/* Additional text & sections: On mobile, hidden until "عرض المزيد" is clicked. On desktop (sm+), always visible */}
          <div className={`${showMoreDetails ? 'block' : 'hidden sm:block'} space-y-6 pt-2`}>
            {product.overviewParagraphs && product.overviewParagraphs.length > 1 && (
              <div className="space-y-4 text-base sm:text-[17px] text-[#334155] leading-relaxed">
                {product.overviewParagraphs.slice(1).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {/* Structured Content Sections (What's New, What's Inside, Key Features, Who is this for) */}
            {product.overviewSections && product.overviewSections.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {product.overviewSections.map((sec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 space-y-3 sm:space-y-4"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a] flex items-center gap-2">
                      {sec.title}
                    </h3>
                    <ul className="space-y-2.5 sm:space-y-3 text-sm text-[#475569]">
                      {sec.items.map((item, itIdx) => (
                        <li key={itIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#007A8C] mt-2 shrink-0" />
                          <div>
                            {item.title && (
                              <strong className="text-[#0f172a] block sm:inline font-bold ml-1">
                                {item.title}
                              </strong>
                            )}
                            <span>{item.text}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Only: "عرض المزيد / عرض أقل" Toggle Button */}
          <div className="block sm:hidden pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowMoreDetails((prev) => !prev)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>{showMoreDetails ? 'عرض أقل ▴' : 'عرض المزيد من التفاصيل ▾'}</span>
            </button>
          </div>
        </section>

        {/* 4. KEY FEATURES 4-CARD GRID (M_EL31) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
              المميزات الأساسية التي تجعلنا خيارك الأفضل 🎯
            </h2>
            <p className="text-sm sm:text-base text-[#64748b]">
              تم تصميم هذا القالب ليوفر لك تجربة عمل سلسة واحترافية. اختصر ساعات من التعديل المعقد واكتشف القوة في البساطة والدقة العالية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(product.features || []).map((feat, idx) => {
              const featTitle = typeof feat === 'string' ? feat : feat.title || '';
              const featDesc =
                typeof feat === 'string'
                  ? ''
                  : (feat as any).description || (feat as any).text || '';
              return (
                <article
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-xs hover:border-[#007A8C]/40 transition-all hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#e6f4f6] text-[#004d5a] flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#007A8C]" />
                    </div>
                    <h3 className="font-bold text-base text-[#0f172a]">{featTitle}</h3>
                    {featDesc && (
                      <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                        {featDesc}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 5. INTERACTIVE MEDIA VIEWER & GALLERY (M_EL57: #tmGalleryViewer) */}
        <section id="tmGalleryViewer" className="bg-[#0f172a] text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs text-[#2dd4bf] font-bold uppercase tracking-wider block">
                معاينة مباشرة وحصرية
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                معرض العينات والتأثيرات البصرية
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              {activeMediaIndex + 1} من {galleryItems.length}
            </span>
          </div>

          {/* Main 16:9 Display */}
          <div className="tm-main-display relative aspect-video bg-black/80 rounded-2xl overflow-hidden border border-white/15 flex items-center justify-center">
            <img
              src={currentMedia.url || getProductImage(product)}
              onError={(e) => {
                e.currentTarget.src = getProductFallbackImage(product);
              }}
              alt={currentMedia.title || product.title}
              className="w-full h-full object-contain"
            />
            {currentMedia.title && (
              <div className="absolute bottom-3 inset-x-3 bg-black/60 backdrop-blur-md text-white text-xs px-4 py-2 rounded-xl text-center border border-white/10 pointer-events-none">
                {currentMedia.title}
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div className="space-y-2">
            <p className="text-xs text-slate-400">انقر على أي صورة لتكبيرها في شاشة العرض:</p>
            <div className="tm-thumbs-list flex gap-3 overflow-x-auto pb-2 scrollbar-none" dir="ltr">
              {galleryItems.map((item, idx) => {
                const isActive = activeMediaIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`tm-thumb-item relative flex-shrink-0 w-24 sm:w-28 h-16 sm:h-20 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                      isActive
                        ? 'border-[#2dd4bf] ring-2 ring-[#2dd4bf]/40 opacity-100 scale-102'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.url || getProductImage(product)}
                      onError={(e) => {
                        e.currentTarget.src = getProductFallbackImage(product);
                      }}
                      alt={item.title || `Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION & SPECIFICATIONS TABLE (M_EL60) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Ready to Speed Up Workflow */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#004d5a] to-[#012f38] text-white p-8 rounded-3xl flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                جاهز لتسريع سير عملك اليوم؟ ⚡
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                احصل على هذا القالب الآن واستمتع بتحميل مباشر وفوري مع تحديثات مجانية مدى الحياة. ابدأ في إنتاج فيديوهات احترافية تجذب جمهورك فوراً!
              </p>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a
                href={product.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#004d5a] hover:bg-slate-100 font-extrabold text-sm px-8 py-3.5 rounded-full shadow-md transition-all hover:scale-102 active:scale-98"
              >
                شراء وتحميل فوري ({product.price})
              </a>
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-full transition-colors cursor-pointer"
              >
                إضافة للسلة
              </button>
            </div>
          </div>

          {/* Card 2: Technical Specifications Metadata */}
          <div className="lg:col-span-6 bg-[#f8fafc] border border-[#e2e8f0] p-8 rounded-3xl space-y-5 flex flex-col justify-between">
            <h3 className="text-lg font-bold text-[#0f172a] border-b border-slate-200/80 pb-3">
              المواصفات الفنية والمتطلبات
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="text-[#64748b]">تاريخ الإصدار:</span>
                <span className="font-bold text-[#0f172a] font-en">{product.releaseDate || '2026-08-26'}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="text-[#64748b]">آخر تحديث:</span>
                <span className="font-bold text-[#0f172a] font-en">{product.updateDate || '2026-08-30'}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="text-[#64748b]">البرامج المدعومة:</span>
                <span className="font-bold text-[#004d5a] font-en">{product.supportedSoftware || product.compatibility}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="text-[#64748b]">التصنيف:</span>
                <span className="font-bold text-[#0f172a]">{product.category}</span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-[#64748b]">الوسوم:</span>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {(product.tags || []).map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Support Mini Cards */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:support@tashilmotion.com"
                className="p-3 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors flex items-center gap-3 text-right"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">راسلنا عبر البريد</div>
                  <div className="text-[11px] text-slate-500">الرد خلال 24 ساعة</div>
                </div>
              </a>

              <a
                href="#support"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('support');
                }}
                className="p-3 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors flex items-center gap-3 text-right cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">مركز المساعدة</div>
                  <div className="text-[11px] text-slate-500">إجابات وتوثيق كامل</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 7. VERIFIED TESTIMONIALS (M_EL90) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e2e8f0] space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
              نبتكر أصولاً وموارد رقمية استثنائية ⭐
            </h2>
            <p className="text-sm text-[#64748b]">
              انضم إلى آلاف مصممي الموشن جرافيك وصناع المحتوى الذين يثقون في منتجاتنا لتسريع أعمالهم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(product.testimonials || []).map((test, tIdx) => (
              <article
                key={tIdx}
                className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(test.rating || 5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                <div className="border-t border-slate-200/80 pt-3">
                  <strong className="block text-sm font-bold text-[#0f172a]">
                    {test.name}
                  </strong>
                  {test.title && (
                    <span className="text-xs text-[#64748b]">{test.title}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 8. RELATED PRODUCTS SWIPER (M_EL140) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                منتجات قد تعجبك أيضاً ⚡
              </h3>
              <p className="text-sm text-[#64748b]">
                استكشف المزيد من القوالب والملفات الإبداعية المصممة لتسريع عملك
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 3).map((relProduct) => (
              <div
                key={relProduct.id}
                className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div
                  className="aspect-video bg-slate-900 relative cursor-pointer overflow-hidden"
                  onClick={() => onSelectProduct(relProduct)}
                >
                  <img
                    src={getProductImage(relProduct)}
                    onError={(e) => {
                      e.currentTarget.src = getProductFallbackImage(relProduct);
                    }}
                    alt={relProduct.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md text-[#22c55e] font-bold text-xs px-2.5 py-1 rounded-full border border-white/10">
                    {relProduct.price}
                  </span>
                </div>

                <div className="p-5 space-y-4 flex flex-col justify-between flex-1">
                  <h4 className="font-bold text-sm text-[#0f172a] line-clamp-2 leading-snug">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(relProduct)}
                      className="text-right hover:text-[#004d5a] transition-colors cursor-pointer"
                    >
                      {relProduct.title}
                    </button>
                  </h4>

                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(relProduct)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#f1f5f9] hover:bg-[#e2e8f0] text-xs font-bold text-[#334155] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>عرض التفاصيل</span>
                      <span>👁️</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onAddToCart(relProduct)}
                      className="py-2 px-3 rounded-xl bg-[#004d5a] hover:bg-[#00363f] text-xs font-bold text-white transition-colors cursor-pointer"
                    >
                      شراء
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 9. STICKY FLOATING BUY BAR (#tashilStickyBar) */}
      <div
        id="tashilStickyBar"
        className={`tashil-floating-bar fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[760px] transition-all duration-300 ${
          stickyVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        dir="rtl"
      >
        <div className="tashil-floating-container bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl rounded-full p-2 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={scrollToGallery}
            className="tashil-pill-tab bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>معاينة القالب</span>
            <span>👁️</span>
          </button>

          <div className="tashil-floating-action flex items-center gap-3">
            <div className="tashil-price-tag text-left hidden sm:flex flex-col leading-none">
              <span className="text-[10px] text-slate-500">ابتداءً من</span>
              <span className="text-sm font-extrabold text-slate-900 font-en">{product.price}</span>
            </div>

            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tashil-pill-buy-btn bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all flex items-center gap-2"
            >
              <span>شراء الآن</span>
              <span className="sm:hidden font-en bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                {product.price}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
