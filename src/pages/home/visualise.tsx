import React from 'react';

import CountryMap from 'components/countryMap';
import MapMarker from 'components/mapMarker';
import PieChart from 'components/pieChart';
import LineChart from 'components/lineChart';
import { INDIAN_STATE_LATLNG } from '../../constants';
import { IStatForState } from 'reducers/store';

interface VisualisationsProps {
	stateData?: IStatForState | false,
	selectedData: IStatForState,
	restData: IStatForState[],
	timeseriesData: any
}

export default function Visualisations({
	stateData,
	restData,
	selectedData,
	timeseriesData
}: VisualisationsProps) {

	const mapCenter = stateData
		? INDIAN_STATE_LATLNG[stateData.statecode]
		: INDIAN_STATE_LATLNG[restData[0].statecode];
	const labels = ['active', 'confirmed', 'deaths', 'recovered'] as const;
	const values = labels.map(l => parseInt(selectedData[l]));

	return (
		<div className="home-body">
			<CountryMap center={mapCenter} key={JSON.stringify(mapCenter)} className="hb-map">
				{stateData
					? <MapMarker
					autoPan
					key={stateData.statecode}
					position={INDIAN_STATE_LATLNG[stateData.statecode]}
					data={stateData} />
					: restData.map(stateData => <MapMarker
					key={stateData.statecode}
					position={INDIAN_STATE_LATLNG[stateData.statecode]}
					data={stateData} />)}
			</CountryMap>
			<PieChart labels={labels as unknown as string[]} values={values} />
			<LineChart data={timeseriesData.slice(0, 10)} />
		</div>
	)
}
