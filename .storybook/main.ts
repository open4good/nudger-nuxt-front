import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
  addons: ['@storybook/addon-essentials'],
  // TODO: nuxt-storybook setup
})
