import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/siteData';
import { ASSETS, BlogCardVisual, OFFICIAL_ASSETS } from '../components/VisualAssets';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const foldersPost = BLOG_POSTS[1]; // postid-313
  const fontsPost = BLOG_POSTS[0]; // postid-310
  const welcomePost = BLOG_POSTS[2]; // postid-34

  return (
    <div id="page-29" className="blog pb-12" dir="rtl">
      {/* 1. BLOG HEADER & TOP LOOP (.M_EL10) */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="site-container pt-12 pb-12 space-y-10"
      >
        <div className="max-w-[800px] text-right">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-[48px] text-[#161F25] leading-[1.15]">
            مقالات، دروس وموارد لمصممي الموشن جرافيك
          </h1>
          <p className="text-[#4B5B66] text-[17px] mt-3 font-normal leading-[1.65]">
            اكتشف شروحات متعمقة، تقنيات تحريك متقدمة، وأساليب عمل احترافية لبرنامج After Effects،
            بالإضافة إلى الموارد الجاهزة للارتقاء بمشاريعك البصرية.
          </p>
        </div>

        {/* Top 2-Column Loop (.M_EL17 MSC6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir="ltr">
          {[foldersPost, fontsPost].map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="cursor-pointer group flex flex-col space-y-4"
            >
              <BlogCardVisual type={post.visualType} />
              <div className="space-y-2 text-right" dir="rtl">
                <div className="flex items-center gap-2 text-[14px] font-semibold text-[#2E3D47]">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-semibold text-[22px] text-[#161F25] group-hover:text-[#0B96B8] transition-colors leading-[1.35]">
                  {post.title}
                </h2>
                <p className="text-[#4B5B66] text-[16px] font-normal leading-[1.55]">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2 Horizontal Card (.M_EL30 / welcomePost) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2" dir="ltr">
          <article
            onClick={() => onSelectPost(welcomePost)}
            className="cursor-pointer group grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
          >
            <div className="aspect-square max-w-[280px] w-full rounded-[20px] overflow-hidden bg-[#161F25]">
              <img
                src={OFFICIAL_ASSETS.youtubeBanner}
                onError={(e) => {
                  e.currentTarget.src = ASSETS.founderPortraitImg;
                }}
                alt={welcomePost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2 text-right" dir="rtl">
              <h3 className="font-semibold text-[20px] text-[#161F25] group-hover:text-[#0B96B8] transition-colors leading-[1.4]">
                {welcomePost.title}
              </h3>
              <p className="text-[#4B5B66] text-[15px] font-normal leading-[1.55]">
                {welcomePost.excerpt}
              </p>
            </div>
          </article>
        </div>
      </motion.section>

      {/* 2. FEATURED ARTICLES SECTION (.M_EL40 MSC19) */}
      <section className="bg-[#F7F9FA] py-16 my-8">
        <div className="site-container space-y-10">
          {/* Header (.M_EL41) */}
          <div className="max-w-[800px] text-right space-y-2">
            <div className="text-[14px] font-semibold uppercase tracking-wider text-[#1D272E]">
              ⭐ مقال مميز
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-[36px] text-[#161F25]">
              ⏱️ قراءة 6 دقائق | 📁 دروس وأساليب عمل
            </h2>
            <p className="text-[#4B5B66] text-[17px] font-normal leading-[1.6]">
              دليل خطوة بخطوة حول أفضل تقنيات التحسين لتقليل زمن الرندر وأتمتة التحريكات التكرارية
              لتوفير وقتك.
            </p>
          </div>

          {/* 3-Column Loop Cards (.M_EL48 MSC22) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" dir="ltr">
            {[foldersPost, fontsPost, welcomePost].map((post) => (
              <article
                key={`featured-${post.id}`}
                onClick={() => onSelectPost(post)}
                className="bg-white rounded-[16px] overflow-hidden shadow-[0_1px_3px_rgba(15,22,37,0.05),0_8px_16px_-4px_rgba(15,22,37,0.08)] cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#f1f5f9]">
                    <img
                      src={
                        post.visualType === 'folders-guide'
                          ? OFFICIAL_ASSETS.blogFoldersImg
                          : post.visualType === 'google-fonts'
                          ? OFFICIAL_ASSETS.blogFontsImg
                          : OFFICIAL_ASSETS.youtubeBanner
                      }
                      onError={(e) => {
                        e.currentTarget.src = ASSETS.founderPortraitImg;
                      }}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-3 text-right" dir="rtl">
                    <div className="text-[13px] font-semibold uppercase tracking-wider text-[#0B96B8]">
                      {post.category}
                    </div>
                    <h3 className="font-semibold text-[18px] text-[#161F25] group-hover:text-[#0B96B8] transition-colors leading-[1.4]">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Author Footer (.M_EL58) */}
                <div className="px-6 pb-6 flex items-center gap-3" dir="ltr">
                  <img
                    src={OFFICIAL_ASSETS.authorAdminAvatar}
                    onError={(e) => {
                      e.currentTarget.src = ASSETS.teamDevImg;
                    }}
                    alt={post.author}
                    className="w-[46px] h-[46px] rounded-full object-cover shrink-0"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-[15px] text-[#2E3D47]">{post.author}</div>
                    <div className="text-[13px] text-[#4B5B66]">{post.date}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination (.M_EL71) */}
          <div className="flex items-center justify-between pt-4 border-t border-[#EDF2F5]" dir="ltr">
            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#4B5B66] opacity-50 cursor-default">
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
                  d="M18 12H6m0 0 6 6m-6-6 6-6"
                />
              </svg>
              <span>Previous</span>
            </span>

            <span className="w-10 h-10 rounded-lg bg-[#e6f4f6] text-[#0B96B8] font-bold text-[14px] flex items-center justify-center">
              1
            </span>

            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#4B5B66] opacity-50 cursor-default">
              <span>Next</span>
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
            </span>
          </div>
        </div>
      </section>

      {/* 3. NEWSLETTER SUBSCRIPTION SECTION (.M_EL80) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="site-container py-10"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          dir="ltr"
        >
          {/* Left Column: Form (.M_EL82) */}
          <div className="lg:col-span-6 space-y-3">
            {subscribed ? (
              <div
                className="bg-emerald-50 border border-emerald-200 rounded-[12px] p-4 flex items-center gap-3 text-emerald-900 text-sm font-semibold"
                dir="rtl"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>شكراً لاشتراكك! ستصلك أحدث الدروس والملحقات قريباً.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني..."
                  className="flex-1 bg-white border-2 border-[#EDF2F5] hover:border-[#AFBDC7] focus:border-[#0B96B8] rounded-[4px] px-3.5 py-2.5 text-[16px] text-[#2E3D47] placeholder:text-[#677885] focus:outline-none text-right"
                  dir="rtl"
                />
                <button
                  type="submit"
                  className="bg-[#0B96B8] hover:bg-[#097b98] text-white font-semibold text-[14px] px-5 py-3 rounded-[4px] transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[14px] text-[#4B5B66] text-right" dir="rtl">
              🔒 نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>

          {/* Right Column: Callout (.M_EL94) */}
          <div className="lg:col-span-6 text-right space-y-2" dir="rtl">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-[36px] text-[#161F25] leading-[1.2]">
              ارتقِ بمهاراتك في الموشن جرافيك إلى المستوى التالي
            </h2>
            <p className="text-[#4B5B66] text-[17px] font-normal leading-[1.6]">
              اشترك في نشرتنا البريدية للحصول على دروس حصرية، ملحقات مجانية، وخصومات خاصة على
              منتجاتنا فور صدورها. بدون أي إزعاج.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

