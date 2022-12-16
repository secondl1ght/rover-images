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

	// iterate over all images by index starting from 0 and restarting when the final image is fetched
	iterate(total) {
		let milliseconds = get(fetchInterval);

		let image = 0;

		const fetchImage = () => {
			axios
				.get(apiURL + `/${image}`)
				.then(function (response) {
					// handle success
					if (image === total) {
						image = 0;
					} else {
						image++;
					}
					roverImage.set(response.data);
				})
				.catch(function (error) {
					// handle error
					window.alert('Could not load next image, please try again.');
					console.log(error);
				});
		};

		let fetchImageInterval = setInterval(fetchImage, milliseconds);
		clearSlideshow.set(() => clearInterval(fetchImageInterval));

		const resetInterval = () => {
			milliseconds = get(fetchInterval);

			clearInterval(fetchImageInterval);
			fetchImageInterval = setInterval(fetchImage, milliseconds);
			clearSlideshow.set(() => clearInterval(fetchImageInterval));
		};

		fetchInterval.subscribe(resetInterval);
	}
}
