import axios from 'axios';
import { ROOT_URL, FETCH_VALUE } from './config';

export const fetchFiles = () => async (dispatch) => {
	const res = await axios.get(`${ROOT_URL}`);
	console.log("HERE", res.data);
	dispatch({ type: FETCH_VALUE, payload: res.data });
};
