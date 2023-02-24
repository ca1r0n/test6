const path = require('path');

module.exports = {
    basePath: '/test6',
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
        };
    },
    images: {
        loader: 'akamai',
        path: '/test6',
    },
};
