/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1fa471",
                lightbg: "#ebeef2",
                darkbg: "#202020",
                dark: "#101010",
            },
        },
    },

    variants: {
        fill: ["hover", "focus"], // svg
    },
    darkMode: "class",
    plugins: [],
};
