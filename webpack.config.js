const path = require('path');

module.exports = {
    // Your existing webpack configuration
    // Add or merge the following configuration to your existing webpack configuration
    resolve: {
        fallback: {
            "https": require.resolve("https-browserify")
        }
    },
    // Other webpack configurations...
};