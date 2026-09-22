import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",

        "./app/Filament/**/*.php",
        "./resources/views/filament/**/*.blade.php",
        "./vendor/filament/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Plus Jakarta Sans", "Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50: "#FBF8F3",
                    100: "#F5EFE4",
                    200: "#EADCC7",
                    300: "#DFC5A5",
                    400: "#D3AC80",
                    500: "#B8860B", // Luxury Dark Goldenrod / Studio Amber
                    600: "#9E6F05",
                    700: "#7C5402",
                    800: "#5F3E00",
                    900: "#442A00",
                    950: "#271600",
                },
                accent: {
                    dark: "#18181B",
                    light: "#FAFAFA",
                    gold: "#D97706",
                },
            },
            boxShadow: {
                subtle: "0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)",
                card: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
                glow: "0 0 25px -5px rgba(217, 119, 6, 0.25)",
            },
            borderRadius: {
                xl: "0.875rem",
            },
        },
    },

    plugins: [forms],
};
