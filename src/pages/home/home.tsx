import React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import ScoreBoard from 'components/scoreBoard';
import StatesList from 'components/statesList';
import AppHeader from 'components/header';
import { Spinner } from 'components/spinner';
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

const Visualisations = React.lazy(() => import('./visualise'));

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

			<React.Suspense fallback={<Spinner isLoading />}>
				<Visualisations
					stateData={stateData}
					selectedData={selectedData}
					restData={restData}
					timeseriesData={timeseriesData} />
			</React.Suspense>
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