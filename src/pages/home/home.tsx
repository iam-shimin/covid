import React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import ScoreBoard from 'components/scoreBoard';
import StatesList from 'components/statesList';
import CountryMap from 'components/countryMap';
import MapMarker from 'components/mapMarker';
import PieChart from 'components/pieChart';
import LineChart from 'components/lineChart';
import AppHeader from 'components/header';
import { INDIAN_STATE_LATLNG } from '../../constants';
import { IStatsReduxState } from 'reducers/store';
import './home.css';
import AppError from 'components/appError/appError';


interface StateProps {
	statsdata: IStatsReduxState["data"],
	timeseriesData: any,
	error: IStatsReduxState["error"]
}


interface RouterProps {
	match: match
}

type HomePageProps = StateProps & RouterProps;

function Home({
	statsdata,
	timeseriesData,
	error,
	match
}: HomePageProps) {
	
	if (error)
		return <AppError error={error} />;

	if (statsdata === null) 
		return null;
	
	const stateId: string | undefined = (match.params as any).stateId;
	const [totalData, ...restData] = statsdata;
	const stateData = (stateId !== undefined) && restData.find(item => item.statecode === stateId);
	const isStateIdInvalid = stateData === undefined;

	const selectedData = stateData? stateData: totalData;
	const labels = ['active', 'confirmed', 'deaths', 'recovered'] as const;
	const values = labels.map(l => parseInt(selectedData[l]));

	const mapCenter = stateData
		? INDIAN_STATE_LATLNG[stateData.statecode]
		: INDIAN_STATE_LATLNG[restData[0].statecode];

	return (
		<>
			<AppHeader>
				<StatesList listData={restData} className="hb-statelist" />
			</AppHeader>
			<InvalidURLMessage show={isStateIdInvalid} />

			<div style={{display: 'flex', alignItems: 'center'}}>
				{stateData !== false && (
					<div style={{padding: '0 10%'}}>
						<h1>{stateData?.state}</h1>
					</div>
				)}
				<ScoreBoard data={selectedData} />
			</div>

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
		</>
	);
}

function InvalidURLMessage({ show }: { show: boolean }) {
	if (!show)
		return null;

	return (
		<div style={{background: 'red', color: '#fff', textAlign: 'center', fontSize: '1.3rem'}}>
			Invalid URL.
		</div>
	)
}


const mapStateToProps = (state: IStatsReduxState) => ({
	statsdata: state.data,
	timeseriesData: state.timeseries,
	error: state.error
});


export default connect(mapStateToProps)(Home);