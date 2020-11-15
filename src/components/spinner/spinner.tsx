import React from 'react';
import { connect } from 'react-redux';
import { IStatsReduxState } from 'reducers/store';

import './spinner.css';

interface StateProps {
	isLoading: boolean,
	color?: string
}

export function Spinner({isLoading, color = '#000'}: StateProps) {
	return isLoading
		?	<div className="spinner" style={{color}} />
		:	null;
}

const mapStateToProps = ({isLoading}: IStatsReduxState) => ({
	isLoading
})

export default connect(mapStateToProps)(Spinner);