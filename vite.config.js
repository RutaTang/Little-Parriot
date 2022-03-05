import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// fix aws build err
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser',
		},
	},
})
