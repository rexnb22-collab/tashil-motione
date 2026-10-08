import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Flame,
  CheckCircle,
  Upload,
  Download,
  RotateCcw,
  Search,
  Eye,
  Tag,
  Package,
  Layers,
  X,
  Sparkles,
} from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useAdminAuth } from '../context/AdminAuthContext';
import { PageId, ProductItem } from '../data/siteData';
import { BreadcrumbPill } from '../components/LayoutChrome';
import { getProductFallbackImage, getProductImage } from '../components/VisualAssets';

interface AdminPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductItem) => void;
}

const CATEGORY_PRESETS = [
  'Mogrt (Motion Graphics)',
  'After Effects Scripts (SaaS)',
  'حزم موشن جرافيك متكاملة',
  'قوالب ومؤثرات فيديو',
  'ملحقات وتأثيرات Photoshop',
  'قوالب رمضانية وإسلامية',
];

const SOFTWARE_PRESETS = [
  'Adobe Premiere Pro CC 2021+',
  'Adobe CC 2026',
  'Adobe After Effects 2022+',
  'Adobe Photoshop CC',
  'Apple Final Cut Pro / DaVinci Resolve',
];

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate, onSelectProduct }) => {
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleFeatured,
    resetToDefault,
    exportJson,
    importJson,
  } = useProducts();

  const { isAdminLoggedIn, logout } = useAdminAuth();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState<{
    title: string;
    price: string;
    originalPrice: string;
    category: string;
    imageUrl: string;
    checkoutUrl: string;
    supportedSoftware: string;
    compatibility: string;
    description: string;
    featured: boolean;
    tags: string;
    features: string[];
  }>({
    title: '',
    price: '€29.99',
    originalPrice: '€49.99',
    category: 'Mogrt (Motion Graphics)',
    imageUrl: '',
    checkoutUrl: 'https://shop.tashilmotion.com/',
    supportedSoftware: 'Adobe Premiere Pro CC 2021+',
    compatibility: 'Adobe CC 2021+',
    description: 'قالب موشن جرافيك احترافي مُبتكر لتوفير الوقت وسرعة الإنتاج.',
    featured: true,
    tags: 'Mogrt, Premiere Pro, Motion Graphics',
    features: [
      'تحكم كامل بالنصوص والألوان والسرعة',
      'دقة 4K فائقة ووضوح عالي الجودة',
      'سحب وإفلات مباشر بدون الحاجة لخبرة سابقة',
    ],
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      title: '',
      price: '€29.99',
      originalPrice: '€49.99',
      category: 'Mogrt (Motion Graphics)',
      imageUrl: '',
      checkoutUrl: 'https://shop.tashilmotion.com/',
      supportedSoftware: 'Adobe Premiere Pro CC 2021+',
      compatibility: 'Adobe CC 2021+',
      description: 'قالب موشن جرافيك احترافي مُبتكر لتوفير الوقت وسرعة الإنتاج.',
      featured: true,
      tags: 'Mogrt, Premiere Pro, Motion Graphics',
      features: [
        'تحكم كامل بالنصوص والألوان والسرعة',
        'دقة 4K فائقة ووضوح عالي الجودة',
        'سحب وإفلات مباشر بدون الحاجة لخبرة سابقة',
      ],
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product: ProductItem) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice || '',
      category: product.category,
      imageUrl: product.imageUrl || '',
      checkoutUrl: product.checkoutUrl,
      supportedSoftware: product.supportedSoftware,
      compatibility: product.compatibility,
      description: product.description,
      featured: !!product.featured,
      tags: product.tags ? product.tags.join(', ') : '',
      features: product.features
        ? product.features.map((f) => (typeof f === 'string' ? f : f.title || f.text || ''))
        : ['ميزة احترافية سريعة'],
    });
    setIsModalOpen(true);
  };

  const handleFillQuickExample = () => {
    setFormData({
      title: 'قالب أثير الانتقالات الزجاجية الحديثة ✨ Glass Transitions Pack',
      price: '€24.99',
      originalPrice: '€39.99',
      category: 'Mogrt (Motion Graphics)',
      imageUrl: '/wp-content/uploads/2026/08/377225f7-7774-453c-ba37-2768dd7b2920.jpg',
      checkoutUrl: 'https://shop.tashilmotion.com/checkout/buy/0a431a76-eea7-4dff-be35-a780611ba4af',
      supportedSoftware: 'Adobe CC 2026 / Premiere Pro',
      compatibility: 'CC 2021+',
      description:
        'حزمة مؤثرات وانتقالات زجاجية حديثة مستوحاة من تصاميم Apple الفاخرة، تدعم الدقة الفائقة 4K والتحكم الكامل باللغتين العربية والإنجليزية.',
      featured: true,
      tags: 'Glassmorphism, Transitions, 4K Ultra, Premiere Pro, MOGRT',
      features: [
        'دعم دقة 4K الأصلية بنقاء فائق 3840x2160',
        'أكثر من 30 انتقال زجاجي بانكسار ضوئي ديناميكي',
        'يعمل بنقرة زر واحدة عبر السحب والإفلات المباشر',
        'شروحات فيديو تفصيلية وتحديثات مستمرة',
      ],
    });
    showToast('تمت تعبئة النموذج ببيانات تجريبية جاهزة!');
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
        showToast('تم رفع الصورة ومعاينتها بنجاح!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('يرجى كتابة اسم المنتج');
      return;
    }

    const tagList = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const featureObjects = formData.features
      .filter((f) => f.trim().length > 0)
      .map((f) => ({ title: f, text: f }));

    if (editingProduct) {
      updateProduct(editingProduct.id, {
        title: formData.title,
        price: formData.price,
        originalPrice: formData.originalPrice || undefined,
        category: formData.category,
        breadcrumbCategory: formData.category,
        imageUrl: formData.imageUrl || undefined,
        checkoutUrl: formData.checkoutUrl,
        supportedSoftware: formData.supportedSoftware,
        compatibility: formData.compatibility,
        description: formData.description,
        featured: formData.featured,
        featuredBadge: formData.featured,
        isFeaturedFilter: formData.featured,
        tags: tagList,
        features: featureObjects,
      });
      showToast(`تم تحديث المنتج "${formData.title}" بنجاح!`);
    } else {
      const created = addProduct({
        title: formData.title,
        price: formData.price,
        originalPrice: formData.originalPrice || undefined,
        category: formData.category,
        breadcrumbCategory: formData.category,
        imageUrl: formData.imageUrl || undefined,
        checkoutUrl: formData.checkoutUrl,
        supportedSoftware: formData.supportedSoftware,
        compatibility: formData.compatibility,
        description: formData.description,
        featured: formData.featured,
        featuredBadge: formData.featured,
        isFeaturedFilter: formData.featured,
        tags: tagList,
        features: featureObjects,
      });
      showToast(`تمت إضافة المنتج "${created.title}" إلى المتجر بنجاح! 🚀`);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`هل أنت متأكد من حذف المنتج "${title}"؟`)) {
      deleteProduct(id);
      showToast(`تم حذف المنتج "${title}"`);
    }
  };

  const handleExport = () => {
    const json = exportJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tashil-products-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('تم تحميل ملف النسخة الاحتياطية (JSON) بنجاح!');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const success = importJson(reader.result);
        if (success) {
          showToast('تم استيراد قائمة المنتجات بنجاح!');
        } else {
          alert('فشل استيراد الملف، تأكد من صحة تنسيق الـ JSON.');
        }
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (
      confirm(
        'هل تود استعادة المنتجات الافتراضية للموقع؟ سيتم مسح المنتجات المخصصة الإضافية التي لم يتم حفظها.'
      )
    ) {
      resetToDefault();
      showToast('تمت استعادة المنتجات الأصلية بنجاح!');
    }
  };

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())));
    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCount = products.filter((p) => p.featured).length;
  const categoriesList = Array.from(new Set(products.map((p) => p.category)));

  // ── Protection Gate (Only accessible when authenticated) ────────
  React.useEffect(() => {
    if (!isAdminLoggedIn) {
      onNavigate('home');
    }
  }, [isAdminLoggedIn, onNavigate]);

  if (!isAdminLoggedIn) {
    return null;
  }

  return (
    <div id="admin-panel" className="page overflow-x-clip pb-24" dir="rtl">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#161F25] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-slate-700 text-sm font-medium"
          >
            <CheckCircle className="w-5 h-5 text-[#0B96B8]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Breadcrumb */}
      <BreadcrumbPill currentLabel="لوحة التحكم بالمنتجات" onGoHome={() => onNavigate('home')} />

      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-4">
        {/* Dashboard Header Bar */}
        <div className="bg-white rounded-[24px] border border-[#EDF2F5] p-6 sm:p-8 shadow-sm mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f7fa] text-[#0B96B8] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>نظام إدارة منتجات تسهيل موشن</span>
            </div>
            <h1 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl text-[#161F25]">
              لوحة التحكم وإضافة المنتجات 📦
            </h1>
            <p className="text-[#4B5B66] text-sm sm:text-base mt-1.5 leading-[1.6]">
              تحكم بجميع قوالب وسكريبتات المتجر، أضف منتجات جديدة، وحدد روابط الدفع والأسعار لتظهر فوراً لعملائك.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            <button
              type="button"
              onClick={openAddModal}
              className="bg-[#0B96B8] hover:bg-[#086f88] text-white font-bold px-5 py-3 rounded-xl shadow-sm transition-all flex items-center gap-2 text-sm cursor-pointer hover:shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة منتج جديد</span>
            </button>

            <button
              type="button"
              onClick={handleExport}
              title="تصدير نسخة احتياطية من المنتجات"
              className="bg-[#F7F9FA] hover:bg-slate-100 text-[#4B5B66] hover:text-[#161F25] font-semibold px-4 py-3 rounded-xl border border-[#EDF2F5] transition-colors flex items-center gap-2 text-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">تصدير (JSON)</span>
            </button>

            <label
              title="استيراد منتجات من ملف JSON"
              className="bg-[#F7F9FA] hover:bg-slate-100 text-[#4B5B66] hover:text-[#161F25] font-semibold px-4 py-3 rounded-xl border border-[#EDF2F5] transition-colors flex items-center gap-2 text-sm cursor-pointer"
            >
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">استيراد</span>
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>

            <button
              type="button"
              onClick={handleReset}
              title="استعادة المنتجات الافتراضية"
              className="bg-[#F7F9FA] hover:bg-red-50 text-slate-500 hover:text-red-600 font-semibold p-3 rounded-xl border border-[#EDF2F5] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                logout();
                onNavigate('home');
              }}
              title="تسجيل الخروج من لوحة التحكم"
              className="bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-700 font-semibold px-4 py-3 rounded-xl border border-red-100 transition-colors flex items-center gap-2 text-sm cursor-pointer"
            >
              <span>خروج ↩</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-[#EDF2F5] p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e8f7fa] text-[#0B96B8] flex items-center justify-center font-bold">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#161F25]">{products.length}</div>
              <div className="text-xs text-[#64748b] font-medium">إجمالي المنتجات في المتجر</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#EDF2F5] p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center font-bold">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#161F25]">{featuredCount}</div>
              <div className="text-xs text-[#64748b] font-medium">منتجات مميزة (الأكثر تميزاً)</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#EDF2F5] p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#161F25]">{categoriesList.length}</div>
              <div className="text-xs text-[#64748b] font-medium">تصنيفات متوفرة</div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-[#EDF2F5] p-4 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث بالاسم، التصنيف، أو الوسوم..."
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-[#EDF2F5] text-sm focus:outline-none focus:border-[#0B96B8] bg-[#F7F9FA]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-[#EDF2F5] text-xs sm:text-sm font-semibold bg-[#F7F9FA] text-[#334155] focus:outline-none focus:border-[#0B96B8] cursor-pointer"
            >
              <option value="all">جميع التصنيفات ({products.length})</option>
              {categoriesList.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => onNavigate('store')}
              className="px-4 py-2.5 rounded-xl bg-[#F7F9FA] hover:bg-slate-100 text-[#4B5B66] hover:text-[#161F25] text-xs sm:text-sm font-semibold border border-[#EDF2F5] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>مشاهدة المتجر كما يراه الزائر</span>
            </button>
          </div>
        </div>

        {/* Product List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const imgSrc = getProductImage(product);
            const fallbackSrc = getProductFallbackImage(product);

            return (
              <div
                key={product.id}
                className="bg-white rounded-[22px] border border-[#EDF2F5] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-4 group">
                    <img
                      src={imgSrc}
                      onError={(e) => {
                        e.currentTarget.src = fallbackSrc;
                      }}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Featured badge */}
                    {product.featured && (
                      <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        <span>مميز</span>
                      </span>
                    )}

                    <span className="absolute bottom-2.5 right-2.5 bg-[#161F25]/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] line-clamp-2 leading-[1.4] mb-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#0B96B8] font-bold text-lg">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-slate-400 line-through text-xs">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#64748b] line-clamp-2 leading-[1.6] mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-3 border-t border-[#EDF2F5] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        onSelectProduct(product);
                      }}
                      title="معاينة صفحة المنتج"
                      className="p-2 rounded-lg bg-[#F7F9FA] hover:bg-cyan-50 text-[#4B5B66] hover:text-[#0B96B8] transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleFeatured(product.id)}
                      title={product.featured ? 'إلغاء التمييز' : 'تمييز المنتج بالصفحة الرئيسية'}
                      className={`p-2 rounded-lg transition-colors cursor-pointer ${
                        product.featured
                          ? 'bg-amber-50 text-amber-500 hover:bg-amber-100'
                          : 'bg-[#F7F9FA] text-slate-400 hover:text-amber-500'
                      }`}
                    >
                      <Flame className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => openEditModal(product)}
                      title="تعديل تفاصيل المنتج"
                      className="p-2 rounded-lg bg-[#F7F9FA] hover:bg-blue-50 text-[#4B5B66] hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(product.id, product.title)}
                    title="حذف المنتج"
                    className="p-2 rounded-lg bg-[#F7F9FA] hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-2xl border border-[#EDF2F5] p-12 text-center text-[#64748b]">
            <Package className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p className="font-semibold text-base">لم يتم العثور على أي منتج يطابق البحث</p>
            <button
              type="button"
              onClick={openAddModal}
              className="mt-4 bg-[#0B96B8] text-white px-5 py-2.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة منتج جديد الآن</span>
            </button>
          </div>
        )}
      </div>

      {/* Add / Edit Product Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[28px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-right my-8 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25]">
                    {editingProduct ? 'تعديل بيانات المنتج ✏️' : 'إضافة منتج جديد إلى المتجر 🚀'}
                  </h2>
                  <p className="text-xs text-[#64748b] mt-1">
                    أدخل تفاصيل القالب ورابط الشراء ليتم عرضه فوراً للزوار
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Fill Button */}
              {!editingProduct && (
                <div className="mb-6 p-3.5 rounded-2xl bg-[#e8f7fa] border border-[#d2f0f5] flex items-center justify-between">
                  <div className="text-xs text-[#0B96B8] font-semibold">
                    💡 هل تريد اختبار إضافة منتج بضغطة زر واحدة؟
                  </div>
                  <button
                    type="button"
                    onClick={handleFillQuickExample}
                    className="bg-[#0B96B8] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold hover:bg-[#086f88] transition-colors cursor-pointer"
                  >
                    ⚡ تعبئة سريعة بمثال تجريبي
                  </button>
                </div>
              )}

              <form onSubmit={handleSaveProduct} className="space-y-5">
                {/* Product Title */}
                <div>
                  <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                    عنوان المنتج أو القالب *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="مثال: حزمة قوالب أثير للزجاجيات 4K — Premiere Pro"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                  />
                </div>

                {/* Price & Original Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                      السعر الحالي *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="مثال: €29.99 أو $29.99"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                      السعر قبل الخصم (اختياري)
                    </label>
                    <input
                      type="text"
                      value={formData.originalPrice}
                      onChange={(e) =>
                        setFormData({ ...formData, originalPrice: e.target.value })
                      }
                      placeholder="مثال: €49.99"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                    />
                  </div>
                </div>

                {/* Category & Software */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                      التصنيف *
                    </label>
                    <input
                      list="categories-list"
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="اختر أو اكتب تصنيفاً"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                    />
                    <datalist id="categories-list">
                      {CATEGORY_PRESETS.map((cat) => (
                        <option key={cat} value={cat} />
                      ))}
                    </datalist>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                      البرنامج المدعوم
                    </label>
                    <input
                      list="software-list"
                      type="text"
                      value={formData.supportedSoftware}
                      onChange={(e) =>
                        setFormData({ ...formData, supportedSoftware: e.target.value })
                      }
                      placeholder="مثال: Adobe CC 2026 / Premiere Pro"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                    />
                    <datalist id="software-list">
                      {SOFTWARE_PRESETS.map((sw) => (
                        <option key={sw} value={sw} />
                      ))}
                    </datalist>
                  </div>
                </div>

                {/* Image Section */}
                <div>
                  <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                    صورة المنتج (رابط مباشر أو رفع من الجهاز)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <input
                      type="text"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      placeholder="الصق رابط صورة مباشر أو ارفع ملف من جهازك..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                    />
                    <label className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#161F25] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0 transition-colors">
                      <Upload className="w-3.5 h-3.5" />
                      <span>رفع صورة</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Image Preview */}
                  {formData.imageUrl && (
                    <div className="mt-3 relative w-32 aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                      <img
                        src={formData.imageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Checkout Link */}
                <div>
                  <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                    رابط الشراء المباشر (Lemon Squeezy أو رابط خارجي) *
                  </label>
                  <div className="relative">
                    <ExternalLink className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="url"
                      required
                      value={formData.checkoutUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, checkoutUrl: e.target.value })
                      }
                      placeholder="https://shop.tashilmotion.com/checkout/buy/..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8] ltr text-left"
                    />
                  </div>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                    الوصف المختصر للمنتج
                  </label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="نبذة سريعة تظهر في بطاقة المنتج وفي المتجر..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-xs font-bold text-[#161F25] mb-1.5">
                    وسوم البحث (مفصولة بفاصلة)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="Mogrt, Premiere Pro, Glassmorphism, 4K"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0B96B8]"
                  />
                </div>

                {/* Featured toggle */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <input
                    type="checkbox"
                    id="featured-toggle"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 accent-[#0B96B8] rounded cursor-pointer"
                  />
                  <label
                    htmlFor="featured-toggle"
                    className="text-xs font-bold text-[#161F25] cursor-pointer flex items-center gap-1.5"
                  >
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>عرض كمنتج مميز في الصفحة الرئيسية وعلامات التبويب</span>
                  </label>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0B96B8] hover:bg-[#086f88] text-white px-7 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all cursor-pointer hover:shadow-md"
                  >
                    {editingProduct ? 'حفظ التعديلات' : 'نشر المنتج في المتجر الآن 🚀'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
