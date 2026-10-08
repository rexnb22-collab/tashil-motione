export type PageId =
  | 'home'
  | 'store'
  | 'blog'
  | 'support'
  | 'about'
  | 'product'
  | 'refund-policy'
  | 'terms'
  | 'privacy'
  | 'admin';

export const WP_HOME_PAGE_META = {
  id: 22,
  date: '2026-07-21T10:00:26',
  date_gmt: '2026-07-21T10:00:26',
  guid: { rendered: 'https://tashilmotion.com/?page_id=22' },
  modified: '2026-07-28T13:50:17',
  modified_gmt: '2026-07-28T13:50:17',
  slug: 'home',
  status: 'publish',
  type: 'page',
  link: 'https://tashilmotion.com/',
  title: { rendered: 'الصفحة الرئيسية' },
  author: 1,
  class_list: ['post-22', 'page', 'type-page', 'status-publish', 'hentry'],
} as const;

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductTestimonial {
  name: string;
  title?: string;
  quote: string;
  rating?: number;
}

export interface ProductGalleryItem {
  url: string;
  title?: string;
  type?: 'image' | 'video';
}

export interface ProductSectionGroup {
  title: string;
  items: Array<{ title?: string; text: string }>;
}

export interface ProductStat {
  number: string;
  label: string;
  desc: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  price: string;
  originalPrice?: string;
  imageUrl?: string;
  visualType:
    | 'atheer-4k-en'
    | 'tashil-project'
    | 'ramadanyt'
    | 'atheer-wide-ar'
    | 'atheer-vertical-ar'
    | 'atheer-photoshop'
    | string;
  featured?: boolean;
  featuredBadge?: boolean;
  isFeaturedFilter?: boolean;
  category: string;
  breadcrumbCategory: string;
  compatibility: string;
  description: string;
  checkoutUrl: string;
  releaseDate: string;
  updateDate: string;
  supportedSoftware: string;
  tags: string[];
  heroSubtitle: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewSections?: ProductSectionGroup[];
  features: ProductFeature[];
  gallery: ProductGalleryItem[];
  testimonials: ProductTestimonial[];
  stats?: ProductStat[];
  relatedProductIds: string[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'atheer-4k-en',
    slug: 'athee-glass-effect-presets-4k-english-edition-premiere-pro-169-wide',
    title: 'Atheer ✨ Glass Effect Presets — 4K English Edition (Premiere Pro | 16:9 Wide)',
    price: '€39.99',
    visualType: 'atheer-4k-en',
    featured: true,
    featuredBadge: true,
    isFeaturedFilter: true,
    category: 'Mogrt (Motion Graphics)',
    breadcrumbCategory: 'Mogrt (Motion Graphics)',
    compatibility: 'Adobe Premiere Pro CC 2021+',
    description:
      'Introducing the Atheer ✨ 4K Glass Effect — English Edition. Re-engineered in native 4K resolution with 100% English controls, this pack brings sleek Apple-inspired glassmorphism, luxury frosted-glass textures, smooth refraction, and dynamic lighting reflections straight into your Adobe Premiere Pro workflow.',
    checkoutUrl: 'https://shop.tashilmotion.com/checkout/buy/0a431a76-eea7-4dff-be35-a780611ba4af',
    releaseDate: '2026-08-26',
    updateDate: '2026-08-30',
    supportedSoftware: 'Adobe CC 2026',
    tags: ['Mogrt', 'Premiere Pro', 'Glass Effect', '4K Ultra HD', 'Apple Style'],
    heroSubtitle: 'اربك عناء التصميم من الصفر. اختصر ساعات من العمل واحصل على نتائج احترافية بضغطة زر.',
    overviewTitle: 'ارتقِ بمشاريعك إلى المستوى التالي 🚀',
    overviewParagraphs: [
      'After huge success across the Middle East and thousands of content creators using the original version, Atheer Glass Effect is back — completely rebuilt from the ground up!',
      'Introducing the Atheer ✨ 4K Glass Effect — English Edition. Re-engineered in native 4K resolution with 100% English controls, this pack brings sleek Apple-inspired glassmorphism, luxury frosted-glass textures, smooth refraction, and dynamic lighting reflections straight into your Adobe Premiere Pro workflow.',
      'No heavy After Effects rendering required. Simply drag, drop, customize text, and publish.',
    ],
    overviewSections: [
      {
        title: '✨ What’s New in the 4K English Edition?',
        items: [
          {
            title: '100% English UI & Controls:',
            text: 'Designed specifically for international creators, editors, and agencies.',
          },
          {
            title: 'Native 4K Ultra HD Resolution (3840 x 2160):',
            text: 'Crystal-clear detail and crisp text rendering on high-res displays.',
          },
          {
            title: 'Fully Custom MOGRT Architecture:',
            text: 'Built inside After Effects and optimized for flawless performance inside Premiere Pro (.mogrt).',
          },
          {
            title: 'Enhanced Refraction & Glass Physics:',
            text: 'Realistic blur, depth, shine, and glossy lighting effects that react smoothly to your footage background.',
          },
        ],
      },
      {
        title: '📦 What’s Inside the Pack?',
        items: [
          {
            title: '💥 Big Chapter Titles:',
            text: 'High-impact chapter overlays with frosted glass backing.',
          },
          {
            title: '🎬 End Chapter Titles / Outro Cards:',
            text: 'Sleek closing graphics to keep viewers engaged till the end.',
          },
          {
            title: '🔔 Platform & Subscribe Callouts:',
            text: 'Modern social media popups (Subscribe, Like, Follow) designed in a premium glass style.',
          },
          {
            title: '🎙️ Podcast & Show Lower Thirds:',
            text: 'Elegant titles for hosts, guest names, and episode topics.',
          },
          {
            title: '📺 Transparent Welcome Overlay Cards (Glass Intro):',
            text: 'Give your video introductions a luxury broadcast feel instantly.',
          },
        ],
      },
      {
        title: '⚡ Key Features & Benefits:',
        items: [
          {
            title: 'Drag & Drop Simplicity:',
            text: 'Works natively in Adobe Premiere Pro via the Essential Graphics panel.',
          },
          {
            title: 'Fully Customizable:',
            text: 'Easily change text, fonts, colors, blur intensity, glass opacity, and scale with intuitive sliders.',
          },
          {
            title: 'No Third-Party Plugins Required:',
            text: '100% native assets — install and edit right away.',
          },
          {
            title: 'Universal 16:9 Aspect Ratio:',
            text: 'Optimized for widescreen formats (YouTube, TV, Documentaries, Masterclasses, Course Content).',
          },
          {
            title: 'Fast Rendering:',
            text: 'Lightly optimized MOGRT files to prevent timeline lag.',
          },
        ],
      },
      {
        title: '🎯 Who is this for?',
        items: [
          {
            title: 'YouTube Creators & Podcasters:',
            text: 'Upgrade your show’s visual identity with a professional broadcast look.',
          },
          {
            title: 'Video Editors & Freelancers:',
            text: 'Deliver high-end client projects in half the time.',
          },
          {
            title: 'Agencies & SaaS Brands:',
            text: 'Create modern, Apple-style promotional videos and product demos.',
          },
        ],
      },
    ],
    features: [
      {
        title: 'تعديل تلقائي وسريع',
        description: 'غيّر النصوص، الألوان، والعناصر بسهولة دون الحاجة لتعديل كل طبقة يدوياً.',
      },
      {
        title: 'تنظيم واحترافية عالية',
        description: 'طبقات مرتبة ومقسمة بوضوح لتسهيل الوصول لكل عنصر في مشروعك بغضون ثوانٍ',
      },
      {
        title: 'جودة وضمان استقرار',
        description: 'ملحقات مصممة بدقة 4K فائقة الجودة تضمن ثبات الحركة والأداء العالي في كل التصديرات.',
      },
      {
        title: 'توافق وسلاسة مطلقة',
        description: 'يعمل بسلاسة مع Adobe Premiere Pro و After Effects دون أي بطء أو حاجة لملحقات خارجية.',
      },
    ],
    gallery: [
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/ezgif-665d56d0bf74595a.webp',
        title: 'Glass Effect Showcase Preview',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Lower-Third-1.webp',
        title: 'Lower Third Showcase',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Main-Title.webp',
        title: 'Main Title Typography',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Overlay-Bakara-2-LEFT.webp',
        title: 'Side Frosted Glass Card',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Overlay-Box-Text-Quotes.webp',
        title: 'Box Text Quotes Overlay',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Overly-Screen-Content-Left.webp',
        title: 'Screen Content Left',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Responsive-Text-On-Circle.webp',
        title: 'Responsive Text On Circle',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-SM-Overlay-Follow-5.1.webp',
        title: 'Social Media Follow Callout',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-SM-Overlay-Subscribe-5.1.webp',
        title: 'YouTube Subscribe Callout',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Small-Overlay-Screen-Right-2-5.1.webp',
        title: 'Small Overlay Screen Right',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/08/Atheer-4K-English-Edition-Split-Screens-Skew-5.1.webp',
        title: 'Split Screens Skew',
      },
    ],
    testimonials: [
      {
        name: 'يوسف العتيبي',
        title: 'محرر فيديو مستقل',
        quote:
          'واجهت استفساراً بسيطاً عند ربط الملفات وتواصلت مع الدعم، تم الرد وحل المشكلة في دقائق معدودة. خدمة عملاء راقية ومنتجات على أعلى مستوى من الاحترافية.',
        rating: 5,
      },
      {
        name: 'سارة الخالد',
        title: 'مصممة جرافيك ومونتاج',
        quote:
          'التنسيق والتنظيم داخل الملفات ممتازان جداً، وسلسلة السحب والإفلات توفر الكثير من الجهد. بالإضافة إلى أن التحديثات المجانية تجعل المنتجات دائماً متواكبة مع أحدث الإصدارات.',
        rating: 5,
      },
      {
        name: 'أحمد الماجد',
        title: 'صانع محتوى تقني',
        quote:
          'جودة القوالب وسهولة الاستخدام غيرت أسلوب عملي بالكامل. أصبحت أستغرق نصف الوقت لإنجاز مشاريع المعقدة على After Effects. خيار لا غنى عنه لأي مصمم احترافي.',
        rating: 5,
      },
    ],
    relatedProductIds: [
      'atheer-vertical-ar',
      'atheer-wide-ar',
      'ramadanyt',
      'atheer-photoshop',
      'tashil-project',
    ],
  },
  {
    id: 'tashil-project',
    slug: 'tashilproject-project-structure-generator',
    title: 'TashilProject™ – Project Structure Generator',
    price: '€9.99',
    visualType: 'tashil-project',
    featured: true,
    featuredBadge: false,
    isFeaturedFilter: true,
    category: 'Software',
    breadcrumbCategory: 'Software',
    compatibility: 'Windows & macOS (Ae / Pr)',
    description:
      'أداة ذكية لإنشاء هيكل مجلدات مشاريع الموشن جرافيك والمونتاج الاحترافية بنقرة زر واحدة، لتوفير وقتك وحماية ملفاتك من الضياع.',
    checkoutUrl: 'https://shop.tashilmotion.com/checkout/buy/e05aa92c-38af-45b5-a08e-4bcde538e68b',
    releaseDate: '2026-07-28',
    updateDate: '2026-08-20',
    supportedSoftware: 'Windows & macOS (Ae / Pr)',
    tags: ['Desktop Tool', 'Automation', 'Workflow', 'Project Generator'],
    heroSubtitle: 'اختر الهيكل المناسب لروتين عملك وابدأ التوليد فوراً بضغطة زر.',
    overviewTitle: 'أنشئ هيكل مشروعك بضغطة واحدة فقط ⚡',
    overviewParagraphs: [
      'توقف عن إضاعة الساعات في إنشاء المجلدات المتكررة يدوياً. وفر وقتك، حافظ على تنظيمك، وابدأ الإبداع فوراً مع ™TashilProject مجاناً.',
      'صُممت أداة TashilProject لتلغي العشوائية من روتين عملك. قم بأتمتة إنشاء المجلدات، توحيد قواعد التسمية، والحفاظ على أصول مشروعك منظمة في مكان واحد بضغطة زر.',
    ],
    overviewSections: [
      {
        title: '💡 ماذا يفعل هذا التطبيق؟',
        items: [
          {
            title: 'ينشئ مجلدات منظمة تلقائيًا:',
            text: 'بناء هيكل المجلدات الفرعية والملفات الأساسية بناءً على معايير الصناعة وقواعد التسمية الاحترافية الموحدة.',
          },
          {
            title: 'يوفّر Workflows جاهزة حسب نوع العمل:',
            text: 'دعم كامل لمشاريع الموشن جرافيك، المونتاج، 3D، المؤثرات البصرية، وتطوير الويب.',
          },
          {
            title: 'يحفظ كل شيء مباشرة على جهازك:',
            text: 'أمان وخصوصية 100% دون الحاجة للاتصال بالإنترنت أو رفع أي ملفات للسحابة.',
          },
        ],
      },
    ],
    features: [
      {
        title: 'توليد تلقائي للمجلدات',
        description: 'بناء هيكل المجلدات الفرعية والملفات الأساسية بناءً على معايير الصناعة وقواعد التسمية الاحترافية.',
      },
      {
        title: 'تخصيص سير العمل',
        description: 'حرية كاملة في تحديد قوالبك الخاصة وإضافة المجلدات والامتدادات الحصرية لتناسب طبيعة كل مشروع.',
      },
      {
        title: 'حفظ محلي وآمن 100%',
        description: 'تظل جميع أصولك ومجلداتك محفوطة على قرصك المحلي تماماً دون رفع أي بيانات للإنترنت.',
      },
      {
        title: 'بساطة وسرعة بضغطة زر',
        description: 'أدخل اسم المشروع، اختر نوع العمل، وأنشئ الهيكل كاملاً في أقل من ثانية واحدة.',
      },
    ],
    stats: [
      {
        number: '500+',
        label: 'مستخدم نشط',
        desc: 'مصممو موشن ومحررو فيديو يعتمدون على الأداة يومياً لتنظيم مشاريعهم.',
      },
      {
        number: '99%',
        label: 'رضا المستخدمين',
        desc: 'تقييمات ممتازة من المبدعين والاستوديوهات بفضل السرعة والسهولة.',
      },
      {
        number: '1100+',
        label: 'مشروع مُولّد',
        desc: 'مجلدات تمت أتمتة بنائها وإدارتها بدون أخطاء التسمية العشوائية.',
      },
      {
        number: '100%',
        label: 'حماية وخصوصية',
        desc: 'جميع العمليات تتم محلياً على جهازك دون رفع أي بيانات للسحابة.',
      },
    ],
    gallery: [
      {
        url: '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-3-scaled.webp',
        title: 'واجهة أداة TashilProject الرئيسية',
      },
      {
        url: '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-4-scaled.webp',
        title: 'تخصيص مجلدات الموشن جرافيك',
      },
      {
        url: '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-5-scaled.webp',
        title: 'إدارة أصول الفيديو والصوتيات',
      },
      {
        url: '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-6-scaled.webp',
        title: 'بناء هياكل البرمجة والـ 3D',
      },
      {
        url: '/wp-content/uploads/2026/07/Carosello-TashilProject-copy-scaled.webp',
        title: 'توليد فوري بضغطة زر',
      },
    ],
    testimonials: [
      {
        name: 'Simo Ben',
        title: 'المؤسس ورائد الموشن جرافيك',
        quote:
          'التنظيم اليدوي هو عدو الإبداع الحقيقي. لقد قضيت سنوات في إنشاء المجلدات يدوياً لكل عميل، وكان ذلك الجزء الأكثر مللاً وتضيعاً للوقت. بنيت ™TashilProject لإلغاء هذا العناء للأبد والتركيز على الفن.',
        rating: 5,
      },
      {
        name: 'عمر التميمي',
        title: 'محرر فيديو مستقل',
        quote:
          'أداة رائعة اختصرت وقت البدء في كل مشروع جديد. الهياكل الجاهزة تعطي شعوراً رائعاً بالاحترافية والترتيب وتمنع فقدان الملفات أثناء المونتاج.',
        rating: 5,
      },
    ],
    relatedProductIds: [
      'atheer-4k-en',
      'atheer-wide-ar',
      'atheer-vertical-ar',
      'ramadanyt',
      'atheer-photoshop',
    ],
  },
  {
    id: 'ramadanyt',
    slug: 'ramadanyt-motion-🌙-رمضانيات-موشن-الحزمة-المتكاملة',
    title: "Ramadan'yt Motion – 🌙 رمضانيات موشن – الحزمة المتكاملة لمصممي",
    price: '€9.99',
    visualType: 'ramadanyt',
    featured: false,
    featuredBadge: false,
    isFeaturedFilter: false,
    category: 'Mogrt (Motion Graphics)',
    breadcrumbCategory: 'Mogrt (Motion Graphics)',
    compatibility: 'After Effects & Premiere Pro',
    description:
      'الحزمة المتكاملة لمصممي الموشن جرافيك والمونتاج لشهر رمضان المبارك، تضم مخطوطات متحركة، فوانيس، انتقالات، وعناصر زخرفية إسلامية.',
    checkoutUrl: 'https://shop.tashilmotion.com/checkout/buy/ca089c9d-c6d6-4041-b6ba-03e4a141f716',
    releaseDate: '2026-02-18',
    updateDate: '2026-02-19',
    supportedSoftware: 'Adobe CC 2025',
    tags: ['Ramadan', 'Calligraphy', 'Islamic Motion', 'Mogrt', 'After Effects'],
    heroSubtitle: 'ارتقِ بمحتواك البصري بلمسة احترافية تجمع بين جمال الخط العربي وعصر الموشن جرافيك.',
    overviewTitle: 'ارتقِ بمشاريعك إلى المستوى التالي 🚀',
    overviewParagraphs: [
      'ارتقِ بمحتواك البصري بلمسة احترافية تجمع بين جمال الخط العربي وعصر الموشن جرافيك.',
      'تضم حزمة رمضانيات موشن أكثر من 50 عنصراً متحركاً جاهزاً: مخطوطات رمضانية فخمة، هلال وفوانيس ثلاثية الأبعاد، انتقالات إسلامية ناعمة، وخلفيات متحركة مهيأة لبرامج Premiere Pro و After Effects.',
    ],
    features: [
      {
        title: 'مخطوطات عربية متحركة',
        description: 'عبارات رمضانية وإسلامية شهيرة مرسومة ومتحركة بأعلى جودة وجاهزة للسحب والإفلات.',
      },
      {
        title: 'عناصر زخرفية وفوانيس',
        description: 'زخارف إسلامية أصيلة وفوانيس متحركة بتقنيات حديثة لإضفاء طابع رمضاني دافئ.',
      },
      {
        title: 'انتقالات وخلفيات رمضانية',
        description: 'انتقالات سلسة وخلفيات متحركة لتعزيز المشاهد والبرامج والفواصل الإعلانية.',
      },
      {
        title: 'جاهزة للسحب والإفلات',
        description: 'تعمل مباشرة داخل Premiere Pro و After Effects دون أي مقابس خارجية إضافية.',
      },
    ],
    gallery: [
      {
        url: '/wp-content/uploads/2026/07/8611c556-ccb0-41e5-8a96-57c3ab0e1b20.jpg',
        title: 'غلاف حزمة رمضانيات موشن المتكاملة',
      },
      {
        url: '/media/233620/8611c556-ccb0-41e5-8a96-57c3ab0e1b20.png',
        title: 'مخطوطات وزخارف رمضانية احترافية',
      },
    ],
    testimonials: [
      {
        name: 'يوسف العتيبي',
        quote: 'استخدمت الحزمة في إنتاج برامج رمضانية لقناة يوتيوب، الجودة والإتقان خياليان واختصرا علي أياماً من العمل.',
        rating: 5,
      },
      {
        name: 'سارة الخالد',
        quote: 'المخطوطات العربية متحركة بسلاسة فائقة، متوافقة تماماً مع أحدث إصدارات بريمير وأفتر إفكتس.',
        rating: 5,
      },
      {
        name: 'أحمد الماجد',
        quote: 'أفضل حزمة رمضانية عربية رأيتها على الإطلاق من حيث الهوية والتنظيم.',
        rating: 5,
      },
    ],
    relatedProductIds: [
      'atheer-4k-en',
      'atheer-wide-ar',
      'tashil-project',
      'atheer-vertical-ar',
      'atheer-photoshop',
    ],
  },
  {
    id: 'atheer-wide-ar',
    slug: 'atheer-✨glass-effect-presets-premiere-pro-wide-16x9',
    title: 'Atheer ✨ Glass effect – Presets Premiere Pro (Wide 16×9)',
    price: '€34.99',
    visualType: 'atheer-wide-ar',
    featured: true,
    featuredBadge: true,
    isFeaturedFilter: true,
    category: 'Mogrt (Motion Graphics)',
    breadcrumbCategory: 'Mogrt (Motion Graphics)',
    compatibility: 'Adobe Premiere Pro CC 2021+',
    description:
      'حزمة أثير لتأثير الزجاج العربي الاحترافي داخل Premiere Pro بمقاس الفيديو العرضي 16×9، تدعم تخصيص الخطوط والألوان بالكامل.',
    checkoutUrl: 'https://shop.tashilmotion.com/checkout/buy/f1ae274e-8b92-4a84-964b-7fe68f52412d',
    releaseDate: '2025-11-04',
    updateDate: '2026-09-02',
    supportedSoftware: 'Adobe CC 2026',
    tags: ['Mogrt', 'Premiere Pro', 'Arabic Glass', 'Wide 16:9', 'Glassmorphism'],
    heroSubtitle: 'اربك عناء التصميم من الصفر. اختصر ساعات من العمل واحصل على نتائج احترافية بضغطة زر.',
    overviewTitle: 'ارتقِ بمشاريعك إلى المستوى التالي 🚀',
    overviewParagraphs: [
      'هل سئمت من تضييع الوقت على التأثيرات البصرية؟ ⏳ قدم تصميماتك كالمحترفين مع Atheer Platform Glass Effect Presets!',
      'احصل على تأثير الزجاج (Glass Effect) الأنيق والمُلهم من نظام Apple لتطوير فيديوهاتك وقنواتك على YouTube وبودكاستاتك بلمسة سينمائية راقية.',
      'لا حاجة لفتح After Effects أو الانتظار لساعات في الرندر؛ اسحب القالب وضعه على التايم لاين في Premiere Pro وعدل النصوص والخطوط بضغطة زر.',
    ],
    features: [
      {
        title: 'تعديل نصوص وخطوط عربية كامل',
        description: 'دعم كامل 100% للخطوط العربية الفاخرة مثل thmanyah والمحاذاة التلقائية دون أخطاء تشبيك.',
      },
      {
        title: 'تخصيص الألوان والشفافية',
        description: 'تحكم سلس بقوة الانكسار والضبابية (Blur) واللمعان الزجاجي وانعكاسات الإضاءة.',
      },
      {
        title: 'أداء خفيف ورندر سريع',
        description: 'ملفات MOGRT محسنة هندسياً تمنع بطء التايم لاين وتضمن سلاسة التشغيل أثناء المونتاج.',
      },
      {
        title: 'استخدام تجاري مرخص',
        description: 'رخصة استخدام مرنة تغطي مشاريعك الشخصية وتجارية العملاء بدون قيود معقدة.',
      },
    ],
    gallery: [
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-Glass-Effect-—-Arabic-Edition-scaled.webp',
        title: 'حزمة أثير بالعربية بمقاس العرض 16:9',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-Overlay-Bakara-2_1.webp',
        title: 'بطاقات وعناوين زجاجية جانبية',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-Overlay-Box-Text-Quotes_1.webp',
        title: 'صناديق نصوص واقتباسات زجاجية',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-Overly-Screen-Content-Rght-V2-4.2_1_1.webp',
        title: 'عناصر عرض المحتوى والشاشات',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-SM-Overlay-Subscribe-5.1_1.webp',
        title: 'أزرار اشتراك يوتيوب بنمط الزجاج',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-SM-Overlay-Follow-5.1_1.webp',
        title: 'دعوات متابعة منصات التواصل',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-Split-Screens-Skew-4.1_1_1.webp',
        title: 'شاشات منقسمة ومائلة Split Screens',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-Small-Overlay-Screen-Right-4.2-_1.webp',
        title: 'شاشة صغيرة لعرض الإحصائيات',
      },
      {
        url: 'https://tashilmotion.com/wp-content/uploads/2026/07/Ater-4K-Small-Overlay-Screen-Left-4.2-Full-CTRL_1.webp',
        title: 'تحكم كامل بالموقع والتدوير والشفافية',
      },
    ],
    testimonials: [
      {
        name: 'يوسف العتيبي',
        quote: 'أفضل حزمة جربتها في بريمير برو. تأثير الزجاج واقعي جداً ويضفي طابعاً فخماً على فيديوهات اليوتيوب.',
        rating: 5,
      },
      {
        name: 'سارة الخالد',
        quote: 'التعديل من Essential Graphics في غاية البساطة والسرعة، والخطوط العربية تظهر بشكل مثالي.',
        rating: 5,
      },
      {
        name: 'أحمد الماجد',
        quote: 'أنصح بها بشدة لكل صانع محتوى يبحث عن أسلوب آبل ومظاهر الزجاج الفاخرة.',
        rating: 5,
      },
    ],
    relatedProductIds: [
      'atheer-4k-en',
      'atheer-vertical-ar',
      'tashil-project',
      'ramadanyt',
      'atheer-photoshop',
    ],
  },
  {
    id: 'atheer-vertical-ar',
    slug: 'atheer-✨glass-effect-presets-premiere-pro-vertical-pack-9x16',
    title: 'Atheer ✨ Glass effect – Presets Premiere Pro (Vertical Pack 9×16)',
    price: '€34.99',
    visualType: 'atheer-vertical-ar',
    featured: false,
    featuredBadge: false,
    isFeaturedFilter: true,
    category: 'Mogrt (Motion Graphics)',
    breadcrumbCategory: 'Mogrt (Motion Graphics)',
    compatibility: 'Adobe Premiere Pro CC 2021+',
    description:
      'نسخة خاصة بمقاطع الريلز والشورتس والتيك توك (9×16) من حزمة تأثير الزجاج العربي لبرنامج Premiere Pro.',
    checkoutUrl: 'https://shop.tashilmotion.com/checkout/buy/b23e2be3-ff88-4e81-9c1e-a508fe912a90',
    releaseDate: '2025-11-06',
    updateDate: '2026-08-27',
    supportedSoftware: 'Adobe CC 2025',
    tags: ['Reels', 'Shorts', 'TikTok', 'Vertical 9:16', 'Mogrt'],
    heroSubtitle: 'حزمة أثير الطولية المخصصة لمقاطع الريلز، الشورتس، والتيك توك بتأثيرات الزجاج الحديثة.',
    overviewTitle: 'ارتقِ بمشاريعك إلى المستوى التالي 🚀',
    overviewParagraphs: [
      '🎬 Atheer Vertical Pack v3.5 من TashilMotion: أول حزمة MOGRT مصممة خصيصًا للفيديوهات العمودية مثل Reels، Shorts، TikTok.',
      'تقدر تضيف عناوين متحركة احترافية بسهولة داخل Premiere Pro لتجذب انتباه المشاهد في أول ثانية وتزيد من معدل إكمال الفيديو وتفاعله.',
    ],
    features: [
      {
        title: 'مقاس عمودي مثالي 9×16',
        description: 'مضبوط خصيصاً ليناسب هواتف المشاهدين بدون اقتصاص أو تشويه.',
      },
      {
        title: 'تحريك سريع وخاطف للأنظار',
        description: 'انتقالات وعناوين زجاجية تفاعلية ترفع من مدة المشاهدة والتفاعل.',
      },
      {
        title: 'تعديل فوري من Essential Graphics',
        description: 'تغيير النصوص، الخطوط، الألوان، وأماكن العناصر بسلاسة تامة.',
      },
      {
        title: 'ملفات خفيفة للرندر السريع',
        description: 'تصدير فوري بدون انتظار لتسريع نشر محتواك اليومي على المنصات.',
      },
    ],
    gallery: [
      {
        url: '/media/233620/15093890-2299-47e9-8f93-30ef8ea59123.png',
        title: 'حزمة أثير الرأسية للريلز والتيك توك',
      },
      {
        url: 'https://cdn.lemonsqueezy.com/media/233620/15093890-2299-47e9-8f93-30ef8ea59123.png?fit=contain&format=auto&height=1000&ixlib=php-3.3.1&width=1000',
        title: 'معاينة القوالب العمودية 9:16',
      },
    ],
    testimonials: [
      {
        name: 'يوسف العتيبي',
        quote: 'القوالب الطولية ضاعفت جودة مقاطع الريلز على حسابي وجعلتها تبدو مثل إنتاجات الاستوديوهات العالمية.',
        rating: 5,
      },
      {
        name: 'سارة الخالد',
        quote: 'التحكم السريع في حجم وموضع العناصر الزجاجية جعل عملي على مقاطع التيك توك أسرع بمرتين.',
        rating: 5,
      },
      {
        name: 'أحمد الماجد',
        quote: 'منتج أساسي لكل صانع محتوى رأسي يبحث عن التميز والسرعة.',
        rating: 5,
      },
    ],
    relatedProductIds: [
      'atheer-wide-ar',
      'atheer-4k-en',
      'tashil-project',
      'ramadanyt',
      'atheer-photoshop',
    ],
  },
  {
    id: 'atheer-photoshop',
    slug: 'atheer-glass-effect-photoshop-only-🎨',
    title: 'Atheer Glass effect – 🎨 Photoshop (Only)',
    price: '€14.99',
    visualType: 'atheer-photoshop',
    featured: false,
    featuredBadge: false,
    isFeaturedFilter: false,
    category: 'Photoshop',
    breadcrumbCategory: 'Photoshop',
    compatibility: 'Adobe Photoshop CC',
    description:
      'قوالب تأثير الزجاج الاحترافية المصممة خصيصاً لبرنامج Adobe Photoshop لتصميم البوستات والصور المصغرة بلمسة عصرية.',
    checkoutUrl: 'https://shop.tashilmotion.com/checkout/buy/8a84c74e-64a2-4576-b292-6daea398a245',
    releaseDate: '2025-11-10',
    updateDate: '2026-08-14',
    supportedSoftware: 'Adobe CC 2021+',
    tags: ['Photoshop', 'PSD', 'Glass Effect', 'Thumbnails', 'Social Media'],
    heroSubtitle: 'ارتقِ بتصاميم السوشيال ميديا والصور المصغرة في فوتوشوب بلمسة الزجاج الفاخرة.',
    overviewTitle: 'ارتقِ بمشاريعك إلى المستوى التالي 🚀',
    overviewParagraphs: [
      'هل ترغب بإضافة لمسة احترافية وفخمة على صورك أو تصاميمك في Photoshop؟',
      'قالب Atheer Glass Effect من TashilMotion يمنحك تأثير الزجاج العصري الذي يشبه الإضاءة الواقعية المستخدمة في أفخم الحملات الإعلانية وتصاميم واجهات Apple.',
      'طبقات ذكية (Smart Objects) قابلة للتعديل بسهولة، مع تأثيرات انكسار واقعية وضبابية ناعمة تحول أي تصميم عادي إلى عمل فني فاخر.',
    ],
    features: [
      {
        title: 'Smart Objects سهلة الاستبدال',
        description: 'انقر نقراً مزدوجاً، ضع تصميمك أو صورتك، واحفظ لترى النتيجة فوراً.',
      },
      {
        title: 'تأثير زجاجي متطور',
        description: 'محاكاة دقيقة لانعكاسات الضوء والشفافية الواقعية مع خلفيات تصاميمك.',
      },
      {
        title: 'دقة عالية للتصميم والطباعة',
        description: 'ملفات عالية الجودة بدقة 300 DPI مناسبة للنشر الرقمي والمطبوعات.',
      },
      {
        title: 'توافق كامل مع Photoshop CC',
        description: 'يعمل على مختلف إصدارات فوتوشوب الحديثة بدون إضافات خارجية.',
      },
    ],
    gallery: [
      {
        url: '/media/233620/33ea3b91-58aa-4810-adce-ab59beb3dc5d.jpg',
        title: 'قوالب تأثير الزجاج لفوتوشوب',
      },
      {
        url: 'https://cdn.lemonsqueezy.com/media/233620/33ea3b91-58aa-4810-adce-ab59beb3dc5d.jpg?fit=contain&format=auto&height=1000&ixlib=php-3.3.1&width=1000',
        title: 'معاينة التصاميم والبوسترات الزجاجية',
      },
    ],
    testimonials: [
      {
        name: 'يوسف العتيبي',
        quote: 'التأثير الزجاجي في فوتوشوب يبدو واقعياً للغاية ومناسباً جداً لصور اليوتيوب المصغرة (Thumbnails).',
        rating: 5,
      },
      {
        name: 'سارة الخالد',
        quote: 'السمارت أوبجكتس منظمة بشكل يسهل تعديل الألوان والخلفيات بنقرة واحدة.',
        rating: 5,
      },
      {
        name: 'أحمد الماجد',
        quote: 'قالب ممتاز يوفر ساعات من محاكاة الانعكاسات والإضاءات يدوياً.',
        rating: 5,
      },
    ],
    relatedProductIds: [
      'atheer-wide-ar',
      'atheer-4k-en',
      'tashil-project',
      'ramadanyt',
      'atheer-vertical-ar',
    ],
  },
];

