export default defineNuxtConfig({
  ssr: true,
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
    'nuxt-ui'
  ],
  // TODO: add runtime config and other settings
})
