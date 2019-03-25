export default function (state = {}, action){
	switch (action.type) {
		case 'BUTTON_SELECTED':
			console.log("BUTTON SELECTED AS "+action.color);
			return {
				color: action.color
			}
		default:
			return state;
	}
}