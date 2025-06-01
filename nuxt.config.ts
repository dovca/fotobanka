// https://nuxt.com/docs/api/configuration/nuxt-config
// import {globSync} from 'glob';
// import slugs from './config/slugs.json';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: {enabled: true},
	modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/icon'],
	tailwindcss: {
		config: {
			theme: {
				fontFamily: {
					display: ['Helvetica', 'sans-serif'],
				}
			}
		}
	},
	// nitro: {
	// 	prerender: {
	// 		routes: [
	// 			...Object
	// 				.keys(slugs)
	// 				.flatMap((slug) => [
	// 					...globSync(`img/${slug}/animation/*.jpg`, {cwd: './public'})
	// 						.flatMap((file) => [
	// 							`/_ipx/w_600/${file}`,
	// 							`/_ipx/w_1200/${file}`,
	// 							`/_ipx/_/${file}`,
	// 						]),
	// 					...globSync(`img/${slug}/gallery/*.jpg`, {cwd: './public'})
	// 						.flatMap((file) => [
	// 							`/_ipx/w_100/${file}`,
	// 							`/_ipx/w_200/${file}`,
	// 							`/_ipx/w_600/${file}`,
	// 							`/_ipx/w_1200/${file}`,
	// 							`/_ipx/_/${file}`
	// 						]),
	// 				]),
	// 		],
	// 	}
	// }
});
