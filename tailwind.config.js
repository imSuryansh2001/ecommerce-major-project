/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-gradient": "linear-gradient(75deg,#0098ff_0%,#7b35c8_100%)",
            },
            fontFamily: {
                primary: ["Outfit", "sans-serif"],
            },
        },
    },
    plugins: [],
};
