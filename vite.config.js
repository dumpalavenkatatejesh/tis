import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub project pages need base: "/repository-name/".
  // Vercel, Netlify, and a user site (username.github.io) stay on "/".
  base: "/",
});
