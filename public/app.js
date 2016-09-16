import React from 'react';

const App = React.createClass({
    getInitialState() {
        return {
            fields: {},
            people: [],
        };
    },

    onFormSubmit(e) {
        const people = [
            ...this.state.people,
            this.state.fields,
        ];
        this.setState({ people, fields: {} });
        e.preventDefault();
    },

    onInputChange(e) {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    },

    render: function() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name || ''}
                        onChange={this.onInputChange}
                    >
                    </input>

                    <input
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email || ''}
                        onChange={this.onInputChange}
                    >
                    </input>

                    <input type='submit' />
                </form>
                <div>
                    <h3>Names</h3>
                    <ul>
                        { this.state.people.map(({ name, email }, i) =>
                            <li key={i}>{name} ({ email })</li>
                        ) }
                    </ul>
                </div>
            </div>
        );
    },
});

export default App;