export interface BlogPost {
  id: string;
  postId: number;
  url: string;
  title: string;
  date: string;
  author: string;
  category: string;
  visualType: 'folders-guide' | 'google-fonts' | 'welcome-tashil';
  excerpt: string;
  readTime: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'google-fonts-guide',
    postId: 310,
    url: 'https://tashilmotion.com/how-to-install-google-fonts/',
    title: 'كيفية البحث عن الخطوط في Google Fonts وتثبيتها على جهازك | دليل شامل',
    date: 'August 3, 2026',
    author: 'TashilMotion',
    category: 'أخبار وتحديثات',
    visualType: 'google-fonts',
    readTime: '5 دقائق',
    excerpt:
      'تعتبر الخطوط (Fonts) أحد أهم العناصر البصرية في تصميم الموشن جرافيك والمونتاج. فمهما كانت جودة التحريك والتأثيرات عالية، اختيار الخط الخاطئ قد يفسد الهوية البصرية لمشروعك بالكامل. لحسن الحظ، توفر شركة جوجل مكتبة Google Fonts المجانية الضخمة التي...',
    content: [
      'تعتبر الخطوط (Fonts) أحد أهم العناصر البصرية في تصميم الموشن جرافيك والمونتاج. فمهما كانت جودة التحريك والتأثيرات عالية، اختيار الخط الخاطئ قد يفسد الهوية البصرية لمشروعك بالكامل. لحسن الحظ، توفر شركة جوجل مكتبة Google Fonts المجانية الضخمة التي تحتوي على مئات الخطوط الاحترافية المجانية والتجاريّة.',
      'في هذا الدليل الشامل، سنتعرف خطوة بخطوة على كيفية البحث عن الخطوط المناسبة، تنزيلها، وتثبيتها على نظام التشغيل Windows أو Mac لتظهر فوراً في برامج Adobe مثل After Effects و Premiere Pro.',
      'الخطوة الأولى: البحث عن الخط المناسب في Google Fonts — 1. افتح متصفح الإنترنت واذهب إلى موقع Google Fonts. 2. استخدم حقل البحث (Search) في الأعلى لكتابة اسم خط معين إذا كنت تعرفه مسبقاً (مثل: Cairo, Tajawal, Readex Pro). 3. يمكنك تصفية الخطوط حسب اللغة من قائمة Language (اختر Arabic لظهور الخطوط العربية فقط). 4. يمكنك تجربة كتابة نصك الخاص في حقل Type something لترى كيف سيبدو النص بالخط المختار قبل تنزيله.',
      '💡 نصيحة للمبدعين: عند اختيار خط لمشاريع الموشن جرافيك، ابحث عن الخطوط التي تحتوي على أوزان متعددة (Regular, Medium, Bold, ExtraBold) لتمنحك مرونة أكبر أثناء التحريك والتنسيق.',
      'الخطوة الثانية: تنزيل ملف الخط إلى جهازك — 1. انقر على اسم الخط الذي يعجبك للوصول إلى صفحة التفاصيل الخاصة به. 2. في أعلى الصفحة على اليمين، اضغط على زر Download Family. 3. سيتم تنزيل ملف مضغوط بصيغة .zip يحتوي على جميع أوزان الخط وملحقاته.',
      'الخطوة الثالثة: فك الضغط وتثبيت الخط (Install) — على نظام ويندوز (Windows): افتح مجلد Downloads ثم قم بفك الضغط عن الملف (Right Click ➔ Extract All)، حدد جميع ملفات الخطوط ذات امتداد .ttf أو .otf، واضغط بزر الماوس الأيمن واختر Install. على نظام ماك (Mac): افتح الملف المضغوط وفك الضغط عنه، انقر مرتين (Double Click) على ملف الخط، وستفتح لك نافذة Font Book، اضغط على Install Font.',
      'الخطوة الرابعة: استخدام الخط داخل برامج التصميم — بعد التثبيت مباشرة: افتح برنامجك المفضل (مثل Adobe After Effects, Premiere Pro, أو Photoshop)، اختر أداة النص (Text Tool)، وابحث عن اسم الخط الذي قمت بتنزيله من قائمة الخطوط وسيعمل فوراً دون الحاجة لإعادة تشغيل الجهاز.',
      'استخدام الخطوط الاحترافية والمناسبة لسياق الفيديو يعكس مدى احترافيتك كمصمم موشن جرافيك أو صانع محتوى. نوصي دائماً بالاعتماد على خطوط Google Fonts لأنها مرخصة للاستخدام التجاري والشخصي مجاناً 100% ولا تسبب مشاكل في الحقوق. إذا كنت تريد أتمتة وتنظيم ملفات مشاريعك بالكامل وتوفير وقتك، لا تنسَ تجربة أداة TashilProject لتوليد هياكل المجلدات بضغطة زر!',
    ],
  },
  {
    id: 'organize-motion-folders',
    postId: 313,
    url: 'https://tashilmotion.com/how-to-organize-motion-graphics-project-folders/',
    title: 'كيف تنظم مجلدات مشاريع الموشن جرافيك والمونتاج؟ | دليل احترافي',
    date: 'August 3, 2026',
    author: 'TashilMotion',
    category: 'Generale',
    visualType: 'folders-guide',
    readTime: '6 دقائق',
    excerpt:
      'هل سبق لك أن فتحت مشروعاً قديماً وبقيت تبحث لمدة ساعة عن ملف صوتي أو أيقونة معينة؟ أو هل واجهت رسالة الخطأ المزعجة "Missing Files" في أفترافيكس أو بريمير بسبب نقل ملف من مكانه؟ الفوضى في المجلدات هي السبب الأول في إهدار وقت المصمم وتشتيت...',
    content: [
      'هل سبق لك أن فتحت مشروعاً قديماً وبقيت تبحث لمدة ساعة عن ملف صوتي أو أيقونة معينة؟ أو هل واجهت رسالة الخطأ المزعجة "Missing Files" في أفترافيكس أو بريمير بسبب نقل ملف من مكانه؟',
      'الفوضى في المجلدات هي السبب الأول في إهدار وقت المصمم وتشتيت تركيزه أثناء العمل. الترتيب الاحترافي ليس مجرد شكل جمالي، بل هو نظام يحميك من ضياع الملفات، ويسهل التعاون مع العملاء أو فريق العمل. في هذا المقال، سنكشف لك هيكل المجلدات المعتمد في أكبر الاستوديوهات العالمية وطريقة تطبيقه بضغطة زر.',
      'الخطوة الأولى: الهيكل الخماسي القياسي للمشاريع (Standard Structure) — لأي مشروع موشن جرافيك أو مونتاج، ينبغي أن يحتوي المجلد الرئيسي للمشروع على 5 مجلدات فرعية أساسية مرتبة بالأرقام لضمان التسلسل: 1. 01_Assets (الأصول والمعطيات: Logos، Vectors، Brand_Guidelines) — 2. 02_Footage (ملفات الفيديو والصور: Videos، Images) — 3. 03_Audio (الصوتيات: VO، Music، SFX) — 4. 04_Projects (ملفات العمل المباشرة مثل .aep، .prproj، أو .psd) — 5. 05_Exports (المخرجات والرندر: Previews، Final_Render).',
      'الخطوة الثانية: قواعد التسمية الصارمة (Naming Conventions) — التسميات العشوائية مثل final_v2_final_FINAL.aep هي كابوس حقيقي! بدلاً من ذلك، اتبع القاعدة الاحترافية: [اسم العميل]_[اسم المشروع]_[التاريخ أو رقم النسخة] (مثال: TashilMotion_PromoVideo_v01.aep). تلميح: استخدم دائماً الشريطة السفلية (_) بدلاً من المسافات لضمان عدم حدوث أخطاء عند نقل الملفات بين أنظمة التشغيل (Windows & Mac).',
      'الخطوة الثالثة: الأتمتة – كيف تبني هذا الهيكل في ثوانٍ؟ — إنشاء هذه المجلدات والمجلدات الفرعية يدوياً لكل مشروع جديد يستهلك الكثير من الوقت والجهد المكرر. باستخدام أداة TashilProject™، يمكنك بنقرة واحدة فقط توليد هذا الهيكل كاملاً ومخصصاً حسب تخصصك (موشن جرافيك، مونتاج، 3D، أو برمجة) مع حفظ كل شيء محلياً على جهازك وبأعلى معايير الأمان.',
      'خاتمة — الاحترافية تبدأ من كواليس العمل. عندما تدرب نفسك على تنظيم المجلدات وتوحيد التسميات، ستلاحظ زيادة فورية في سرعة إنتاجك وارتياحاً نفسياً كبيراً أثناء التعامل مع المشاريع الضخمة. 💡 هل تريد تجربة التوليد التلقائي للمجلدات فوراً؟ جرب أداة TashilProject™ المجانية وابدأ مشروعك القادم بأسلوب الاستوديوهات العالمية!',
    ],
  },
  {
    id: 'welcome-to-tashilmotion',
    postId: 34,
    url: 'https://tashilmotion.com/%d9%85%d8%b1%d8%ad%d8%a8%d8%a7-%d8%a7%d9%86%d8%aa-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d9%83%d8%a7%d9%86-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b3%d8%a8-%d9%84%d8%aa%d8%b3%d9%87%d9%8a%d9%84-%d8%a7%d8%a8/',
    title: 'أهلاً بكم في منصة تسهيل موشن (Tashil Motion)',
    date: 'July 21, 2026',
    author: 'TashilMotion',
    category: 'Generale',
    visualType: 'welcome-tashil',
    readTime: '3 دقائق',
    excerpt:
      'يسعدنا جدًا أن نرحب بكم في انطلاقتنا الرسمية؛ المنصة العربية الأولى المصممة خصيصًا لدمج سحر التصميم المرئي وقوة الحلول البرمجية الذكية، بهدف إعادة...',
    content: [
      'يسعدنا جدًا أن نرحب بكم في انطلاقتنا الرسمية؛ المنصة العربية الأولى المصممة خصيصًا لدمج سحر التصميم المرئي وقوة الحلول البرمجية الذكية، بهدف إعادة تعريف إنتاجيتك الرقمية واختصار مئات الساعات من العمل المعقد.',
      'إذا كنت صانع محتوى، مونتير، مصمم، أو رائد أعمال تبحث عن نقل إنتاجك البصري إلى مستوى الاحتراف العالمي وبأقل مجهود ممكن، فقد وصلت إلى وجهتك الصحيحة.',
      '💡 لماذا تم إنشاء "تسهيل موشن"؟ — في عالم صناعة المحتوى المتسارع، نعلم أن الوقت هو أثمن ما تملك. الكثير من المبدعين يقضون ساعات طويلة في بناء تأثيرات بصرية معقدة أو تنسيق النصوص والخطوط العربية داخل برامج المونتاج. من هنا جاءت فكرتنا: نحن نُبرمج الأفكار.. لنُسهّل الإبداع. 🛠️ لقد قمنا ببناء هذه المنصة لتكون جسرًا يربط بين التصميم المتقدم (Motion Graphics) والأتمتة البرمجية (Automation & Scripts)، لنوفر لك أدوات وحزمًا جاهزة بمرونة مطلقة ومظهر سينمائي فاخر.',
      '🚀 ماذا ينتظركم في المنصة؟ — أحدث الحزم الاحترافية: استعراض وشروحات لأحدث إنتاجاتنا من قوالب الحركة وجيل الـ MOGRT المطور، وعلى رأسها حزمتنا الأيقونية الجديدة Atheer 5.0 بتأثيراتها الزجاجية الفاخرة ودعمها الكامل للمحتوى السينمائي والطولي (Reels/TikTok). الحلول البرمجية والسكربتات: أدوات مخصصة قمنا ببرمجتها لأتمتة المهام المعقدة وتسريع سير العمل داخل Adobe Premiere Pro و After Effects. دعم كامل ومثالي للغة العربية بنسبة 100%، وخاصة الخطوط الفاخرة المعتمدة مثل خط "thmanyah". ملحقات وهدايا مجانية (Freebies) متجددة دائماً.',
      '🤝 انضموا إلى مجتمعنا الآن — هذه مجرد البداية، والقادم يحمل الكثير من المفاجآت والأدوات الثورية التي نطورها خلف الكواليس لتغيير الطريقة التي تنتجون بها مقاطع الفيديو الخاصة بكم. شكرًا لثقتكم، ودعونا نبدأ رحلة الإبداع معًا! 🙌',
    ],
  },
];

export interface SupportFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SUPPORT_FAQS: SupportFaqItem[] = [
  {
    id: 'faq-1',
    question: 'ما هي حزم ومخرجات Tashilmotion؟',
    answer:
      'نحن في تسهيل موشن نبتكر جيلًا جديدًا من قوالب الحركة (MOGRT) المتقدمة، الحزم السينمائية (مثل حزمة أثير)، السكربتات الذكية، والحلول البرمجية (SaaS) المصممة خصيصًا لأتمتة سير العمل وتسريع الإنتاج البصري للمصممين وصناع المحتوى.',
  },
  {
    id: 'faq-2',
    question: '2. هل تدعم القوالب الخطوط العربية بشكل صحيح؟',
    answer:
      'نعم، بنسبة 100%. جميع قوالبنا مبرمجة ومجهزة هندسيًا لتدعم المحاذاة وتنسيق النصوص العربية دون أي أخطاء في تشبيك الحروف، وهي متوافقة تمامًا مع الخطوط الرسمية الفاخرة مثل خط "thmanyah" المعتمد.',
  },
  {
    id: 'faq-3',
    question: '3. هل يمكنني استخدام القوالب في المشاريع التجارية؟',
    answer:
      'نعم. عند شراء أي حزمة أو قالب من متجرنا، ستحصل على ترخيص يتيح لك استخدام الأدوات في مشاريعك الشخصية والتجارية (مثل الفيديوهات المدفوعة، إعلانات العملاء، وبرامج البودكاست) وفقًا لشروط رخصة المنتج المحددة عند الشراء.',
  },
  {
    id: 'faq-4',
    question: 'ما هي البرامج المتوافقة مع أدواتكم وقوالبكم؟',
    answer:
      'قوالب الـ MOGRT والحزم الاحترافية لدينا مصممة ومطورة للعمل بشكل أساسي وسلس على برنامج Adobe Premiere Pro (وتدعم أحدث الإصدارات)، بينما السكربتات والإضافات مخصصة لأتمتة العمل داخل بيئات أدوبي المختلفة مثل After Effects.',
  },
  {
    id: 'faq-5',
    question: 'هل تدعم الحزم مقاطع الفيديو الطولية (Reels / Shorts)؟',
    answer:
      'بالتأكيد. الحزم المطورة لدينا (مثل إصدارات حزمة أثير الحديثة) تأتي بمرونة مطلقة وتدعم كلا المقاسين: المحتوى السينمائي العريض (Wide 16:9) والمحتوى الطولي المخصص لمنصات التواصل الاجتماعي مثل Instagram Reels وTikTok.',
  },
  {
    id: 'faq-6',
    question: 'كيف يمكنني تخصيص الألوان والخطوط داخل القوالب؟',
    answer:
      'بمنتهى السهولة وبنقرة زر واحدة. من خلال لوحة التحكم الذكية (Essential Graphics) داخل برنامج المونتاج، يمكنك تعديل النصوص، اختيار الخطوط، التحكم في لوحة الألوان الديناميكية، وضبط تأثيرات الشفافية والعمق الزجاجي.',
  },
  {
    id: 'faq-7',
    question: 'ما هي سياسة الاستبدال والاسترجاع للمنتجات؟',
    answer:
      'بناءً على طبيعة المنتجات الرقمية (التي يمكن تحميلها واستهلاكها فورًا بعد الشراء)، فإن جميع المبيعات نهائية وغير قابلة للاسترداد أو الإلغاء بمجرد إتمام عملية الدفع والحصول على رابط التحميل، وذلك لحماية حقوق الملكية الفكرية للأدوات والبرمجيات.',
  },
  {
    id: 'faq-8',
    question: 'كيف أحصل على التحديثات الجديدة للحزم التي اشتريتها؟',
    answer:
      'بمجرد إطلاق إصدار جديد أو تحديث برميجي لحزمة قمت بشرائها سابقًا، ستصلك رسالة إشعار تلقائية عبر بريدك الإلكتروني المسجل لدينا تحتوي على تفاصيل التحديث وروابط التحميل الجديدة مجانًا أو وفقًا لشروط الترقية.',
  },
  {
    id: 'faq-9',
    question: 'كيف يمكنني التواصل معكم إذا واجهت مشكلة تقنية؟',
    answer:
      'يسعدنا دائمًا مساعدتك! يمكنك التواصل مع فريق الدعم الفني مباشرة عبر ملء النموذج الموجود في هذه الصفحة (Contact Form)، أو إرسال رسالة مباشرة إلى بريدنا الرسمي: support@tashilmotion.com.',
  },
];
