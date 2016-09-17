import React from 'react';
import isEmail from 'validator/lib/isEmail';
import Field from './FieldComponent';

const App = React.createClass({
    getInitialState() {
        return {
            fields: {},
            fieldErrors: {},
            people: [],
        };
    },

    onFormSubmit(e) {
        const people = this.state.people;
        const person = this.state.fields;

        e.preventDefault();

        if (this.validate()) return;

        people.push(person);
        this.setState({ people, fields: {} });
    },

    onInputChange({ name, value, error }) {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({ fields, fieldErrors });
    },

    validate() {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errorMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

        if (!person.name) return true;
        if (!person.email) return true;
        if (errorMessages.length) return true;

        return false;
    },

    render: function() {
        return (
            <div>
                <h1>Sign Up</h1>

                <form onSubmit={this.onFormSubmit}>

                    <Field
                        placeholder='Name'
                        name='name'
                        // https://github.com/erikras/redux-form/issues/735
                        value={this.state.fields.name || '' }
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Name Required')}
                    />

                    <br />

                    <Field
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email || ''}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val) ? false : 'Invalid Email')}
                    />

                    <input type='submit' disabled={this.validate()} />
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
