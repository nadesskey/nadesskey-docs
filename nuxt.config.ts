// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      'BIZ UDPGothic': [400, 700]
    }
  }
})
