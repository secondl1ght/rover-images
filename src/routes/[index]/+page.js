/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let { index } = params;

	return {
		index
	};
}
