import React from 'react';
import { MapContainer, TileLayer, MapContainerProps } from 'react-leaflet';

import './countryMap.css';

export default function CountryMap({center, children, className, ...restProps}: MapContainerProps) {
	return (
		<MapContainer
			center={center}
			zoom={5}
			scrollWheelZoom={false}
			className={`country-map${className? ` ${className}`: ''}`}
			{...restProps}>

			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{children}

		</MapContainer>
	)
}
