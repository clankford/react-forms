import React from 'react';
import isEmail from 'validator/lib/isEmail';
import Field from './FieldComponent';
import CourseSelect from './CourseSelectComponent';

const Form = React.createClass({
    propTypes: {
        people: propTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequred,
        saveStatus: PropTypes.string.isRequred,
        fields: PropTypes.object,
        onSubmit: PropTypes.func.isRequred,
    },

    getInitialState() {
        return {
            fields: this.props.fields || {},
            fieldErrors: {},
        };
    },

    componentWillReceiveProps(update) {
        this.setState({ fields: update.fields });
    },

    onFormSubmit(e) {
        const person = this.state.fields;

        e.preventDefault();

        if (this.validate()) return;

        this.props.onSubmit([ ...this.props.people, person ]);
    },

    onInputChange({ name, value, error }) {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({ fields, fieldErrors, _saveStatus: 'READY' });
    },

    validate() {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errorMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

        // Form Level Validation
        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        if (errorMessages.length) return true;

        return false;
    },

    render: function() {
        if (this.props.isLoading) {
            return <img alt='loading' src='/img/loading.gif' />
        }

        const dirty = Object.keys(this.state.fields).length;
        let status = this.props.saveStatus;
        if (status === 'SUCCESS' && dirty) status = 'READY';

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

                    <br />

                    <CourseSelect
                        department={this.state.fields.department}
                        course={this.state.fields.course}
                        onChange={this.onInputChange}
                    />

                    <br />

                    {{
                        SAVING: <input value='Saving...' type='submit' disabled />,
                        SUCCESS: <input value='Saved!' type='submit' disabled />,
                        ERROR: <input
                                value='Save Failed - Retry?'
                                type='submit'
                                disabled={this.validate()}
                               />,
                        READY: <input
                                value='Submit'
                                type='submit'
                                disabled={this.validate()}
                               />,
                    }[status]}

                </form>

                <div>
                    <h3>Names</h3>
                    <ul>
                        { this.props.people.map(({ name, email, department, course }, i) =>
                            <li key={i}>{[ name, email, department, course].join(' - ')}</li>
                        ) }
                    </ul>
                </div>
            </div>
        );
    },
});

export default Form;
