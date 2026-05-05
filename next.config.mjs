/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Trailing slash tutarsızlığını kapatır — duplicate content riski
  trailingSlash: false,
  async headers() {
    return [
      {
        // Statik sayfalar: anında sun, arka planda sessizce yenile (stale-while-revalidate)
        source: "/((?!_next|favicon|elb-licht-logo).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=60, stale-while-revalidate=86400",
          },
        ],
      },
    ]
  },
}

export default nextConfig
