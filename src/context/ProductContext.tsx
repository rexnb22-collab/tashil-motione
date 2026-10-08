import React, { createContext, useContext, useEffect, useState } from 'react';
import { PRODUCTS, ProductItem } from '../data/siteData';

interface ProductContextType {
  products: ProductItem[];
  addProduct: (productData: Partial<ProductItem>) => ProductItem;
  updateProduct: (id: string, updates: Partial<ProductItem>) => void;
  deleteProduct: (id: string) => void;
  toggleFeatured: (id: string) => void;
  resetToDefault: () => void;
  exportJson: () => string;
  importJson: (jsonString: string) => boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const STORAGE_KEY = 'tashil_custom_products';

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\u0621-\u064A\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved products from localStorage:', e);
    }
    return PRODUCTS;
  });

  // Save to localStorage whenever products state updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (e) {
      console.error('Failed to save products to localStorage:', e);
    }
  }, [products]);

  const addProduct = (data: Partial<ProductItem>): ProductItem => {
    const timestamp = Date.now();
    const id = data.id || `custom-product-${timestamp}`;
    const slug = data.slug || (data.title ? slugify(data.title) : `product-${timestamp}`);
    const today = new Date().toISOString().split('T')[0];

    const newProduct: ProductItem = {
      id,
      slug,
      title: data.title || 'منتج جديد بدون عنوان',
      price: data.price?.startsWith('€') || data.price?.startsWith('$') ? data.price : `€${data.price || '19.99'}`,
      originalPrice: data.originalPrice,
      imageUrl: data.imageUrl,
      visualType: data.visualType || 'tashil-project',
      featured: data.featured ?? true,
      featuredBadge: data.featuredBadge ?? data.featured ?? true,
      isFeaturedFilter: data.isFeaturedFilter ?? data.featured ?? true,
      category: data.category || 'Mogrt (Motion Graphics)',
      breadcrumbCategory: data.breadcrumbCategory || data.category || 'Mogrt (Motion Graphics)',
      compatibility: data.compatibility || 'Adobe CC 2021+',
      description: data.description || 'قالب موشن جرافيك احترافي مصمم لتسريع سير العمل وتقديم نتائج بصرية مبهرة.',
      checkoutUrl: data.checkoutUrl || 'https://shop.tashilmotion.com/',
      releaseDate: data.releaseDate || today,
      updateDate: data.updateDate || today,
      supportedSoftware: data.supportedSoftware || 'Adobe After Effects / Premiere Pro',
      tags: data.tags && data.tags.length > 0 ? data.tags : ['Mogrt', 'Motion Graphics', 'جديد'],
      heroSubtitle: data.heroSubtitle || 'اختصر ساعات من العمل واحصل على نتائج احترافية بضغطة زر واحدة.',
      overviewTitle: data.overviewTitle || 'ارتقِ بمشاريعك إلى المستوى التالي 🚀',
      overviewParagraphs: data.overviewParagraphs && data.overviewParagraphs.length > 0
        ? data.overviewParagraphs
        : [
            data.description || 'قالب موشن جرافيك عالي الجودة متوافق مع أحدث برامج المونتاج.',
            'سهل التخصيص والاستخدام مباشرة عبر لوحة التحكم بنقرة زر واحدة دون الحاجة إلى خبرة برمجية مسبقة.'
          ],
      overviewSections: data.overviewSections,
      features: data.features && data.features.length > 0
        ? data.features
        : [
            { title: 'جاهز للاستخدام الفوري', text: 'اسحب القالب إلى التايم لاين واستمتع بالتحريك الفوري.' },
            { title: 'تحكم كامل بالألوان والنصوص', text: 'خصص كل التفاصيل بسهولة تامة لتلائم هويتك البصرية.' },
            { title: 'دقة واحترافية عالية', text: 'مُصمم ومُختبر للعمل بدون أخطاء رندر وبكفاءة قصوى.' },
            { title: 'دعم وتحديثات مجانية', text: 'شروحات وافية ودعم فني مخصص للمساعدة في أي استفسار.' },
          ],
      gallery: data.gallery && data.gallery.length > 0
        ? data.gallery
        : data.imageUrl
        ? [{ id: 'main-view', type: 'image', url: data.imageUrl, title: data.title || 'معاينة القالب' }]
        : [],
      testimonials: data.testimonials || [
        {
          name: 'مستخدم معتمد',
          role: 'Motion Designer',
          comment: 'قالب ممتاز واحترافي جداً، وفر علي ساعات طويلة من العمل اليدوي!',
          stars: 5,
        },
      ],
      stats: data.stats,
      relatedProductIds: data.relatedProductIds || ['atheer-4k-en', 'tashil-project', 'ramadanyt'],
    };

    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id: string, updates: Partial<ProductItem>) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...updates,
            updateDate: new Date().toISOString().split('T')[0],
          };
        }
        return item;
      })
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFeatured = (id: string) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextVal = !item.featured;
          return {
            ...item,
            featured: nextVal,
            featuredBadge: nextVal,
            isFeaturedFilter: nextVal,
          };
        }
        return item;
      })
    );
  };

  const resetToDefault = () => {
    setProducts(PRODUCTS);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportJson = (): string => {
    return JSON.stringify(products, null, 2);
  };

  const importJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setProducts(parsed);
        return true;
      }
    } catch (e) {
      console.error('Failed to import products JSON:', e);
    }
    return false;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleFeatured,
        resetToDefault,
        exportJson,
        importJson,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
