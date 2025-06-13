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
    '@vueuse/nuxt'
  ],
  // TODO: add runtime config and other settings
})
