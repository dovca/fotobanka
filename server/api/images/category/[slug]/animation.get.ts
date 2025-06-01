import {globSync} from 'glob';

export default defineEventHandler((event) => {
	const {slug} = getRouterParams(event);
	return globSync(`img/${slug}/animation/*.jpg`, {cwd: './public'}).map((file) => `/${file}`);
});
