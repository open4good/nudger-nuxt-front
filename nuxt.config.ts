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
    '@nuxtjs/storybook',
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
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default'
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
  ,vite: {
    workerThreads: true,
    resolve: {
      alias: {
        vue: 'vue/dist/vue.runtime.esm-bundler.js'
      }
    }
  },
  experimental: {
    inlineSSRStyles: true
  }


})
