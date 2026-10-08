import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../data/siteData';
import { BreadcrumbPill } from '../components/LayoutChrome';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="page-65" className="page page-id-65 overflow-x-clip pb-16" dir="rtl">
      {/* Top Breadcrumb (.tm-breadcrumbs-wrapper) */}
      <BreadcrumbPill currentLabel="من نحن" onGoHome={() => onNavigate('home')} />

      {/* 1. HERO SECTION ("تعرّف على تسهيل موشن" + Youtube-Banner.webp) */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1216px] mx-auto px-4 sm:px-8 py-12 md:py-20 text-center"
      >
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          {/* Circular Icon Box (.M_EL14) */}
          <div className="w-16 h-16 rounded-full bg-[#0B96B8] hover:bg-[#086f88] transition-colors text-white flex items-center justify-center mx-auto mb-6 shadow-sm">
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
                d="M9.9818 4.924c-.375-.8194-.0271-1.7935.777-2.1756s1.76-.0276 2.135.7918l3.6211 7.9134.5827 1.3613 1.5203-2.7604c.5401-.9533 1.7734-1.2165 2.6436-.5643.6657.4991.9158 1.3941.6079 2.1757-1.1965 3.0379-1.8211 7.4159-4.9747 9.0811-2.0727 1.0946-8.927 2.7445-10.921-1.4965L2.151 11.0537c-.375-.8195-.027-1.7935.7771-2.1756s1.76-.0276 2.135.7918M9.9818 4.924l-.9053-1.9783c-.375-.8195-1.3308-1.174-2.135-.792-.8041.3822-1.152 1.3563-.777 2.1757l.9052 1.9784m2.912-1.3838 2.0369 4.4513m-6.9556.2946-.9053-1.9783c-.375-.8195-.027-1.7936.777-2.1757s1.76-.0276 2.135.7919M5.063 9.6699l1.1316 2.4729m.8751-5.835 2.0369 4.4513"
              />
            </svg>
          </div>

          <h1 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-3xl sm:text-4xl md:text-[52px] lg:text-[58px] leading-[1.08] text-[#161F25] text-center tracking-tight">
            تعرّف على &quot;تسهيل موشن&quot;
          </h1>
          <p className="text-[#4B5B66] text-base sm:text-[18px] font-normal leading-[1.56] mt-4 max-w-[800px] mx-auto text-center">
            المنصة العربية الأولى المخصصة لابتكار أدوات الموشن جرافيك، برمجة سكريبتات After Effects،
            وتوفير ملحقات احترافية تهدف لتبسيط وتسريع إنتاجك البصري.
          </p>
        </div>

        {/* Youtube-Banner (.M_EL18) with desktop decorative SVG (.M_EL19) */}
        <div className="mt-10 md:mt-14 relative max-w-[1216px] mx-auto">
          <img
            src="/wp-content/uploads/2026/07/about-hero-ornament.svg"
            alt=""
            aria-hidden="true"
            className="hidden xl:block absolute -top-16 -right-16 w-[280px] h-auto opacity-70 pointer-events-none -z-10"
          />
          <img
            src="/wp-content/uploads/2026/07/Youtube-Banner.webp"
            alt="تعرّف على تسهيل موشن"
            width={2048}
            height={1152}
            className="w-full h-auto rounded-[20px] object-cover shadow-sm border border-[#EDF2F5]"
          />
        </div>
      </motion.section>

      {/* 2. HOW WE TURN IDEAS INTO REALITY ("كيف نحول الأفكار إلى واقع؟" — 3 Steps) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1216px] mx-auto px-4 sm:px-8 py-14 md:py-20 text-center"
      >
        <div className="max-w-[800px] mx-auto">
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
                d="M4 22v-6.9961M4 2v2.0051M4 15.004C4.887 14.0577 6.8404 14 8 14c3 0 5 2 8 2s4-1 4-1V4s-1 1-4 1-5-2-8-2c-1.2013 0-3.0667.0718-4 1.0051M4 15.004V4.0051"
              />
            </svg>
          </div>

          <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl md:text-[38px] leading-[1.18] text-[#161F25] text-center tracking-tight">
            كيف نحول الأفكار إلى واقع؟
          </h2>
          <p className="text-[#4B5B66] text-base sm:text-[18px] leading-[1.56] mt-3 max-w-xl mx-auto font-normal text-center">
            من فهم احتياجات سوق الموشن جرافيك وحتى إطلاق الملحقات البرمجية والحلول الذكية، نتبع خطوات
            مدروسة لضمان أفضل جودة.
          </p>
        </div>

        {/* 3 Steps in Clean Minimalist Columns (.M_EL31 MSC10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16 text-center">
          {/* Step 1 */}
          <article className="flex flex-col items-center">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#0B96B8] bg-[#e6f4f6] mb-4">
              Step 1
            </span>
            <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[20px] text-[#161F25] mb-2.5">
              دراسة احتياجات المصممين
            </h3>
            <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
              نحدد العقبات التي تواجه مصممي الموشن جرافيك في أعمالهم اليومية والأدوات التكرارية
              التي تستهلك وقتهم.
            </p>
          </article>

          {/* Step 2 */}
          <article className="flex flex-col items-center">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#0B96B8] bg-[#e6f4f6] mb-4">
              Step 2
            </span>
            <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[20px] text-[#161F25] mb-2.5">
              البرمجة والتصميم الإبداعي
            </h3>
            <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
              نقوم بتطوير سكريبتات حصرية وتصميم قوالب MOGRT هجينة تجمع بين المرونة والجمالية
              العالية.
            </p>
          </article>

          {/* Step 3 */}
          <article className="flex flex-col items-center">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[12px] font-semibold text-[#0B96B8] bg-[#e6f4f6] mb-4">
              Step 3
            </span>
            <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[20px] text-[#161F25] mb-2.5">
              الإطلاق والدعم المستمر
            </h3>
            <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
              نوفر الملحقات عبر متجرنا مع إرفاق شروحات شاملة وتحديثات دورية مجانية لضمان استمرارية
              جودتها.
            </p>
          </article>
        </div>
      </motion.section>

      {/* 3. THE TEAM BEHIND TASHIL MOTION ("الفريق خلف تسهيل موشن") */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-[1216px] mx-auto px-4 sm:px-8 py-14 md:py-20 text-center"
      >
        <div className="max-w-[800px] mx-auto">
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
                d="M13 21c0-3.3137-2.6863-6-6-6s-6 2.6863-6 6zm0 0c0-2.7614 2.2386-5 5-5s5 2.2386 5 5zM11 7c0 2.2091-1.7909 4-4 4S3 9.2091 3 7s1.7909-4 4-4 4 1.7909 4 4m10 2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3"
              />
            </svg>
          </div>

          <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl md:text-[38px] leading-[1.18] text-[#161F25] text-center tracking-tight">
            الفريق خلف تسهيل موشن
          </h2>
          <p className="text-[#4B5B66] text-base sm:text-[18px] leading-[1.56] mt-3 max-w-xl mx-auto font-normal text-center">
            فريق شغوف يجمع بين الخبرة البرمجية والحس الفني لتطوير أفضل بيئة عمل لمصممي الموشن جرافيك.
          </p>
        </div>

        {/* 3 Team Columns (.M_EL60 MSC10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12 md:mt-16 text-right items-stretch">
          {/* Column 1: فريق التطوير والبرمجة (Sara-Avatar.webp) */}
          <article className="flex flex-col text-right">
            <div className="aspect-square w-full max-w-[384px] mx-auto rounded-[20px] overflow-hidden bg-[#F7F9FA] border border-[#EDF2F5] mb-5">
              <img
                src="/wp-content/uploads/2026/07/Sara-Avatar.webp"
                alt="فريق التطوير والبرمجة"
                width={928}
                height={1152}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[22px] text-[#161F25]">
                فريق التطوير والبرمجة
              </h3>
              <div className="text-[15px] font-medium text-[#4B5B66]">
                برمجة سكريبتات After Effects وحلول SaaS
              </div>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
                نختص بتحويل العمليات المكررة والمعقدة داخل برامج التعديل إلى أزرار وأدوات برمجية
                بنقرة زر واحدة.
              </p>
              <ul className="flex items-center gap-4 pt-3 text-[#677885]">
                <li>
                  <a
                    aria-label="Follow us on Instagram"
                    href="https://www.instagram.com/tashilmotion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0B96B8] transition-colors inline-block"
                  >
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
                        d="M17 6h.0108m-.7251-4H7.7143C4.5583 2 2 4.5584 2 7.7143v8.5714C2 19.4416 4.5584 22 7.7143 22h8.5714C19.4416 22 22 19.4416 22 16.2857V7.7143C22 4.5583 19.4416 2 16.2857 2M16 12c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          {/* Column 2: فريق التصميم والتحريك (SimoBen-Avatar.webp) */}
          <article className="flex flex-col text-right">
            <div className="aspect-square w-full max-w-[384px] mx-auto rounded-[20px] overflow-hidden bg-[#F7F9FA] border border-[#EDF2F5] mb-5">
              <img
                src="/wp-content/uploads/2026/07/SimoBen-Avatar.webp"
                alt="فريق التصميم والتحريك"
                width={928}
                height={1152}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[22px] text-[#161F25]">
                فريق التصميم والتحريك
              </h3>
              <div className="text-[15px] font-medium text-[#4B5B66]">
                صناعة قوالب MOGRT والهويات البصرية
              </div>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
                نعمل على ابتكار تصميمات بصرية معاصرة تتماشى مع أحدث اتجاهات سوق الموشن جرافيك
                العالمي.
              </p>
            </div>
          </article>

          {/* Column 3: فريق الدعم والمحتوى */}
          <article className="flex flex-col justify-between text-right p-6 rounded-[20px] bg-[#F7F9FA] border border-[#EDF2F5]">
            <div className="space-y-3">
              <div>
                <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[22px] text-[#161F25]">
                  فريق الدعم والمحتوى
                </h3>
                <div className="text-[15px] font-medium text-[#4B5B66] mt-1">
                  إعداد الدروس وخدمة العملاء
                </div>
              </div>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
                مكرسون لتقديم أفضل شرح وإجابة على كافة الاستفسارات لضمان تجربة مستخدم سلسة وخالية من
                العوائق.
              </p>
            </div>
            <ul className="flex items-center gap-4 pt-6 text-[#677885]">
              <li>
                <a
                  aria-label="Follow us on Instagram"
                  href="https://www.instagram.com/tashilmotion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0B96B8] transition-colors inline-block"
                >
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
                      d="M17 6h.0108m-.7251-4H7.7143C4.5583 2 2 4.5584 2 7.7143v8.5714C2 19.4416 4.5584 22 7.7143 22h8.5714C19.4416 22 22 19.4416 22 16.2857V7.7143C22 4.5583 19.4416 2 16.2857 2M16 12c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label="Follow us on Dribbble"
                  href="#dribbble"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('store');
                  }}
                  className="hover:text-[#0B96B8] transition-colors inline-block"
                >
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
                      d="M21.9997 12.0789 22 12c0-3.1844-1.4884-6.0211-3.8075-7.8525m3.8072 7.9314c-.0294 3.8078-2.1871 7.109-5.3423 8.7726m5.3423-8.7726c-6.3665.504-12.0617 3.393-16.1922 7.7736m10.8499.999C15.2665 21.5849 13.6817 22 12 22c-2.3385 0-4.4894-.8027-6.1925-2.1475m10.8499.999C15.4947 13.8897 11.455 7.9019 5.802 4.1519m.0055 15.7006C3.4885 18.0211 2 15.1844 2 12l.0003-.0789m0 0c.0243-3.1497 1.5049-5.9528 3.8016-7.7692m-3.8016 7.7692c6.3665-.504 12.0617-3.393 16.1922-7.7736M5.802 4.152C7.5059 2.8044 9.659 2 12 2c2.3385 0 4.4894.8027 6.1925 2.1475"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </article>
        </div>
      </motion.section>

      {/* 4. WHAT WE STAND ON ("ما الذي نرتكز عليه؟" + ATER-Guest GIF + 4 Pillars) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-[1216px] mx-auto px-4 sm:px-8 py-14 md:py-20 text-center"
      >
        <div className="max-w-[800px] mx-auto">
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
                d="M4 3v2m0 0v2m0-2H2m2 0h2M5 17v2m0 0v2m0-2H3m2 0h2m6-16 2.431 6.569L22 12l-6.569 2.431L13 21l-2.431-6.569L4 12l6.569-2.431z"
              />
            </svg>
          </div>

          <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl md:text-[38px] leading-[1.18] text-[#161F25] text-center tracking-tight">
            ما الذي نرتكز عليه؟
          </h2>
          <p className="text-[#4B5B66] text-base sm:text-[18px] leading-[1.56] mt-3 max-w-xl mx-auto font-normal text-center">
            نؤمن بتمكين المبدعين وصناع المحتوى من خلال دمج البرمجة الذكية بالتصميم البصري المبهر
            لتوفير الوقت والجهد.
          </p>
        </div>

        {/* 2-Column Layout (.M_EL108 MSC26) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mt-12 md:mt-16 items-center">
          {/* 4 Pillars 2x2 Grid (.M_EL110 MSC28) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-right">
            {/* 1. تصميم يُلبي احتياجاتك */}
            <article className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center">
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
                    d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8m4-8c0 2.209-1.791 4-4 4S8 8.209 8 6s1.791-4 4-4 4 1.791 4 4"
                  />
                </svg>
              </div>
              <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[18px] text-[#2E3D47]">
                تصميم يُلبي احتياجاتك
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
                نضع المصمم في قلب كل قالب أو سكريبت نبتكره، لضمان سهولة الاستخدام المطلقة والعمل
                بسلاسة.
              </p>
            </article>

            {/* 2. حلول برمجية متطورة (SaaS & MOGRT) */}
            <article className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center">
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
                    d="M10 4h9c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2h-2M7 12H5c-1.1046 0-2 .8954-2 2v4c0 1.1046.8954 2 2 2h9m4 2h2c.5523 0 1-.4477 1-1v-2c0-.5523-.4477-1-1-1h-2c-.5523 0-1 .4477-1 1v2c0 .5523.4477 1 1 1m-8-9v-2c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1M4 6h2c.5523 0 1-.4477 1-1V3c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v2c0 .5523.4477 1 1 1"
                  />
                </svg>
              </div>
              <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[18px] text-[#2E3D47]">
                حلول برمجية متطورة (SaaS & MOGRT)
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
                لا نكتفي بالقوالب التقليدية، بل نبتكر أدوات برمجية وسكريبتات ذكية تحل مشاكل سير
                العمل المعقدة.
              </p>
            </article>

            {/* 3. دقة واحترافية عالية */}
            <article className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center">
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
                    d="M17 16c.8 0 1.6667-1.3333 2-2 .6372-1.1482 1-2.5937 1-4 0-4.4183-3.5817-8-8-8s-8 3.5817-8 8c0 1.4571.3193 2.8233 1 4 .3333.6667 1.2 2 2 2m10 0-.6838 2.0513A1.387 1.387 0 0 1 15 19m2-3h-5m-5 0 .6838 2.0513C7.8726 18.6179 8.4028 19 9 19m-2-3h5m-3 3h6m-6 0 .5442 1.6325A2 2 0 0 0 11.4415 22h1.117a2 2 0 0 0 1.8973-1.3675L15 19m-1-9c-.6125.6432-1.2889 1-2 1m0 0c-.7111 0-1.3875-.3568-2-1m2 1v5"
                  />
                </svg>
              </div>
              <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[18px] text-[#2E3D47]">
                دقة واحترافية عالية
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
                نحرص على اختبار كل ملف وملحق بعناية لضمان عمله بكفاءة عالية وبدون أخطاء أثناء
                الرندر.
              </p>
            </article>

            {/* 4. دعم وتحديثات مستمرة */}
            <article className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center">
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
                    d="M8 13.7453C9.1338 14.5362 10.5128 15 12 15s2.8662-.4638 4-1.2547m-8 0C6.1865 12.4804 5 10.3787 5 8c0-3.866 3.134-7 7-7s7 3.134 7 7c0 2.3787-1.1865 4.4804-3 5.7453m-8 0L7 23l5-3 5 3-1-9.2547"
                  />
                </svg>
              </div>
              <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[18px] text-[#2E3D47]">
                دعم وتحديثات مستمرة
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6]">
                نوفر دروساً تعليمية ودعماً فنياً متواصلاً لضمان حصولك على أقصى فائدة من كافة أصولنا
                الرقمية.
              </p>
            </article>
          </div>

          {/* Left: Official ATER-Guest-with-Contents-Out_Right.gif (.M_EL97) */}
          <div className="w-full max-w-[488px] mx-auto aspect-video sm:aspect-[16/10] rounded-[20px] overflow-hidden border border-[#EDF2F5] bg-[#161F25] shadow-sm">
            <img
              src="/wp-content/uploads/2026/07/ATER-Guest-with-Contents-Out_Right.gif"
              alt="ما الذي نرتكز عليه"
              width={960}
              height={540}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* 5. CUSTOM PROJECT OR SCRIPT IDEA CTA ("هل لديك مشروع خاص أو فكرة سكريبت؟") */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-[1216px] mx-auto px-4 sm:px-8 py-14 md:py-20 text-center"
      >
        <div className="max-w-[800px] mx-auto">
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
                d="m9 18-7 4V6l7-4m0 16 7 4m-7-4V2m7 20 6-4V2l-6 4m0 16V6m0 0L9 2"
              />
            </svg>
          </div>

          <h2 className="font-['IBM_Plex_Sans_Arabic'] font-bold text-2xl sm:text-3xl md:text-[38px] leading-[1.18] text-[#161F25] text-center tracking-tight">
            هل لديك مشروع خاص أو فكرة سكريبت؟
          </h2>
          <p className="text-[#4B5B66] text-base sm:text-[18px] leading-[1.56] mt-3 max-w-xl mx-auto font-normal text-center">
            سواء كنت تبحث عن تخصيص هوية بصرية، أو تطوير سكريبت خاص بشركتك، نحن هنا لمساعدتك في تنفيذ
            رؤيتك.
          </p>
        </div>

        {/* Center Floating Logo (.M_EL132) */}
        <div className="my-10 flex justify-center">
          <motion.img
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            src="/wp-content/uploads/2026/07/main-logo-BB-Tashilmotion.webp"
            alt="Tashil Motion"
            width={846}
            height={847}
            className="w-[200px] sm:w-[260px] md:w-[320px] h-auto drop-shadow-sm select-none"
          />
        </div>

        {/* 2 Contact Options (.M_EL143) */}
        <div className="max-w-[850px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 text-center">
          {/* Option 1: Mail */}
          <article className="flex flex-col items-center">
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
                  d="M2 7V6c0-1.1046.8954-2 2-2h16c1.1046 0 2 .8954 2 2v1M2 7v11c0 1.1046.8954 2 2 2h16c1.1046 0 2-.8954 2-2V7M2 7l8.971 5.3826c.6334.38 1.4246.38 2.058 0L22 7"
                />
              </svg>
            </div>
            <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[20px] text-[#161F25] mb-2">
              أرسل لنا بريداً
            </h3>
            <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6] mb-4 max-w-sm">
              أرسل استفسارك عبر البريد الإلكتروني وسيقوم فريقنا بالرد عليك في أسرع وقت بجميع
              التفاصيل، المقترحات، والمعلومات التي تحتاجها.
            </p>
            <a
              href="mailto:support@tashilmotion.com"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('support');
              }}
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0B96B8] hover:text-[#086f88] transition-colors"
            >
              <span>support@tashilmotion.com</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h12m0 0-6-6m6 6-6 6"
                />
              </svg>
            </a>
          </article>

          {/* Option 2: Live Chat */}
          <article className="flex flex-col items-center">
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
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20c5.5228 0 10-4.0294 10-9s-4.4772-9-10-9S2 6.0294 2 11c0 1.6799.5114 3.2524 1.4018 4.598.1709.2584.2331.5766.1494.8749l-.9976 3.5545c-.225.8019.5714 1.5114 1.3421 1.1955l4.1229-1.69c.2265-.0928.4786-.0975.7124-.0248C9.7554 19.8269 10.8552 20 12 20Z"
                />
              </svg>
            </div>
            <h3 className="font-['IBM_Plex_Sans_Arabic'] font-semibold text-[20px] text-[#161F25] mb-2">
              محادثة مباشرة
            </h3>
            <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.6] mb-4 max-w-sm">
              ابدأ محادثة فورية مع فريق الدعم الفني لمساعدتك في استفسارات الشراء عبر الموقع، حل
              المشكلات الفنية، أو اختيار الملحقات المناسبة.
            </p>
            <a
              href="https://www.instagram.com/tashilmotion/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#0B96B8] hover:text-[#086f88] transition-colors"
            >
              <span>ابدأ المحادثة الآن</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h12m0 0-6-6m6 6-6 6"
                />
              </svg>
            </a>
          </article>
        </div>
      </motion.section>
    </div>
  );
};
