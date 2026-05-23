import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Auto-copy resume PDF to public folder so it's served correctly
const resumeSrc = path.resolve(__dirname, 'document_pribadi/Resume_Abinaya_Arya_Zaidan_S6.pdf')
const resumeDest = path.resolve(__dirname, 'public/resume.pdf')
if (fs.existsSync(resumeSrc)) {
  fs.copyFileSync(resumeSrc, resumeDest)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web-profile/',
})
