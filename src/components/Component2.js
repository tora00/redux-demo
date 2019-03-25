import React from 'react';
import testAction from '../actions/testAction.js'
import '../styles/test.css'
import {connect} from 'react-redux';

class Component2 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({color: 'Red'})
    }

    testAction = (event) => {
        this
            .props
            .testAction();
    }

    render() {
        return (
            <div className='test-container'>
                Container 2!
                <button onClick={this.testAction}>Test!</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(Component2);