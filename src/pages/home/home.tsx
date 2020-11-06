import React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import ScoreBoard from 'components/scoreBoard';
import StatesList from 'components/statesList';
import CountryMap from 'components/countryMap';
import MapMarker from 'components/mapMarker';
import PieChart from 'components/pieChart';
import LineChart from 'components/lineChart';
import { INDIAN_STATE_LATLNG } from '../../constants';
import loadStats from 'actions/states';
import { IStatsReduxState } from 'reducers/store';
import './home.css';


interface StateProps {
	statsdata: IStatsReduxState["data"] 
}

interface ActionProps {
	loadStats: React.EffectCallback
}

interface RouterProps {
	match: match
}

type HomePageProps = StateProps & ActionProps & RouterProps;

type ViewTypes = 'map' | 'pie' | 'line';

function Home({ statsdata, loadStats, match }: HomePageProps) {
	React.useEffect(() => loadStats(), [loadStats]);
	const [view, setView] = React.useState<ViewTypes>('map');
	
	if (statsdata === null) 
	return null;
	
	const stateId: string | undefined = (match.params as any).stateId;
	const [totalData, ...restData] = statsdata;
	const stateData = (stateId !== undefined) && restData.find(item => item.statecode === stateId);
	const isStateIdInvalid = stateData === undefined;

	function handleView(event: React.ChangeEvent<HTMLSelectElement>) {
		const value = event.target.value as ViewTypes;
		setView(value);
	}

	let activeView = (
		<CountryMap center={INDIAN_STATE_LATLNG[restData[0].statecode]} className="hb-map">
			{restData.map(stateData => <MapMarker
				key={stateData.statecode}
				position={INDIAN_STATE_LATLNG[stateData.statecode]}
				data={stateData} />)}
		</CountryMap>
	);

	if (view === 'pie') {
		const selectedData = stateData? stateData: totalData;
		const labels = ['active', 'confirmed', 'deaths', 'recovered'];
		const labels_ = ['active', 'confirmed', 'deaths', 'recovered'] as const;
		const values = labels_.map(l => parseInt(selectedData[l]));
		activeView = <PieChart labels={labels} values={values} />;
	} else if (view === 'line') {
		activeView = <LineChart />;
	}

	return (
		<>
			<InvalidURLMessage show={isStateIdInvalid} />

			<ScoreBoard data={totalData} />
			{stateData !== false && (
				<div style={{padding: '0 10%'}}>
					<h1>{stateData?.state}</h1>
					<p>{stateData?.statenotes}</p>
				</div>
			)}

			<SelectView onChange={handleView} />

			<div className="home-body">
				<StatesList listData={restData} className="hb-statelist" />
				{activeView}
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

function SelectView({ onChange }: { onChange: React.EventHandler<React.ChangeEvent> }) {
	return (
		<select name="view" defaultValue="map" onChange={onChange} style={{display: 'block', marginBottom: '1rem', marginLeft: '50%'}}>
			<option value="map">Map</option>
			<option value="pie">Pie Chart</option>
			<option value="line">Line Chart</option>
		</select>
	)
}

const mapStateToProps = (state: IStatsReduxState) => ({
	statsdata: state.data
});

const mapDispatchToProps = {
	loadStats
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);