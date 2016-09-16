import React from 'react';

const App = React.createClass({
    getInitialState() {
        return {
            name: '',
            names: [],
        };
    },

    onFormSubmit(e) {
        const names = [ ...this.state.names, this.state.name ]
        this.setState({ names: names, name: '' });
        e.preventDefault();
    },

    onNameChange(e) {
        this.setState({ name: e.target.value });
    },

    render: function() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.onNameChange}
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
