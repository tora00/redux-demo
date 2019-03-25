// export const testAction = () => dispatch => {
// 	dispatch({
// 	  type: 'TEST_ACTION',
// 	  color: 'Green'
// 	})
//   }

const selectFirst = () =>{
	console.log("Select First");
	return {
		type: "BUTTON_SELECTED",
		color: {
			backgroundColor: 'green'
		}
	}
};

const selectSecond = () => {
	console.log("Select Second");
	return {
		type: "BUTTON_SELECTED",
		color: {
			backgroundColor: 'red'
		}
	}
};

export{
	selectFirst, selectSecond
}