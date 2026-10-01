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
}