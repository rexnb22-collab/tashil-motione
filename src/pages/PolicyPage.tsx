import React from 'react';
import { motion } from 'motion/react';
import { BreadcrumbPill } from '../components/LayoutChrome';
import { PageId } from '../data/siteData';

export type PolicyType = 'privacy' | 'refund' | 'terms';

interface PolicyPageProps {
  initialPolicy?: PolicyType;
  onNavigate: (page: PageId) => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({
  initialPolicy = 'privacy',
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = React.useState<PolicyType>(initialPolicy);

  React.useEffect(() => {
    setActiveTab(initialPolicy);
  }, [initialPolicy]);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'privacy':
        return 'سياسة الخصوصية';
      case 'refund':
        return 'سياسة الشراء والاسترجاع';
      case 'terms':
        return 'شروط الاستخدام';
    }
  };

  const handleTabChange = (tab: PolicyType) => {
    setActiveTab(tab);
    const hash =
      tab === 'privacy'
        ? 'privacy-policy'
        : tab === 'refund'
        ? 'refund-policy'
        : 'terms';
    window.location.hash = hash;
  };

  return (
    <div id="policy-page" className="page overflow-x-clip pb-20" dir="rtl">
      {/* Breadcrumbs (.tm-breadcrumbs-wrapper) */}
      <BreadcrumbPill currentLabel={getPageTitle()} onGoHome={() => onNavigate('home')} />

      {/* Main Container matching Mosaic layout */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 pt-4">
        {/* Policy Tab Switcher Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => handleTabChange('privacy')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-[#0B96B8] text-white shadow-sm'
                : 'bg-[#F7F9FA] text-[#4B5B66] border border-[#EDF2F5] hover:text-[#161F25] hover:bg-slate-100'
            }`}
          >
            سياسة الخصوصية
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('refund')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-[#0B96B8] text-white shadow-sm'
                : 'bg-[#F7F9FA] text-[#4B5B66] border border-[#EDF2F5] hover:text-[#161F25] hover:bg-slate-100'
            }`}
          >
            سياسة الشراء والاسترجاع
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('terms')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-[#0B96B8] text-white shadow-sm'
                : 'bg-[#F7F9FA] text-[#4B5B66] border border-[#EDF2F5] hover:text-[#161F25] hover:bg-slate-100'
            }`}
          >
            شروط الاستخدام
          </button>
        </div>

        {/* Section Title (.M_EL15) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-3xl sm:text-4xl md:text-[44px] text-[#161F25] tracking-tight">
            {getPageTitle()}
          </h2>

          {/* Official Last Updated Badge (.tm-last-updated-badge) */}
          <div className="inline-flex items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] px-4 py-1.5 rounded-[20px] text-[13px] text-[#64748b] my-5">
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#004d5a]"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              آخر تحديث: <strong className="text-[#0f172a] font-bold">27 يوليو 2026</strong>
            </span>
          </div>
        </motion.div>

        {/* Content Box matching .entry-content .wp-block-mosaic-content */}
        <motion.article
          key={`content-${activeTab}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-right mt-6"
        >
          {/* ===================== 1. PRIVACY POLICY ===================== */}
          {activeTab === 'privacy' && (
            <div className="entry-content space-y-6 text-[#4B5B66]">
              {/* Document H1 */}
              <h1 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl md:text-[34px] leading-[1.25] text-[#161F25] mt-8 mb-4">
                : سياسة الخصوصية وحماية البيانات (Privacy Policy)
              </h1>

              {/* WordPress Blockquote (.wp-block-quote) */}
              <blockquote className="p-6 rounded-[20px] bg-[#F7F9FA] border border-[#EDF2F5] my-6">
                <p className="text-[#2E3D47] text-[17px] sm:text-[18px] leading-[1.65] font-medium m-0">
                  نولي في <strong className="text-[#161F25]">Tashilmotion</strong> أهمية قصوى لحماية خصوصيتك
                  وبياناتك الشخصية. توضح هذه السياسة كيف نجمع ونستخدم ونحمي المعلومات عند زيارتك
                  لموقعنا أو الشراء من متجرنا.
                </p>
              </blockquote>

              {/* Section 1 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  : البيانات التي نجمعها
                </h2>
                <ul className="list-disc pr-6 space-y-2.5 text-[16px] leading-[1.75]">
                  <li>
                    <strong className="text-[#161F25]">معلومات الحساب والشراء:</strong> الاسم، البريد
                    الإلكتروني، ومعلومات الفوترة التي تُجمع عند شراء منتجاتنا عبر بوابة{' '}
                    <strong className="text-[#161F25]">Lemon Squeezy</strong>. (ملاحظة: نحن لا نخزن بيانات
                    بطاقتك الائتمانية مطلقاً).
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

              {/* Section 2 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  : كيف نستخدم بياناتك؟
                </h2>
                <ol className="list-decimal pr-6 space-y-2 text-[16px] leading-[1.75]">
                  <li>معالجة طلبات الشراء وتسليم الملفات الرقمية والسندات المالية.</li>
                  <li>تقديم الدعم الفني والإجابة على استفساراتك.</li>
                  <li>
                    إرسال تحديثات المنتجات وإشعارات الأمان والرسائل الترويجية (يمكنك إلغاء الاشتراك في
                    أي وقت).
                  </li>
                  <li>تحسين أداء الموقع وسرعة التصفح وتجربة المستخدم عبر التحليلات.</li>
                </ol>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  : مشاركة البيانات وحمايتها
                </h2>
                <ul className="list-disc pr-6 space-y-2.5 text-[16px] leading-[1.75]">
                  <li>
                    <strong className="text-[#161F25]">عدم البيع:</strong> نلتزم بتاتاً بعدم بيع أو تأجير
                    بياناتك الشخصية لأي طرف ثالث.
                  </li>
                  <li>
                    <strong className="text-[#161F25]">مزودو الخدمات:</strong> نتم مشاركة البيانات الضرورية
                    فقط مع المنصات الآمنة المعتمدة لتشغيل موقعنا (مثل Lemon Squeezy للمعاملات المالية
                    وخدمات الاستضافة والبريد).
                  </li>
                  <li>
                    <strong className="text-[#161F25]">الأمان:</strong> نستخدم بروتوكولات تشفير آمنة
                    (SSL) لحماية كافة البيانات المنقولة عبر الموقع.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* ===================== 2. REFUND POLICY ===================== */}
          {activeTab === 'refund' && (
            <div className="entry-content space-y-6 text-[#4B5B66]">
              {/* Document H1 */}
              <h1 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl md:text-[34px] leading-[1.25] text-[#161F25] mt-8 mb-4">
                سياسة الشراء واستراد الأموال (Refund Policy)
              </h1>
              <p className="text-[17px] sm:text-[18px] leading-[1.7]">
                في <strong className="text-[#161F25]">تسهيل موشن (Tashilmotion)</strong>، نلتزم بتوفير
                أعلى جودة لمنتجاتنا الرقمية من سكريبتات After Effects وقوالب MOGRT وملحقات الموشن
                جرافيك. ونظراً للطبيعة الرقمية لمنتجاتنا (قابلة للتحميل الفوري)، يرجى قراءة السياسة
                التالية بعناية.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  :آلية الشراء والتسليم الرقمي
                </h2>
                <ul className="list-disc pr-6 space-y-2 text-[16px] leading-[1.75]">
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

              {/* Section 2 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  :شروط وحالات استرداد الأموال
                </h2>
                <p className="mb-3 text-[16px]">
                  نقدم ضمان استرداد الأموال خلال{' '}
                  <strong className="text-[#161F25]">14 يوماً</strong> من تاريخ الشراء في الحالات التالية
                  فقط:
                </p>
                <ol className="list-decimal pr-6 space-y-2 text-[16px] leading-[1.75]">
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

              {/* Section 3 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  :الحالات التي لا يتم فيها الاسترداد
                </h2>
                <p className="mb-3 text-[16px]">لا يحق للمشتري طلب استرداد الأموال في الحالات التالية:</p>
                <ul className="list-disc pr-6 space-y-2 text-[16px] leading-[1.75]">
                  <li>
                    عدم توافق المنتج مع جهازك أو برنامجك بسبب عدم مراجعة{' '}
                    <strong className="text-[#161F25]">متطلبات التشغيل</strong> الموضحة في صفحة المنتج قبل
                    الشراء.
                  </li>
                  <li>تغيير رأيك بعد تحميل الملفات واستخدامها.</li>
                  <li>شراء المنتج عن طريق الخطأ دون التواصل مع الدعم للحل.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="p-6 rounded-[20px] bg-[#F7F9FA] border border-[#EDF2F5] my-6">
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl text-[#161F25] mb-3">
                  :كيف تطلب استرداد الأموال؟
                </h2>
                <p className="mb-3 text-[16px]">
                  إذا كنت تستوفي الشروط أعلاه، يمكنك التواصل مع فريق الدعم عبر البريد:{' '}
                  <code className="bg-[#e8f7fa] text-[#0B96B8] font-bold px-2.5 py-0.5 rounded text-sm font-mono">
                    support@tashilmotion.com
                  </code>{' '}
                  مع إرفاق:
                </p>
                <ol className="list-decimal pr-6 space-y-1.5 text-[15px] leading-[1.7]">
                  <li>رقم الطلب (Order ID) الخاص بـ Lemon Squeezy &amp; gumroad.com</li>
                  <li>البريد الإلكتروني المستخدم في الشراء.</li>
                  <li>شرح مفصل للمشكلة مع إرفاق صور أو فيديو توضيحي للخلل التقني.</li>
                </ol>
              </div>
            </div>
          )}

          {/* ===================== 3. TERMS & CONDITIONS ===================== */}
          {activeTab === 'terms' && (
            <div className="entry-content space-y-6 text-[#4B5B66]">
              {/* Document H1 */}
              <h1 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl md:text-[34px] leading-[1.25] text-[#161F25] mt-8 mb-4">
                : شروط الاستخدام وتراخيص الملكية (Terms of Service)
              </h1>

              {/* Blockquote */}
              <blockquote className="p-6 rounded-[20px] bg-[#F7F9FA] border border-[#EDF2F5] my-6">
                <p className="text-[#2E3D47] text-[17px] sm:text-[18px] leading-[1.65] font-medium m-0">
                  باستخدامك لموقع <strong className="text-[#161F25]">Tashilmotion</strong> أو شراء أي من
                  منتجاتنا الرقمية، فإنك توافق على الالتزام بالشروط والأحكام التالية وقواعد
                  التراخيص الموضحة أدناه.
                </p>
              </blockquote>

              {/* Section 1 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  : الملكية الفكرية وحقوق النشر
                </h2>
                <p className="text-[16px] leading-[1.75]">
                  جميع السكريبتات، قوالب MOGRT، المؤثرات، والتصاميم المتاحة على موقع Tashilmotion هي
                  ملكية فكرية حصرية لـ Tashilmotion ومحمية بموجب قوانين حقوق النشر الدولية.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl sm:text-2xl text-[#161F25] mt-8 mb-3">
                  : قواعد وسياسة التراخيص (Licensing Rules)
                </h2>
                <p className="mb-3 text-[16px]">
                  عند شراء أي منتج من المتجر، تحصل على{' '}
                  <strong className="text-[#161F25]">رخصة استخدام غير حصرية</strong> وفق القواعد التالية:
                </p>
                <ol className="list-decimal pr-6 space-y-4 text-[16px] leading-[1.75]">
                  <li>
                    <p className="font-bold text-[#161F25] mb-1">
                      الاستخدام المسموح به (Permitted Use):
                    </p>
                    <ul className="list-disc pr-6 space-y-1.5 text-[15px]">
                      <li>
                        استخدام المنتجات والقوالب في إنشاء مشاريع فيديو شخصية أو مشاريع تجارية نهائية
                        لعملائك.
                      </li>
                      <li>التعديل على القوالب وتخصيصها لتناسب احتياجات مشروعك البصري.</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-bold text-[#161F25] mb-1">
                      الاستخدام غير المسموح به (Prohibited Use):
                    </p>
                    <ul className="list-disc pr-6 space-y-1.5 text-[15px]">
                      <li>
                        <strong className="text-[#cf2e2e]">يُمنع منعاً باتاً</strong> إعادة بيع أو
                        إعادة توزيع أو مشاركة الملفات المصدرية (Source Files) أو السكريبتات مجاناً أو
                        مقابل مالي.
                      </li>
                      <li>لا يحق لك تضمين منتجاتنا في حزم (Bundles) أو إتاحتها للتحميل على مواقع أخرى.</li>
                      <li>لا يحق لك ادعاء ملكية السكريبتات أو القوالب البرمجية المباشرة.</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Section 3 */}
              <div className="p-6 rounded-[20px] bg-[#F7F9FA] border border-[#EDF2F5] my-6">
                <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-xl text-[#161F25] mb-3">
                  : إخلاء المسؤولية والتعديلات
                </h2>
                <ul className="list-disc pr-6 space-y-2 text-[15px] leading-[1.7]">
                  <li>
                    نسعى دائماً لضمان عمل كافة الأدوات بدقة عالية، ولكننا لسنا مسؤولين عن أي أضرار
                    جانبية قد تنتج عن الاستخدام الخاطئ للملفات أو البرامج غير المتوافقة.
                  </li>
                  <li>
                    نحتفظ بحق تعديل أو تحديث هذه الشروط في أي وقت، وتصبح التعديلات نافذة فور نشرها على
                    هذه الصفحة.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </motion.article>
      </div>
    </div>
  );
};
