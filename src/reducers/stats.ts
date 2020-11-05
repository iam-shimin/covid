export default function statsReducer(state: any, action: any) {
	switch (action.type) {
		case 'STAT_LOADING':
			break;
		case 'STAT_SUCCESS':
			break;
		case 'STAT_ERROR':
			break;
		default:
			throw new Error(`Unexpected Action Type: '${action.type}'`);
	}
}