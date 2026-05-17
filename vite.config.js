import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: [
      "grassrootpolicies-production.up.railway.app",
      "grassrootpolicies.com",
      "www.grassrootpolicies.com"
    ]
  }
})
