/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "hsl-218-28-13": "hsl(218, 28%, 13%)",
                "hsl-0-0-100": "hsl(0, 0%, 100%)",
                "hsl-0-100-63": "hsl(0, 100%, 63%)",
                "hsl-198-60-50": "hsl(198, 60%, 50%)",
                "hsl-176-68-64": "hsl(176, 68%, 64%)",
                "hsl-219-30-18": "hsl(219, 30%, 18%)",
                "hsl-216-53-9": "hsl(216, 53%, 9%)",
                "hsl-217-28-15": "hsl(217, 28%, 15%)",
            },
        },
        variants: {
            extend: {
                backgroundColor: ["hover"],
            },
        },
    },
    plugins: [],
};
