/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://qurankareem.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  exclude: ['/404', '/500', '/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://qurankareem.app/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
  },
  priority: 1.0,
  changefreq: 'daily',
  transform: async (config, path) => {
    // Custom transformation for dynamic routes
    if (path.includes('/quran/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
}