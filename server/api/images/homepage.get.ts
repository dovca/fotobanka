import {globSync} from 'glob';

export default defineEventHandler(() => {
	return globSync('img/homepage/*.jpg', {cwd: './public'}).map((file) => `/${file}`).sort();
});
