export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head

  // サーバーサイドレンダリング（SSR）を有効にする
  ssr: true,

  // Nuxt 4 互換モードの有効化
  future: {
    compatibilityVersion: 4,
  },

  // Nitro設定（Cloudflare Workers用）
  nitro: {
    preset: 'cloudflare', // Cloudflare Workers向けに設定
  },

  head: {
    title: 'n3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      if (isClient) {
	 // 必要であればカスタマイズ（通常は不要）
      }
    }
  },

//  vite: {
//    resolve: {
//      alias: {
//        '#app-manifest': '/path/to/app-manifest', // 実際のパスを指定する
//      }
//    }
//  },

  compatibilityDate: '2025-01-09'
});
