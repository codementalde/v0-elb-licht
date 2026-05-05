/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pflegedienst-elblicht.de',
  generateRobotsTxt: false, // public/robots.txt manuel yönetiliyor
  changefreq: 'weekly',
  priority: 0.7,
  // Hukuki sayfalar sitemap'e dahil edilmez (robots.txt'te de noindex)
  exclude: ['/impressum', '/datenschutz', '/cookies'],
  transform: async (config, path) => {
    const priorities = {
      '/':          1.0,
      '/leistungen': 0.9,
      '/beratung':   0.9,
      '/kontakt':    0.8,
      '/ueber-uns':  0.7,
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString().split('T')[0],
    }
  },
}
