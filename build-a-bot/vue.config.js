module.exports = {
    devServer: {
        proxy: {
            '/api': {
              target: 'http://localhost:8081',
              changeOrigin: true,
            },
        },
        // LESSON LEARNED: this must be in the same map as package.json
    },
};