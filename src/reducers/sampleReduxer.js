import { FETCH_VALUE } from "./../actions/config";
//intialize the state value ([],{},"")
export default function (state = "", action) {
  switch (action.type) {
    case FETCH_VALUE: {
      console.log(action.payload);
      return action.payload || "";
    }
    default:
      return state
  }
}