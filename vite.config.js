import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {enabled: true},
      manifest: {
        name: 'gastronomiaEC',
        short_name: 'gastronomiaEC',
        description: 'PWA + vue3',
        theme_color: "black",
        background_color: "white",
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/apple-touch-icon-ipad-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: '/apple-touch-icon-ipad-retina-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '/apple-touch-icon-iphone-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: '/apple-touch-icon-iphone-retina-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
