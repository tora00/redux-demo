import React from 'react';
import testAction from '../actions/testAction.js'
import '../styles/test.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFirst, selectSecond} from '../actions/testAction';

class Component1 extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.setState({color: 'Red'})
    // }

    // testAction = () => {
    //     this.props.testAction();
    // }

    updateComponentColor(){

    }

    render() {
        console.log("Current state of 1:"+this.props.color);
        if(!this.props.color){
            return (
                <div className='test-container' style={{backgroundColor:'blue'}}>
                    Container 1!
                    <button onClick={() => this.props.selectFirst()}>Test!</button>
                </div>
            );
        }
        return (
            <div className='test-container' style={this.props.color}>
                Container 1!
                <button onClick={() => this.props.selectFirst()}>Test!</button>
            </div>
        );
    }
}

/*const mapStateToProps = state => ({
    ...state
})*/

function mapStateToProps(state){
	return{
		color: state.color
	}
}

function matchDispatchToProps(dispatch){
    return  bindActionCreators({
        selectFirst: selectFirst,
        selectSecond: selectSecond
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Component1);