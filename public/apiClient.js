module.exports = {
    loadPeople: function() {
        return {
            then: function(cb) {
                setTimeout(() => {
                    cb(JSON.parse(localStorage.people || '[]'));
                }, 1000);
            },
        };
    },

    savePeople: function(people) {
        // Simulate Errors
        const success = !!(this.count++ % 2);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!success) return reject({ success });

                localStorage.people = JSON.stringify(people);
                return resolve({ success });
            }, 1000);
        });
    },

    count: 1
};
