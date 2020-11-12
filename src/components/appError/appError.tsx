import React from 'react';
import './appError.css';

export default function AppError({ error }: { error: Error}) {
	return (
		<h1 className="error-message">
			{error.message || 'Network Error'} :(
		</h1>
	);
}