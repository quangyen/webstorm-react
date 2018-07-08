import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from state...",
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}
export default App;