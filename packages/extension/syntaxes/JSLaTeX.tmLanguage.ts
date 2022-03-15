import { getRepository } from './utils/repository.js';

export default function getConfigString() {
	const config = {
		name: 'JSLaTeX File',
		scopeName: 'text.tex.latex.jslatex',
		injectionSelector: 'L:text.tex.latex - markup.raw.verbatim.latex',
		patterns: [
			{ include: '#tag-block-comment' },
			{ include: '#single-line-tag-ejs' },
			{ include: '#tag-ejs' },
			{ include: 'text.tex.latex' },
		],
		repository: getRepository(),
	};

	return JSON.stringify(config);
}
