import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/prj_TEST/', // base: './', // 상대 경로로 설정 (필수!)
  // base: './', // 상대 경로로 설정 (필수!)  
  build: {
    outDir: 'dist', // 출력 폴더 명시적 지정
    assetsInclude: ['**/*.json'],  // JSON 파일 빌드 포함
    // rollupOptions: {
    //   output: {
    //     assetFileNames: 'assets/[name].[ext]'
    //   }
    // }
  }
  // server: {
  //   proxy: {
  //     //'/api': 'http://localhost:3001/posts'  // /api/posts → 3001/posts로 연결
          // '/api': {
          //   target: 'http://localhost:3001',
          //   changeOrigin: true,
          //   rewrite: (path) => path.replace(/^\/api/, ''),
          // },
  //   }
  // }
})
