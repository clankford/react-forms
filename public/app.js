import React from 'react';

const App = React.createClass({
    onYesClick(e) {
        console.log('The user clicked button-1: yes', e);
    },

    onNoClick(e) {
        console.log('The user clicked button-2: no', e);
    },
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
