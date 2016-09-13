import React from 'react';

const App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Do you like Arsenal?!</h1>

                <button
                    name='button-1'
                    value='yes'
                    onClick={this.onYesClick}
                >
                    Yes!
                </button>
                <button
                    name='button-2'
                    value='no'
                    onClick={this.onNoClick}
                >
                    No!
                </button>
            </div>
        );
    },
});

export default App;
