export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://ko-partners.org', // あなたのサイトのURLを指定
    gzip: true,
    routes: [
      '/mission',
      '/message',
      '/kops-way',
      '/company-data',
      '/company-info',
      '/application-statement',
      // 必要に応じて他のルートを追加
    ]
  },

  compatibilityDate: '2024-09-22',
})