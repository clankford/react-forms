import React from 'react';

const App = React.createClass({
    getInitialState() {
        return {
            fields: {},
            fieldErrors: {},
            people: [],
        };
    },

    onFormSubmit(e) {
        const people = [ ...this.state.people ];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        this.setState({ fieldErrors });
        e.preventDefault();

        if (Object.keys(fieldErrors).length) return;

        people.push(person);
        this.setState({ people, fields: {} });
    },

    onInputChange(e) {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    },

    validate(person) {
        return {};
    },

    render: function() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={this.onFormSubmit}>

                    <input
                        placeholder='Name'
                        name='name'
                        // https://github.com/erikras/redux-form/issues/735
                        value={this.state.fields.name || ''}
                        onChange={this.onInputChange}
                    />

                    <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>

                    <br />

                    <input
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email || ''}
                        onChange={this.onInputChange}
                    />

                    <span style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>

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
