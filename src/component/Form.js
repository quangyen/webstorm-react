import React from 'react';

/**
 * In the following example, we will set an input form with value = {this.state.data}. This allows to update the state whenever the input value changes. We are using onChange event that will watch the input changes and update the state accordingly.
 */

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <input type = "text" value = {this.state.data}
                       onChange = {this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}
export default Form;