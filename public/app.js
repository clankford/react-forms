import React from 'react';

const App = React.createClass({
    onButtonClick(e) {
        const btn = e.target;
        console.log(`The user clicked ${btn.name}: ${btn.value}`);
    },

    render: function() {
        return (
            <div>
                <h1>Do you like Arsenal?!</h1>

                <button
                    name='button-1'
                    value='yes'
                    onClick={this.onButtonClick}
                >
                    Yes!
                </button>
                <button
                    name='button-2'
                    value='no'
                    onClick={this.onButtonClick}
                >
                    No!
                </button>
            </div>
        );
    },
});

export default App;
