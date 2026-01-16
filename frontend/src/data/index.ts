// Combined SEO Pages Data - Index file for all 100+ SEO pages

import { jsonToolsPages } from './seo-pages-data';
import { pdfToolsPages } from './pdf-tools-pages';
import { imageToolsPages } from './image-tools-pages';
import { base64ToolsPages, apiToolsPages, blogPages, industryPages } from './base64-api-blog-pages';
import { textCodeToolsPages, additionalBlogPages, additionalUseCasePages } from './additional-pages';

// Export individual categories
export { jsonToolsPages } from './seo-pages-data';
export { pdfToolsPages } from './pdf-tools-pages';
export { imageToolsPages } from './image-tools-pages';
export { base64ToolsPages, apiToolsPages, blogPages, industryPages } from './base64-api-blog-pages';
export { textCodeToolsPages, additionalBlogPages, additionalUseCasePages } from './additional-pages';

// Combine all pages into one array for easy access
export const allSEOPages = [
  ...jsonToolsPages,
  ...pdfToolsPages,
  ...imageToolsPages,
  ...base64ToolsPages,
  ...apiToolsPages,
  ...blogPages,
  ...industryPages,
  ...textCodeToolsPages,
  ...additionalBlogPages,
  ...additionalUseCasePages
];

// Get page by slug
export const getPageBySlug = (slug: string) => {
  return allSEOPages.find(page => page.slug === slug);
};

// Get pages by category
export const getPagesByCategory = (category: string) => {
  return allSEOPages.filter(page => page.category === category);
};

// Generate sitemap entries
export const generateSitemapEntries = () => {
  return allSEOPages.map(page => ({
    loc: `https://jsonpdfconverter.com/${page.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: page.category === 'blog' ? 'monthly' : 'weekly',
    priority: page.category === 'tool' ? 0.8 : 0.7
  }));
};

// Page count statistics
export const pageStats = {
  total: allSEOPages.length,
  tools: allSEOPages.filter(p => p.category === 'tool').length,
  blogs: allSEOPages.filter(p => p.category === 'blog').length,
  useCases: allSEOPages.filter(p => p.category === 'use-case').length,
  industry: allSEOPages.filter(p => p.category === 'industry').length
};

// Navigation structure for footer/sidebar
export const navigationGroups = [
  {
    title: "JSON Tools",
    items: jsonToolsPages.map(p => ({ title: p.title.split(' - ')[0], path: `/${p.slug}` }))
  },
  {
    title: "PDF Tools", 
    items: pdfToolsPages.map(p => ({ title: p.title.split(' - ')[0], path: `/${p.slug}` }))
  },
  {
    title: "Image Tools",
    items: imageToolsPages.map(p => ({ title: p.title.split(' - ')[0], path: `/${p.slug}` }))
  },
  {
    title: "Encoding Tools",
    items: base64ToolsPages.map(p => ({ title: p.title.split(' - ')[0], path: `/${p.slug}` }))
  },
  {
    title: "API Tools",
    items: apiToolsPages.map(p => ({ title: p.title.split(' - ')[0], path: `/${p.slug}` }))
  },
  {
    title: "Text & Code Tools",
    items: textCodeToolsPages.map(p => ({ title: p.title.split(' - ')[0], path: `/${p.slug}` }))
  },
  {
    title: "Guides & Tutorials",
    items: [...blogPages, ...additionalBlogPages].map(p => ({ title: p.title.split(':')[0], path: `/${p.slug}` }))
  },
  {
    title: "Industry Solutions",
    items: [...industryPages, ...additionalUseCasePages].map(p => ({ title: p.title.split(':')[0], path: `/${p.slug}` }))
  }
];
