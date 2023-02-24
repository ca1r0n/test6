const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    basePath: '/test6',
    serverRuntimeConfig: {
        PROJECT_ROOT: path.join(__dirname, 'src'),
    },
    experimental: {
        images: undefined,
    },
};
