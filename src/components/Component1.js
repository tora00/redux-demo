import React from 'react';
import testAction from '../actions/testAction.js'
import '../styles/test.css'
import {connect} from 'react-redux';

class Component1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({color: 'Red'})
    }

    testAction = () => {
        this
            .props
            .testAction();
    }

    render() {
        return (
            <div className='test-container'>
                Container 1!
                <button onClick={this.testAction}>Test!</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(Component1);