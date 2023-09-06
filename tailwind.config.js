/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            backgroundImage: {
                background: "url('/background.png')",
                backgroundVenda: "url('/venda.png')",
            },
        },
    },
    plugins: [],
}
