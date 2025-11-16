# 🍽️ GastronomíaEC — Documentación del Proyecto

Este archivo **README** describe toda la configuración del proyecto **GastronomíaEC**, desarrollado con **Vue 3**, **Vite**, **PrimeVue** y **VitePWA** para implementar una aplicación tipo PWA instalada en celulares.

---

## 🚀 Tecnologías principales

* **Vue 3** (Composition API)
* **Vite** como bundler
* **PrimeVue** para componentes UI
* **TailwindCSS** (si aplica)
* **VitePWA** para funcionalidades PWA
* **Node.js 18+**

---

## 📂 Estructura del proyecto

```
gastronomiaEC/
│── public/
│   ├── manifest.webmanifest
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│
│── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   ├── fonts/
│   ├── helper/
│   ├── locales/
│   ├── pages/
│   ├── images/
│   ├── router/
│   ├── App.vue
│   └── main.js
│
│── dev-dist/   (generado por VitePWA en modo dev)
│
│── vite.config.js
│── package.json
│── README.md
```

---

## ⚙️ Configuración del `vite.config.js`

```js
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

```

---

## 📱 Ejecutar en modo desarrollo

Para exponer el servidor en tu celular:

```sh
npm install
npm run dev -- --host=0.0.0.0
```

Luego abre en tu móvil la IP que aparece en consola:

```
http://192.168.x.x:5173/
```

⚠️ **En modo desarrollo la PWA no se instala en celulares. Solo se abre en el navegador.**

---

## 📦 Generar la PWA instalable

Para que la app se pueda instalar como aplicación:

### 1️⃣ Compilar

```sh
npm run build
```

### 2️⃣ Ejecutar modo preview

```sh
npm run preview -- --host=0.0.0.0
```

Abrir desde el móvil:

```
http://192.168.x.x:4173/
```

Ahora sí aparece:

* “Instalar app”
* “Agregar a pantalla principal”

---

## 📄 Manifest PWA (public/manifest.webmanifest)

```json
{
    "name": "gastronomiaEC",
    "short_name": "gastronomiaEC",
    "description": "PWA + vue3",
    "start_url": "/",
    "display": "standalone",
    "background_color": "white",
    "theme_color": "black",
    "lang": "en",
    "scope": "/",
    "icons": [
        {
            "src": "/apple-touch-icon-ipad-76x76.png",
            "sizes": "76x76",
            "type": "image/png"
        },
        {
            "src": "/apple-touch-icon-ipad-retina-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "src": "/apple-touch-icon-iphone-60x60.png",
            "sizes": "60x60",
            "type": "image/png"
        },
        {
            "src": "/apple-touch-icon-iphone-retina-120x120.png",
            "sizes": "120x120",
            "type": "image/png"
        }
    ]
}
```

---

## 🔧 Instalación de dependencias

```sh
npm install
```

Dependencias principales:

* `vue`
* `vite`
* `primevue`
* `primeicons`
* `vite-plugin-pwa`

---

## 🧩 Funcionalidades del proyecto

* Vista de comidas tradicionales
* Soporte multilenguaje (español, inglés, kichua)
* Grid dinámico con PrimeVue
* Mapas de comidas
* PWA con instalación en móviles y en escritorio

---

## 👨‍💻 Autor

**Juan Granda**
Proyecto GastronomíaEC

---
