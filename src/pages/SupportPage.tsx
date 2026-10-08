import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId, SUPPORT_FAQS } from '../data/siteData';
import { BreadcrumbPill } from '../components/LayoutChrome';
import { ASSETS, OFFICIAL_ASSETS } from '../components/VisualAssets';

interface SupportPageProps {
  onNavigate: (page: PageId) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="page-66" className="page page-id-66 pb-12" dir="rtl">
      {/* Top Breadcrumb (.tm-breadcrumbs-wrapper) */}
      <BreadcrumbPill currentLabel="الدعم الفني" onGoHome={() => onNavigate('home')} />

      {/* 1. OFFICIAL YOUTUBE BANNER HERO (.M_EL10 / .M_EL11) */}
      <section className="relative w-full h-[260px] sm:h-[340px] md:h-[384px] overflow-hidden bg-[#161F25]">
        <img
          src={OFFICIAL_ASSETS.youtubeBanner}
          onError={(e) => {
            e.currentTarget.src = ASSETS.founderPortraitImg;
          }}
          alt="دعم تسهيل موشن"
          width={2048}
          height={1152}
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)',
          }}
        />
      </section>

      {/* 2. CONTACT SECTION ("يسعدنا التحدث معك!" — .M_EL12) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="site-container pt-14"
      >
        <div className="text-center max-w-[800px] mx-auto pb-8">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-[48px] text-[#161F25] text-center">
            يسعدنا التحدث معك!
          </h1>
          <p className="text-[#4B5B66] text-[18px] font-normal leading-[1.6] mt-3 text-center">
            سواء كان لديك استفسار حول منتجاتنا والقوالب، أو تريد مناقشة مشروع موشن جرافيك جديد، نحن
            هنا لمساعدتك والإجابة على جميع أسئلتك.
          </p>
        </div>

        {/* 2-Column Split (.M_EL18 MSC6 MSC7) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6 items-start"
          dir="ltr"
        >
          {/* Left Column: Contact Info (.M_EL19) */}
          <div className="lg:col-span-5 text-right space-y-6" dir="rtl">
            <h2 className="font-bold text-2xl sm:text-[32px] text-[#161F25]">
              <strong>تواصل معنا</strong>
            </h2>
            <p className="text-[#4B5B66] text-[17px] font-semibold leading-[1.6]">
              هل لديك استفسار أو تحتاج إلى مساعدة في استخدام أدواتنا؟ نحن هنا لدعمك. أرسل لنا
              رسالتك وسيرد عليك فريقنا في أقرب وقت ممكن.
            </p>

            <div className="pt-2 space-y-4">
              {/* Instagram */}
              <article className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white text-[#0B96B8] shadow-[0_2px_4px_-2px_rgba(15,22,37,0.05),0_4px_8px_0_rgba(15,22,37,0.03)] border border-[#EDF2F5] flex items-center justify-center shrink-0">
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
                </div>
                <a
                  href="https://www.instagram.com/tashilmotion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#2E3D47]/70 hover:text-[#0B96B8] transition-colors no-underline"
                >
                  صفحة الرسمية على الانستغرام
                </a>
              </article>

              {/* YouTube */}
              <article className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white text-[#0B96B8] shadow-[0_2px_4px_-2px_rgba(15,22,37,0.05),0_4px_8px_0_rgba(15,22,37,0.03)] border border-[#EDF2F5] flex items-center justify-center shrink-0">
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
                      d="M10.4961 15.1451C9.8295 15.526 9 15.0446 9 14.2768V9.7232c0-.7678.8295-1.2492 1.4961-.8683l3.9845 2.2769c.6718.3839.6718 1.3525 0 1.7364z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M22 6c0-1.1046-.8954-2-2-2H4c-1.1046 0-2 .8954-2 2v12c0 1.1046.8954 2 2 2h16c1.1046 0 2-.8954 2-2z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.youtube.com/@tashil.motion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#2E3D47]/70 hover:text-[#0B96B8] transition-colors no-underline"
                >
                  القناة الرسمية على اليوتوب
                </a>
              </article>
            </div>
          </div>

          {/* Right Column: Form (.M_EL33) */}
          <div className="lg:col-span-7" dir="rtl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F7F9FA] border border-[#EDF2F5] rounded-[20px] p-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#e6f4f6] text-[#0B96B8] flex items-center justify-center mx-auto">
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
                      d="m20 6.5-11 11-5-5"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-2xl text-[#161F25]">شكرا لك على التواصل</h3>
                <p className="text-[16px] text-[#4B5B66] font-semibold">
                  وسيرد عليك فريقنا في أقرب وقت ممكن.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      message: '',
                    });
                  }}
                  className="bg-[#0B96B8] hover:bg-[#097b98] text-white font-semibold text-sm px-6 py-3 rounded-[8px] transition-colors cursor-pointer mt-2"
                >
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                {/* Row 1 & 2 (.M_EL35 MSC17) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="first-name"
                      className="block text-[16px] font-semibold text-[#2E3D47]"
                    >
                      الاسم الكامل
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      value={formState.firstName}
                      onChange={(e) =>
                        setFormState({ ...formState, firstName: e.target.value })
                      }
                      placeholder="محمد"
                      className="w-full bg-white border-2 border-[#EDF2F5] hover:border-[#AFBDC7] focus:border-[#0B96B8] rounded-[4px] p-2.5 text-[16px] text-[#2E3D47] placeholder:text-[#677885] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="last-name"
                      className="block text-[16px] font-semibold text-[#2E3D47]"
                    >
                      الاسم العائلي
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      value={formState.lastName}
                      onChange={(e) =>
                        setFormState({ ...formState, lastName: e.target.value })
                      }
                      placeholder="عثمان"
                      className="w-full bg-white border-2 border-[#EDF2F5] hover:border-[#AFBDC7] focus:border-[#0B96B8] rounded-[4px] p-2.5 text-[16px] text-[#2E3D47] placeholder:text-[#677885] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-[16px] font-semibold text-[#2E3D47]"
                    >
                      الالبريد الإلكتروني
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="Your@email.com"
                      className="w-full bg-white border-2 border-[#EDF2F5] hover:border-[#AFBDC7] focus:border-[#0B96B8] rounded-[4px] p-2.5 text-[16px] text-[#2E3D47] placeholder:text-[#677885] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="phone"
                      className="block text-[16px] font-semibold text-[#2E3D47]"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+39 01020300406"
                      className="w-full bg-white border-2 border-[#EDF2F5] hover:border-[#AFBDC7] focus:border-[#0B96B8] rounded-[4px] p-2.5 text-[16px] text-[#2E3D47] placeholder:text-[#677885] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Message (.M_EL48) */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-[16px] font-semibold text-[#2E3D47]"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full bg-white border-2 border-[#EDF2F5] hover:border-[#AFBDC7] focus:border-[#0B96B8] rounded-[4px] p-2.5 text-[16px] text-[#2E3D47] placeholder:text-[#677885] focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit Button (.M_EL53) */}
                <button
                  type="submit"
                  className="w-full bg-[#0B96B8] hover:bg-[#097b98] text-white font-semibold text-[16px] py-3 px-4 rounded-[8px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>إرسال الرسالة</span>
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
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      {/* 3. THREE SUPPORT PILLARS (.M_EL64 / .M_EL65 MSC23) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="site-container my-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir="ltr">
          {/* 1. دعم المنتجات والشراء */}
          <div className="space-y-4 text-right" dir="rtl">
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
                  d="M4 16c-.5 0-2-1.5-2-3.5S3.5 8 6 8c0-3 3-5 6-5s6 2 6 5c2.5 0 4 2.5 4 4.5S20.5 16 20 16M8 17l4 4m0 0 4-4m-4 4v-9"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h6 className="font-semibold text-[20px] text-[#161F25]">دعم المنتجات والشراء</h6>
              <p className="text-[#4B5B66] text-[16px] font-normal leading-[1.55]">
                واجهت مشكلة في تحميل أحد القوالب أو استخدامه؟ فريقنا جاهز لمساعدتك.
              </p>
            </div>
          </div>

          {/* 2. المشاريع والعمل الحر */}
          <div className="space-y-4 text-right" dir="rtl">
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
                  d="M12 13h.01M8 7H4c-1.1046 0-2 .8954-2 2v5.0063M8 7h8M8 7V5c0-1.1046.8954-2 2-2h4c1.1046 0 2 .8954 2 2v2m0 0h4c1.1046 0 2 .8954 2 2v5.0063m-20 0V19c0 1.1046.8954 2 2 2h16c1.1046 0 2-.8954 2-2v-4.9937m-20 0c3 1.4937 7.009 1.9802 10.01 1.9802S19 15.5094 22 14.0063"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h6 className="font-semibold text-[20px] text-[#161F25]">المشاريع والعمل الحر</h6>
              <p className="text-[#4B5B66] text-[16px] font-normal leading-[1.55]">
                تحضر لمشروع موشن جرافيك أو إعلان بصري؟ لنحوله إلى واقع مذهل معاً.
              </p>
            </div>
          </div>

          {/* 3. استفسارات عامة وشراكات */}
          <div className="space-y-4 text-right" dir="rtl">
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
                  d="M9 10c0-1.6569 1.3431-3 3-3s3 1.3431 3 3c0 2.7152-3 2.0582-3 4m0 3h.01M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <h6 className="font-semibold text-[20px] text-[#161F25]">استفسارات عامة وشراكات</h6>
              <p className="text-[#4B5B66] text-[16px] font-normal leading-[1.55]">
                للأسئلة العامة، الاقتراحات، أو طلبات الشراكة والتعاون.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. FAQ ACCORDION (.M_EL81 / .M_EL88) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="site-container pt-4"
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10 space-y-2">
            <div className="text-[14px] font-semibold uppercase tracking-wider text-[#1D272E]">
              FAQ
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-[36px] text-[#161F25]">
              أسئلة متكررة قد تجيب على استفسارك بسرعة
            </h2>
          </div>

          <dl className="space-y-3">
            {SUPPORT_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-[8px] p-6 transition-colors ${
                    isOpen ? 'bg-[#F7F9FA]' : 'bg-white hover:bg-[#F7F9FA]'
                  }`}
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(faq.id)}
                      className="w-full flex items-center justify-between gap-4 text-right cursor-pointer"
                      dir="ltr"
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="text-[#677885] shrink-0"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h8m6 0c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="text-[#677885] shrink-0"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v8m-4-4h8m6 0c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
                          />
                        </svg>
                      )}
                      <span
                        className="text-[18px] font-normal text-[#2E3D47]/80 flex-1 text-right"
                        dir="rtl"
                      >
                        {faq.question}
                      </span>
                    </button>
                  </dt>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="text-[#4B5B66] text-[16px] font-normal leading-[1.6] mt-3 pl-8 text-right"
                          dir="rtl"
                        >
                          {faq.answer}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </dl>
        </div>
      </motion.section>
    </div>
  );
};

