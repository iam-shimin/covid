import React from 'react';
import { Marker, MarkerProps, Tooltip } from 'react-leaflet';
import { IStatForState } from 'reducers/store';
import './mapMarker.css';

interface MapMarkerProps extends MarkerProps {
	data: IStatForState
}

export default function MapMarker({
	data,
	position
}: MapMarkerProps) {
	return (
		<Marker position={position}>
			<Tooltip className="ss-tooltip">
				<em>{data.state}</em>
				<p>Confirmed: <span>{data.confirmed}</span></p>
				<p>Active: <span>{data.active}</span></p>
				<p>Deaths: <span>{data.deaths}</span></p>
				<p>Recovered: <span>{data.recovered}</span></p>
				<small>Last updated on {data.lastupdatedtime}</small>
			</Tooltip>
		</Marker>
	)
}
