import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { PageId, ProductItem } from '../data/siteData';
import { useProducts } from '../context/ProductContext';
import { useAdminAuth } from '../context/AdminAuthContext';
import { BreadcrumbPill } from '../components/LayoutChrome';
import { getProductFallbackImage, getProductImage } from '../components/VisualAssets';

interface StorePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem) => void;
}

export const StorePage: React.FC<StorePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  const { products } = useProducts();
  const { isAdminLoggedIn } = useAdminAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [heroSlide, setHeroSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides: Array<{ product: ProductItem; badge: string }> =
    products.length >= 3
      ? [
          { product: products[0], badge: 'جديد' },
          { product: products[1], badge: 'حصري' },
          { product: products[2], badge: 'الأكثر مبيعاً' },
        ]
      : products.map((p, idx) => ({
          product: p,
          badge: idx === 0 ? 'جديد' : 'مميز',
        }));

  useEffect(() => {
    if (isPaused || heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev >= heroSlides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, heroSlides.length]);

  const activeSlide = heroSlides[heroSlide] || heroSlides[0];

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-12" dir="rtl">
      {/* Top Breadcrumb (.tm-breadcrumbs-wrapper) */}
      <BreadcrumbPill currentLabel="المتجر" onGoHome={() => onNavigate('home')} />

      <div className="tashil-store-container">
        {/* 1. STORE HERO SWIPER (.tashil-hero-swiper) */}
        <div
          className="swiper tashil-hero-swiper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="swiper-wrapper w-full h-full">
            <div className="swiper-slide w-full h-full">
              <div className="tashil-hero-card">
                <img
                  className="tashil-hero-bg"
                  src={getProductImage(activeSlide.product)}
                  onError={(e) => {
                    e.currentTarget.src = getProductFallbackImage(activeSlide.product);
                  }}
                  alt={activeSlide.product.title}
                />
                <div className="tashil-hero-overlay" />
                <div className="tashil-hero-content">
                  <span className="tashil-hero-badge">{activeSlide.badge}</span>
                  <h2 className="tashil-hero-title">{activeSlide.product.title}</h2>
                  <div className="tashil-hero-actions">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(activeSlide.product)}
                      className="tashil-hero-btn"
                    >
                      احصل عليه الآن
                    </button>
                    <span className="tashil-hero-price">{activeSlide.product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev & Next Buttons */}
          <button
            type="button"
            onClick={() =>
              setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
            }
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/55 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer border-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() =>
              setHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
            }
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/55 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer border-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Bullets */}
          <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 z-20">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setHeroSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer border-0 ${
                  heroSlide === idx ? 'w-6 bg-white opacity-100' : 'w-2 bg-white opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Admin Bar & Store Counter */}
        <div className="flex items-center justify-between gap-3 mt-6 mb-2 px-1">
          <div className="text-xs text-[#64748b] font-medium">
            إجمالي المنتجات المتاحة:{' '}
            <span className="font-bold text-[#0B96B8] tabular-nums">{products.length}</span> منتجات
          </div>
          {isAdminLoggedIn && (
            <button
              type="button"
              onClick={() => {
                onNavigate('admin');
                window.location.hash = 'admin';
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-[#0B96B8] transition-colors cursor-pointer shadow-sm"
            >
              <Settings className="w-3.5 h-3.5 text-amber-400" />
              <span>لوحة إضافة وإدارة المنتجات</span>
            </button>
          )}
        </div>

        {/* 2. BIG CENTERED SEARCH BAR (.tashil-search-section) */}
        <div className="tashil-search-section">
          <div className="tashil-search-wrapper">
            <input
              type="text"
              id="tashil-store-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن المشاريع، القوالب، الملحقات..."
              autoComplete="off"
            />
            <svg className="tashil-search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>

        {/* 3. PRODUCT GRID (.tashil-store-grid #tashil-products-wrapper) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-14 site-card-muted">
            <p className="text-sm font-bold text-[#0f172a] mb-3">
              لا توجد نتائج مطابقة لبحثك "{searchQuery}"
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="tashil-card-btn"
            >
              عرض جميع المنتجات
            </button>
          </div>
        ) : (
          <div className="tashil-store-grid" id="tashil-products-wrapper">
            {filteredProducts.map((product) => (
              <div key={product.id} className="tashil-card">
                <div
                  className="tashil-card-img-wrapper"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    className="tashil-card-img"
                    src={getProductImage(product)}
                    onError={(e) => {
                      e.currentTarget.src = getProductFallbackImage(product);
                    }}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
                <div className="tashil-card-body">
                  <h3 className="tashil-card-title">
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
                  <div className="tashil-card-footer">
                    <div className="flex items-baseline gap-1.5">
                      <span className="tashil-card-price">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#94a3b8] line-through tabular-nums">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="tashil-card-btn"
                    >
                      شراء الآن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

