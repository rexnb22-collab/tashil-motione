import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, Trash2, X } from 'lucide-react';
import { BLOG_POSTS, BlogPost, ProductItem } from '../data/siteData';
import { ASSETS, BlogCardVisual, OFFICIAL_ASSETS, ProductCardVisual } from './VisualAssets';

/**
 * Product Detail / Preview Modal
 */
export const ProductModal: React.FC<{
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
}> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <ProductCardVisual type={product.visualType} featuredBadge={product.featuredBadge} />

        <div className="mt-5 text-right space-y-2.5">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-en">
            <span>{product.compatibility}</span>
            <span>{product.category}</span>
          </div>

          <h3 className="font-en font-extrabold text-base sm:text-lg text-slate-900" dir="ltr">
            {product.title}
          </h3>

          <p className="text-slate-600 text-xs leading-relaxed">{product.description}</p>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="bg-[#007A8C] hover:bg-[#006373] text-white font-bold text-xs px-6 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              إضافة إلى السلة والشراء الآن
            </button>

            <span className="font-en font-black text-lg text-slate-900 tabular-nums">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Blog Article Reader Modal — Full Official WordPress Post View (postid-313 / 310 / 34)
 */
export const BlogReaderModal: React.FC<{
  post: BlogPost | null;
  onClose: () => void;
}> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id={`post-${post.postId}`}
        className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-100 relative my-8"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 left-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Breadcrumb (.tm-breadcrumbs-wrapper) */}
        <nav className="tm-breadcrumbs-wrapper !my-2 !px-0" aria-label="Breadcrumb" dir="rtl">
          <div className="tm-breadcrumbs-container">
            <button
              type="button"
              onClick={onClose}
              className="tm-bc-item cursor-pointer bg-transparent border-0"
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
            </button>
            <span className="tm-bc-sep">/</span>
            <button
              type="button"
              onClick={onClose}
              className="tm-bc-item cursor-pointer bg-transparent border-0"
            >
              <span>المدونة</span>
            </button>
            <span className="tm-bc-sep">/</span>
            <span className="tm-bc-item active">{post.title}</span>
          </div>
        </nav>

        {/* Article Header (.M_EL10) */}
        <div className="max-w-[800px] mx-auto text-center space-y-4 mt-6 mb-8">
          <span className="inline-block bg-[#e6f4f6] text-[#0B96B8] font-semibold text-xs px-4 py-1.5 rounded-full">
            {post.category}
          </span>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-[#161F25] leading-[1.2] text-center">
            {post.title}
          </h1>

          {/* Author & Date (.M_EL18) */}
          <div className="flex items-center justify-center gap-3 pt-2" dir="ltr">
            <img
              src={OFFICIAL_ASSETS.authorAdminAvatar}
              onError={(e) => {
                e.currentTarget.src = ASSETS.teamDevImg;
              }}
              alt={post.author}
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold text-[15px] text-[#2E3D47]">{post.author}</div>
              <div className="text-[13px] text-[#4B5B66]">{post.date}</div>
            </div>
          </div>
        </div>

        {/* Cover Image (.M_EL31) */}
        <div className="mb-8">
          <BlogCardVisual type={post.visualType} />
        </div>

        {/* Article Content (.entry-content) */}
        <div className="max-w-[800px] mx-auto space-y-5 text-right text-[#4B5B66] text-[17px] leading-[1.75]">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-right">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Article Section (.M_EL33) */}
        <div className="max-w-[800px] mx-auto mt-10 pt-8 border-t border-[#EDF2F5] flex flex-col items-center space-y-3">
          <div className="text-[13px] font-semibold uppercase tracking-widest text-[#1D272E]">
            Share this article
          </div>
          <div className="flex items-center gap-5 text-[#677885]">
            <span className="hover:text-[#0B96B8] cursor-pointer">Facebook</span>
            <span>•</span>
            <span className="hover:text-[#0B96B8] cursor-pointer">X</span>
            <span>•</span>
            <span className="hover:text-[#0B96B8] cursor-pointer">LinkedIn</span>
          </div>
        </div>

        {/* "قد يعجبك أيضاً" (.M_EL44) */}
        <div className="max-w-[800px] mx-auto mt-10 pt-8 border-t border-[#EDF2F5] space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-bold text-xl sm:text-2xl text-[#161F25]">قد يعجبك أيضاً</h3>
            <p className="text-sm text-[#4B5B66]">
              استكشف المزيد من المقالات، الشروحات، والمصادر الاحترافية التي تساعدك على الإلمام
              بأحدث الممارسات.
            </p>
          </div>
          <div className="space-y-4">
            {BLOG_POSTS.filter((p) => p.id !== post.id).map((related) => (
              <div
                key={related.id}
                className="p-4 rounded-[16px] bg-[#F7F9FA] border border-[#EDF2F5] text-right space-y-1.5"
              >
                <div className="text-xs text-[#4B5B66]">
                  {related.author} • {related.date}
                </div>
                <div className="font-bold text-base text-[#161F25]">{related.title}</div>
                <p className="text-sm text-[#4B5B66] line-clamp-2">{related.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#161F25] hover:bg-[#2E3D47] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
            >
              إغلاق المقال
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Shopping Cart & Instant Digital Checkout Modal
 */
export const CartModal: React.FC<{
  isOpen: boolean;
  items: ProductItem[];
  onClose: () => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}> = ({ isOpen, items, onClose, onRemoveItem, onClearCart }) => {
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => {
    const num = parseFloat(item.price.replace('€', ''));
    return acc + (isNaN(num) ? 0 : num);
  }, 0);

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      onClearCart();
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={() => {
        setCheckedOut(false);
        onClose();
      }}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#007A8C]" />
            <h3 className="font-display font-black text-base text-slate-900">سلة المشتريات</h3>
          </div>
          <button
            type="button"
            onClick={() => {
              setCheckedOut(false);
              onClose();
            }}
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {checkedOut ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h4 className="font-display font-black text-lg text-slate-900">
              تم تأكيد طلبك بنجاح!
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              تم إرسال روابط التحميل المباشرة ومفتاح الترخيص إلى بريدك الإلكتروني عبر Lemon Squeezy.
            </p>
            <button
              type="button"
              onClick={() => {
                setCheckedOut(false);
                onClose();
              }}
              className="mt-2 bg-[#007A8C] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
            >
              العودة للموقع
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="py-10 text-center space-y-2">
            <p className="text-xs font-bold text-slate-600">سلة المشتريات فارغة حالياً</p>
            <p className="text-[11px] text-slate-400">
              اختر أي قالب أو أداة من المتجر لإضافتها هنا.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="max-h-60 overflow-y-auto space-y-2.5 pr-1">
              {items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex items-center justify-between gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200/60"
                >
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                    title="حذف"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex-1 text-right">
                    <div className="font-en font-bold text-xs text-slate-900 line-clamp-1" dir="ltr">
                      {item.title}
                    </div>
                    <div className="font-en font-extrabold text-xs text-[#007A8C] mt-0.5 tabular-nums">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <span className="font-en font-black text-base text-slate-900 tabular-nums">
                €{total.toFixed(2)}
              </span>
              <span className="text-xs font-bold text-slate-600">الإجمالي</span>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="w-full bg-[#007A8C] hover:bg-[#006373] text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              إتمام الشراء والتحميل الفوري
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Policy / Terms Modal (includes Official Terms & Conditions page-id-94)
 */
export const PolicyModal: React.FC<{
  title: string | null;
  onClose: () => void;
}> = ({ title, onClose }) => {
  if (!title) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="page-94"
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-right space-y-5 my-8"
        onClick={(e) => e.stopPropagation()}
        dir="rtl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="font-bold text-xl sm:text-2xl text-[#161F25]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Official Last Updated Badge (.tm-last-updated-badge) */}
        <div className="tm-last-updated-badge" dir="rtl" lang="ar">
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>
            آخر تحديث:{' '}
            <strong>
              <bdi>27 يوليو 2026</bdi>
            </strong>
          </span>
        </div>

        <div className="space-y-5 text-[#4B5B66] text-[15px] leading-[1.75] max-h-[70vh] overflow-y-auto pr-1 pl-2">
          {title.includes('استرجاع') || title.includes('شراء') ? (
            <div className="space-y-5">
              <div>
                <h3 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-lg text-[#161F25] mb-2">
                  سياسة الشراء واستراد الأموال (Refund Policy)
                </h3>
                <p>
                  في <strong className="text-[#161F25]">تسهيل موشن (Tashilmotion)</strong>، نلتزم بتوفير
                  أعلى جودة لمنتجاتنا الرقمية من سكريبتات After Effects وقوالب MOGRT وملحقات الموشن
                  جرافيك. ونظراً للطبيعة الرقمية لمنتجاتنا (قابلة للتحميل الفوري)، يرجى قراءة السياسة
                  التالية بعناية.
                </p>
              </div>

              <div>
                <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] mb-2">
                  :آلية الشراء والتسليم الرقمي
                </h4>
                <ul className="list-disc pr-5 space-y-1.5 text-[14.5px]">
                  <li>
                    <strong className="text-[#161F25]">الدفع الآمن:</strong> تتم جميع عمليات الشراء
                    والدفع بشكل آمن بالكامل عبر بوابة{' '}
                    <strong className="text-[#161F25]">Lemon Squeezy</strong> العالمية.
                  </li>
                  <li>
                    بمجرد تأكيد عملية الدفع، يتم توجيهك تلقائياً لصفحة التحميل المباشر، وتصلك نسخة من
                    روابط التحميل والفاتورة على بريدك الإلكتروني.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] mb-2">
                  :شروط وحالات استرداد الأموال
                </h4>
                <p className="mb-2">
                  نقدم ضمان استرداد الأموال خلال{' '}
                  <strong className="text-[#161F25]">14 يوماً</strong> من تاريخ الشراء في الحالات التالية
                  فقط:
                </p>
                <ol className="list-decimal pr-5 space-y-1.5 text-[14.5px]">
                  <li>
                    <strong className="text-[#161F25]">وجود عيب تقني مثبت:</strong> إذا كان الملف أو
                    السكريبت تالفاً أو يحتوي على خطأ برمجي يمنعه من العمل، ولم يفلح فريق الدعم الفني
                    لدينا في إصلاحه خلال 48 ساعة من الإبلاغ.
                  </li>
                  <li>
                    <strong className="text-[#161F25]">الشراء المزدوج عن طريق الخطأ:</strong> إذا قمت
                    بشراء نفس المنتج مرتين بالخطأ في نفس الوقت.
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] mb-2">
                  :الحالات التي لا يتم فيها الاسترداد
                </h4>
                <p className="mb-2">لا يحق للمشتري طلب استرداد الأموال في الحالات التالية:</p>
                <ul className="list-disc pr-5 space-y-1.5 text-[14.5px]">
                  <li>
                    عدم توافق المنتج مع جهازك أو برنامجك بسبب عدم مراجعة{' '}
                    <strong className="text-[#161F25]">متطلبات التشغيل</strong> الموضحة في صفحة المنتج قبل
                    الشراء.
                  </li>
                  <li>تغيير رأيك بعد تحميل الملفات واستخدامها.</li>
                  <li>شراء المنتج عن طريق الخطأ دون التواصل مع الدعم للحل.</li>
                </ul>
              </div>

              <div className="p-4 rounded-[16px] bg-[#F7F9FA] border border-[#EDF2F5]">
                <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] mb-2">
                  :كيف تطلب استرداد الأموال؟
                </h4>
                <p className="mb-2 text-[14.5px]">
                  إذا كنت تستوفي الشروط أعلاه، يمكنك التواصل مع فريق الدعم عبر البريد:{' '}
                  <code className="bg-[#e8f7fa] text-[#0B96B8] font-bold px-2 py-0.5 rounded text-xs font-mono">
                    support@tashilmotion.com
                  </code>{' '}
                  مع إرفاق:
                </p>
                <ol className="list-decimal pr-5 space-y-1 text-[14px]">
                  <li>رقم الطلب (Order ID) الخاص بـ Lemon Squeezy &amp; gumroad.com</li>
                  <li>البريد الإلكتروني المستخدم في الشراء.</li>
                  <li>شرح مفصل للمشكلة مع إرفاق صور أو فيديو توضيحي للخلل التقني.</li>
                </ol>
              </div>
            </div>
          ) : title.includes('خصوصية') ? (
            <div className="space-y-5">
              <div>
                <h3 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-lg text-[#161F25] mb-2">
                  : سياسة الخصوصية وحماية البيانات (Privacy Policy)
                </h3>
                <p>
                  نولي في <strong className="text-[#161F25]">Tashilmotion</strong> أهمية قصوى لحماية خصوصيتك
                  وبياناتك الشخصية. توضح هذه السياسة كيف نجمع ونستخدم ونحمي المعلومات عند زيارتك
                  لموقعنا أو الشراء من متجرنا.
                </p>
              </div>

              <div>
                <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] mb-2">
                  : البيانات التي نجمعها
                </h4>
                <ul className="list-disc pr-5 space-y-1.5 text-[14.5px]">
                  <li>
                    <strong className="text-[#161F25]">معلومات الحساب والشراء:</strong> الاسم، البريد
                    الإلكتروني، ومعلومات الفوترة التي تُجمع عند شراء منتجاتنا عبر بوابة Lemon Squeezy
                    (ملاحظة: نحن لا نخزن بيانات بطاقتك الائتمانية مطلقاً).
                  </li>
                  <li>
                    <strong className="text-[#161F25]">البيانات التقنية:</strong> عنوان الـ IP، نوع
                    المتصفح، ونظام التشغيل لتحسين أداء الموقع وتجربة المستخدم.
                  </li>
                  <li>
                    <strong className="text-[#161F25]">بيانات النشرة البريدية:</strong> البريد الإلكتروني
                    الذي تزوّدنا به طواعية لتلقي التحديثات والدروس والمنتجات المجانية.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] mb-2">
                  : كيف نستخدم بياناتك؟
                </h4>
                <ul className="list-disc pr-5 space-y-1.5 text-[14.5px]">
                  <li>معالجة طلبات الشراء وتسليم الملفات الرقمية والسندات المالية.</li>
                  <li>تقديم الدعم الفني والإجابة على استفساراتك.</li>
                  <li>
                    إرسال تحديثات المنتجات وإشعارات الأمان والرسائل الترويجية (يمكنك إلغاء الاشتراك في
                    أي وقت).
                  </li>
                  <li>تحسين أداء الموقع وسرعة التصفح وتجربة المستخدم عبر التحليلات.</li>
                </ul>
              </div>

              <div className="p-4 rounded-[16px] bg-[#F7F9FA] border border-[#EDF2F5]">
                <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25] mb-2">
                  : مشاركة البيانات وحمايتها
                </h4>
                <ul className="space-y-1.5 text-[14px]">
                  <li>
                    <strong className="text-[#161F25]">• عدم البيع:</strong> نلتزم بتاتاً بعدم بيع أو
                    تأجير بياناتك الشخصية لأي طرف ثالث.
                  </li>
                  <li>
                    <strong className="text-[#161F25]">• مزودو الخدمات:</strong> تتم مشاركة البيانات
                    الضرورية فقط مع المنصات الآمنة المعتمدة لتشغيل موقعنا (مثل Lemon Squeezy).
                  </li>
                  <li>
                    <strong className="text-[#161F25]">• الأمان:</strong> نستخدم بروتوكولات تشفير آمنة
                    (SSL) لحماية كافة البيانات المنقولة عبر الموقع.
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <h3 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-lg text-[#161F25]">
                : شروط الاستخدام وتراخيص الملكية (Terms of Service)
              </h3>
              <blockquote className="p-4 rounded-[16px] bg-[#F7F9FA] border border-[#EDF2F5]">
                <p>
                  باستخدامك لموقع <strong className="text-[#161F25]">Tashilmotion</strong> أو شراء أي من
                  منتجاتنا الرقمية، فإنك توافق على الالتزام بالشروط والأحكام التالية وقواعد
                  التراخيص الموضحة أدناه.
                </p>
              </blockquote>

              <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25]">
                : الملكية الفكرية وحقوق النشر
              </h4>
              <p>
                جميع السكريبتات، قوالب MOGRT، المؤثرات، والتصاميم المتاحة على موقع Tashilmotion هي
                ملكية فكرية حصرية لـ Tashilmotion ومحمية بموجب قوانين حقوق النشر الدولية.
              </p>

              <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25]">
                : قواعد وسياسة التراخيص (Licensing Rules)
              </h4>
              <p>
                عند شراء أي منتج من المتجر، تحصل على{' '}
                <strong className="text-[#161F25]">رخصة استخدام غير حصرية</strong> وفق القواعد التالية:
              </p>
              <ul className="list-disc pr-5 space-y-2 text-[14.5px]">
                <li>
                  <strong className="text-[#161F25]">الاستخدام المسموح به (Permitted Use):</strong> استخدام
                  المنتجات والقوالب في إنشاء مشاريع فيديو شخصية أو مشاريع تجارية نهائية لعملائك،
                  والتعديل على القوالب وتخصيصها لتناسب احتياجات مشروعك البصري.
                </li>
                <li>
                  <strong className="text-[#161F25]">الاستخدام غير المسموح به (Prohibited Use):</strong>{' '}
                  يُمنع منعاً باتاً إعادة بيع أو إعادة توزيع أو مشاركة الملفات المصدرية (Source Files) أو
                  السكريبتات مجاناً أو مقابل مالي، ولا يحق لك تضمين منتجاتنا في حزم (Bundles) أو
                  ادعاء ملكيتها.
                </li>
              </ul>

              <h4 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-base text-[#161F25]">
                : إخلاء المسؤولية والتعديلات
              </h4>
              <p>
                نسعى دائماً لضمان عمل كافة الأدوات بدقة عالية، ولكننا لسنا مسؤولين عن أي أضرار جانبية
                قد تنتج عن الاستخدام الخاطئ للملفات أو البرامج غير المتوافقة. نحتفظ بحق تعديل أو
                تحديث هذه الشروط في أي وقت.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-end pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#161F25] text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer"
          >
            حسناً، فهمت
          </button>
        </div>
      </div>
    </div>
  );
};
