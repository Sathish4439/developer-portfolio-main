const path = require('path')
 
module.exports = {
  experimental: {
    cpus: 2,
  },
  allowedDevOrigins: ['192.168.31.86', 'localhost'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Legacy Service Route Canonical 301 Redirects
      {
        source: '/services/crm-development',
        destination: '/erp-software-developer-coimbatore',
        permanent: true,
      },
      {
        source: '/services/backend-development',
        destination: '/services/nodejs-development',
        permanent: true,
      },
      {
        source: '/services/web-development',
        destination: '/web-developer-coimbatore',
        permanent: true,
      },
      {
        source: '/services/api-development',
        destination: '/services/nodejs-development',
        permanent: true,
      },
      {
        source: '/services/business-automation',
        destination: '/erp-software-developer-coimbatore',
        permanent: true,
      },
      {
        source: '/services/custom-software-development',
        destination: '/custom-software-development-coimbatore',
        permanent: true,
      },
      {
        source: '/services/erp-development',
        destination: '/erp-software-developer-coimbatore',
        permanent: true,
      },
      {
        source: '/services/mobile-app-development',
        destination: '/flutter-app-development-coimbatore',
        permanent: true,
      },
      {
        source: '/services/mvp-development',
        destination: '/freelance-flutter-developer',
        permanent: true,
      },
      {
        source: '/services/admin-dashboard-development',
        destination: '/services/react-development',
        permanent: true,
      },
      // Regional & Keyword Redirects
      {
        source: '/mobile-app-development-in-karur',
        destination: '/app-developer-karur',
        permanent: true,
      },
      {
        source: '/software-development-in-karur',
        destination: '/app-developer-karur',
        permanent: true,
      },
      {
        source: '/mobile-app-developer-karur',
        destination: '/app-developer-karur',
        permanent: true,
      },
      {
        source: '/flutter-developer-karur',
        destination: '/app-developer-karur',
        permanent: true,
      },
      {
        source: '/flutter-app-development-cost-in-coimbatore',
        destination: '/flutter-developer-coimbatore',
        permanent: true,
      },
      {
        source: '/app-development-cost-in-coimbatore',
        destination: '/flutter-developer-coimbatore',
        permanent: true,
      },
      {
        source: '/mobile-app-development-cost-in-karur',
        destination: '/app-developer-karur',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*(sitemap.*\\.xml)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
}