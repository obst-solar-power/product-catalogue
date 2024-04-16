import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    // VitePWA({ 
    //   registerType: 'autoUpdate', 
    //   devOptions: {
    //     enabled: true
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
    //   },
    //   manifest: {
    //     name: "OBST product catalogue",
    //     short_name: "Product Catalogue",
    //     description: 'The product catalogue of OBST solar power company',
    //     theme_color: '#ffffff',
    //     scope : "/",
    //     display : "standalone",
    //     icons: [
    //       {
    //         src: "/maskable_icon_x192.png",
    //         sizes: "196x196",
    //         type: "image/png",
    //         purpose : "any"
    //     },
    //     {
    //         src: "/favicon-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png"
    //     },
    //     {
    //         src: "/favicon-256x256.png",
    //         sizes: "256x256",
    //         type: "image/png"
    //     },
    //     {
    //         src: "/favicon-384x384.png",
    //         sizes: "384x384",
    //         type: "image/png"
    //     },
    //     {
    //         src: "/favicon-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png"
    //     }
    //     ]
    //   }
    // })
],
  
})
