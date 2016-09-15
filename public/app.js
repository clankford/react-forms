import React from 'react';

const App = React.createClass({
    getInitialState() {
        return { names: [] };
    },

    onFormSubmit(e) {
        const name = this.refs.name.value;
        const names = [ ...this.state.names, name ]
        this.setState({ names: names });
        this.refs.name.value = '';
        e.preventDefault();
    },

    render: function() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        ref='name'
                    >
                    </input>
                    <input type='submit' />
                </form>
                <div>
                    <h3>Names</h3>
                    <ul>
                        { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
                    </ul>
                </div>
            </div>
        );
    },
});

export default App;
