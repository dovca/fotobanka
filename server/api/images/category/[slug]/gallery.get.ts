import {globSync} from 'glob';

export default defineEventHandler((event) => {
	const {slug} = getRouterParams(event);
	return globSync(`img/${slug}/gallery/*.jpg`, {cwd: './public'}).map((file) => `/${file}`);
});
