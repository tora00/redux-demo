export default (state = {}, action) => {
	switch (action.type) {
	  case 'TEST_ACTION':
		return {
		  color: action.color
		}
  
	  default:
		return state
	}
}