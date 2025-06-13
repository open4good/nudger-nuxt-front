export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],
  runtimeConfig: {
    strapiToken: process.env.STRAPI_TOKEN,
    public: {
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
      plausibleDomain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nudger',
      short_name: 'Nudger',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/nudger-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  }
})
