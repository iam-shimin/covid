import React from 'react';
import { connect } from 'react-redux';
import { IStatsReduxState } from 'reducers/store';

import './spinner.css';

interface StateProps {
	isLoading: boolean
}

function Spinner({isLoading}: StateProps) {
	return isLoading
		?	<div className="spinner" />
		:	null;
}

const mapStateToProps = ({isLoading}: IStatsReduxState) => ({
	isLoading
})

export default connect(mapStateToProps)(Spinner);