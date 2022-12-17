import axios from 'axios';
import { get } from 'svelte/store';
import { roverImage, fetchInterval, clearSlideshow, roverImageTotal } from '$lib/store';

const apiURL = 'https://hiring.hypercore-protocol.org/termrover';

export class RoverAPI {
	constructor() {}

	// methods

	// fetch number of images and hypercore key
	info() {
		axios
			.get(apiURL)
			.then(function (response) {
				// handle success
				roverImageTotal.set(response.data.numImages);
			})
			.catch(function (error) {
				// handle error
				window.alert('Could not load rover info, please try again.');
				console.log(error);
			});
	}

	// fetch latest rover image
	latest() {
		axios
			.get(apiURL + '/latest')
			.then(function (response) {
				// handle success
				roverImage.set(response.data);
			})
			.catch(function (error) {
				// handle error
				window.alert('Could not load latest image, please try again.');
				console.log(error);
			});
	}

	// fetch image at index
	index(index) {
		axios
			.get(apiURL + `/${index}`)
			.then(function (response) {
				// handle success
				roverImage.set(response.data);
			})
			.catch(function (error) {
				// handle error
				window.alert('Could not load rover image, please try again.');
				console.log(error);
			});
	}

	// iterate over all images by index starting from 0
	iterate(total) {
		async function* generateSequence(start, end) {
			for (let i = start; i <= end; i++) {
				if (get(clearSlideshow)) {
					break;
				}

				await new Promise((resolve) => setTimeout(resolve, get(fetchInterval)));

				yield i;
			}
		}

		(async () => {
			let generator = generateSequence(0, total);

			for await (let value of generator) {
				if (get(clearSlideshow)) {
					return;
				}

				axios
					.get(apiURL + `/${value}`)
					.then(function (response) {
						// handle success
						roverImage.set(response.data);
					})
					.catch(function (error) {
						// handle error
						window.alert('Could not load next image, please try again.');
						console.log(error);
					});
			}
		})();
	}
}
