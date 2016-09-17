import React, { PropTypes } from 'react';

module.exports = React.createClass({
    propTypes: {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired,
    },

    getInitialState() {
        return {
            value: this.props.value,
            error: false,
        };
    },

    componentWilReceiveProps(update) {
        this.setState({ value: update.value });
    },

    render() {
        return (
            <div>
                <input
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <span style={{ color: 'red' }}>{ this.state.error }</span>
            </div>
        );
    },
});
