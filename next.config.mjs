/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`,
      },
    ],
  },

  experimental: {
    taint: true,
  },

  redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://x.com/thisislubenwei',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/thisislubenwei',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/442283045',
        permanent: true,
      },
    ]
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig
