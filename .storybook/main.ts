import type { StorybookConfig } from '@storybook-vue/nuxt'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {
      nuxtConfig: {
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
        ]
      }
    }
  }
}

export default config

