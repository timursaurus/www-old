import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  target: "static",
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
});
