import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header headerProp = "Header from props..."/>
                <Content/>
            </div>
        );
    }
}
class Header extends React.Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
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