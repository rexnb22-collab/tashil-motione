/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BlogPost, PageId, ProductItem } from './data/siteData';
import { ProductProvider, useProducts } from './context/ProductContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { Footer, Navbar } from './components/LayoutChrome';
import { HomePage } from './pages/HomePage';
import { StorePage } from './pages/StorePage';
import { BlogPage } from './pages/BlogPage';
import { SupportPage } from './pages/SupportPage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { PolicyPage } from './pages/PolicyPage';
import { AdminPage } from './pages/AdminPage';
import {
  BlogReaderModal,
  CartModal,
  PolicyModal,
  ProductModal,
} from './components/InteractiveModals';

function TashilAppContent() {
  const { products } = useProducts();
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(() => products[0] || null);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [policyTitle, setPolicyTitle] = useState<string | null>(null);

  // Synchronize hash routing (e.g., #product/slug, #admin, #refund-policy, or #store)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      if (hash.startsWith('product/') || hash.startsWith('product-')) {
        const idOrSlug = hash.replace(/^(product\/|product-)/, '');
        let decoded = idOrSlug;
        try {
          decoded = decodeURIComponent(idOrSlug);
        } catch (_) {}

        const found = products.find(
          (p) =>
            p.id === idOrSlug ||
            p.slug === idOrSlug ||
            p.id === decoded ||
            p.slug === decoded
        );
        if (found) {
          setSelectedProduct(found);
          setActivePage('product');
          return;
        } else if (products.length > 0) {
          setSelectedProduct(products[0]);
          setActivePage('product');
          return;
        }
      }

      if (hash === 'admin' || hash === 'dashboard') {
        setActivePage('admin');
        return;
      }

      if (hash === 'refund-policy' || hash === 'refund') {
        setActivePage('refund-policy');
        return;
      }

      if (hash === 'privacy-policy' || hash === 'privacy') {
        setActivePage('privacy');
        return;
      }

      if (hash === 'terms' || hash === 'terms-and-conditions') {
        setActivePage('terms');
        return;
      }

      if (['home', 'store', 'blog', 'support', 'about', 'refund-policy', 'terms', 'privacy', 'admin'].includes(hash)) {
        setActivePage(hash as PageId);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [products]);

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setActivePage('product');
    window.location.hash = `product/${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => [...prev, product]);
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]" dir="rtl">
      {/* Fixed Site Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={(page) => {
          setActivePage(page);
          window.location.hash = page;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartItems.length}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main Page View */}
      <main className={`flex-1 ${activePage !== 'home' ? 'pt-[96px]' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage === 'product' ? `product-${selectedProduct?.id}` : activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activePage === 'home' && (
              <HomePage
                onNavigate={(page) => {
                  setActivePage(page);
                  window.location.hash = page;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectProduct={handleSelectProduct}
                onAddToCart={handleAddToCart}
              />
            )}

            {activePage === 'store' && (
              <StorePage
                onNavigate={(page) => {
                  setActivePage(page);
                  window.location.hash = page;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectProduct={handleSelectProduct}
                onAddToCart={handleAddToCart}
              />
            )}

            {activePage === 'product' && (
              (selectedProduct || products[0]) ? (
                <ProductPage
                  product={selectedProduct || products[0]}
                  onNavigate={(page) => {
                    setActivePage(page);
                    window.location.hash = page;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onSelectProduct={handleSelectProduct}
                  onAddToCart={handleAddToCart}
                />
              ) : (
                <div className="py-24 text-center">
                  <p className="text-base text-slate-600 mb-4">المنتج المطلوب غير متوفر حالياً.</p>
                  <button
                    onClick={() => {
                      setActivePage('store');
                      window.location.hash = 'store';
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0B96B8] text-white text-sm font-bold cursor-pointer"
                  >
                    العودة للمتجر
                  </button>
                </div>
              )
            )}

            {activePage === 'blog' && <BlogPage onSelectPost={setSelectedPost} />}

            {activePage === 'support' && (
              <SupportPage
                onNavigate={(page) => {
                  setActivePage(page);
                  window.location.hash = page;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {activePage === 'about' && (
              <AboutPage
                onNavigate={(page) => {
                  setActivePage(page);
                  window.location.hash = page;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {(activePage === 'refund-policy' ||
              activePage === 'terms' ||
              activePage === 'privacy') && (
              <PolicyPage
                initialPolicy={
                  activePage === 'privacy'
                    ? 'privacy'
                    : activePage === 'terms'
                    ? 'terms'
                    : 'refund'
                }
                onNavigate={(page) => {
                  setActivePage(page);
                  window.location.hash = page;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {activePage === 'admin' && (
              <AdminPage
                onNavigate={(page) => {
                  setActivePage(page);
                  window.location.hash = page;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectProduct={handleSelectProduct}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(page) => {
          setActivePage(page);
          window.location.hash = page;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPolicyModal={(title) => setPolicyTitle(title)}
      />

      {/* Interactive Modals */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <BlogReaderModal post={selectedPost} onClose={() => setSelectedPost(null)} />

      <CartModal
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
      />

      <PolicyModal title={policyTitle} onClose={() => setPolicyTitle(null)} />
    </div>
  );
}

export default function App() {
  return (
    <AdminAuthProvider>
      <ProductProvider>
        <TashilAppContent />
      </ProductProvider>
    </AdminAuthProvider>
  );
}
