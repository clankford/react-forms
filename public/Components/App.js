// React
import React from 'react';
// Redux
import { connect, Provider } from 'react-redux';
import store from '../store';
// Components
import FormComponent from './FormComponent';

const ReduxForm = connect(mapStateToProps, mapDispatchToProps)(FormComponent);

module.exports = React.createClass({
    componentWillMount() {
        store.dispatch(fetchPeople());
    },

    render() {
        return (
            <Provider store={store}>
                <FormComponent />
            </Provider>
        )
    },
});

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        fields: state.person,
        people: state.people,
        saveStatus: state.saveStatus,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (people) => {
            dispatch(savePeople(people));
        },
    };
};
