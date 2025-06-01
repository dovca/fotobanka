import {globSync} from 'glob';
import categories from './config/categories.json';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: {enabled: true},
	modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/icon'],
	tailwindcss: {
		config: {
			theme: {
				fontFamily: {
					display: ['Helvetica', 'sans-serif'],
				},
				extend: {
					screens: {
						'3xl': '1920px',
					}
				}
			}
		}
	},
	nitro: {
		prerender: {
			routes: process.env.APP_ENV === 'local' ?
				Object
					.keys(categories)
					.flatMap((slug) => [
						...globSync(`img/${slug}/animation/*.jpg`, {cwd: './public'})
							.flatMap((file) => [
								`/_ipx/w_600/${file}`,
								`/_ipx/w_1200/${file}`,
								`/_ipx/_/${file}`,
							]),
						...globSync(`img/${slug}/gallery/*.jpg`, {cwd: './public'})
							.flatMap((file) => [
								`/_ipx/w_300/${file}`,
								`/_ipx/w_600/${file}`,
								`/_ipx/w_1200/${file}`,
								`/_ipx/_/${file}`
							]),
					])
				: [],
		}
	}
});
