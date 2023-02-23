/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            '2xl': { max: '1535px' },
            'xl': { max: '1279px' },
            'lg': { max: '1023px' },
            'md': { max: '767px' },
            'sm': { max: '576px' },
        },
        fontFamily: {
            sans: ['Gilroy'],
            nekst: ['Nekst'],
        },
        colors: {
            gray: {
                400: '#C4C4C4',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
