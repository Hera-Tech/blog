const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        borderRadius: {
            'full': '200px',
        },
        extend: {
            borderRadius: {
                '4xl': '48px',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            width: {
                '112': '28rem',
                '120': '40rem',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
