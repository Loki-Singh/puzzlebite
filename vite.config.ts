import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change "puzzlebite" to your repo name if different
export default defineConfig({
  plugins: [react()],
  base: '/puzzlebite/'
})

// // import { defineConfig } from "vite";
// // import react from "@vitejs/plugin-react";

// // export default defineConfig({
// //   plugins: [react()],
// //   base: "/",   // MUST be this for S3 root hosting
// // });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/",   // root domain
// });
