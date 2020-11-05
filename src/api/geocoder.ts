import axios from 'axios';

export default function getLatLong(address: string) {
	return axios({
		url: '',
		baseURL: 'https://api.opencagedata.com/geocode/v1/json',
		params: {
			q: address,
			key: process.env.REACT_APP_GEOCODER_API_KEY,
			pretty: 1,
			no_annotations: 1
		}
	}).then(response => {
		const {lat, lng}: {lat: number, lng: number} = response.data.results[0].geometry;
		return [lat, lng];
	})
}