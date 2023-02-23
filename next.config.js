const path = require('path');

module.exports = {
    basePath: '/test6',
    serverRuntimeConfig: {
        PROJECT_ROOT: path.join(__dirname, 'src'),
    },
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
        };
    },
    images: {
        unoptimized: true
    }
};
