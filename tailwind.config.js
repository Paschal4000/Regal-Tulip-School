/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./*.html"
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function ({ matchUtilities }) {
      // Dynamically generate calc-based width and height utilities
      matchUtilities({
        'calc-width': (value) => ({
          width: `calc(${value})`, // Uses calc with the dynamic value
        }),
        'calc-height': (value) => ({
          height: `calc(${value})`, // Uses calc with the dynamic value
        }),
      }, {
        // These are values you can pass as classes
        // For example, '50%-20px' will generate calc(50% - 20px)
        values: {
          '80%-20%': '80% - 20%',
          '100%-10px': '100% - 10px',
          '100%-2rem': '100% - 2rem',
          '50%-1rem': '50% - 1rem',
        },
      });
    },
  ],
}

