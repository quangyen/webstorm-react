import React from 'react';
import ReactDOM from 'react-dom';

/**
 * In this chapter, we will explain React component API. We will discuss three methods: setState(), forceUpdate and ReactDOM.findDOMNode(). In new ES6 classes, we have to manually bind this. We will use this.method.bind(this) in the examples.
 */

class ComponentAPI extends React.Component {
    render() {
        return (
            <div>
                <SetState/>
                <ForceUpdate/>
                <FindDomNode/>
            </div>
        );
    }
}

class SetState extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    };
    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}

class ForceUpdate extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
    forceUpdateHandler() {
        this.forceUpdate();
    };
    render() {
        return (
            <div>
                <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}

class FindDomNode extends React.Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }
    render() {
        return (
            <div>
                <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                <div id = "myDiv">NODE</div>
            </div>
        );
    }
}

export default ComponentAPI;