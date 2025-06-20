import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 상대 경로로 설정 (필수!)  // base: '/repo-name/', // 저장소 이름으로 설정 
  server: {
    proxy: {
      //'/api': 'http://localhost:3001/posts'  // /api/posts → 3001/posts로 연결
      target: 'http://localhost:3001',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
})
