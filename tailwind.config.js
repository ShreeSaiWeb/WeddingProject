module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'wedding': ['Alex Brush', 'cursive'],
        'subtitle': ['Cormorant Garamond', 'serif'],
         'playfair': ["'Playfair Display'", "serif"],
       
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}