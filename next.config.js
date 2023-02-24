const path = require('path');

module.exports = {
    basePath: '/test6',
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/test6': { page: '/test6' },
        };
    },
    images: {
        loader: 'akamai',
        path: '/test6',
    },
};
