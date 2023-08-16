/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        '1':'#ff1cc1',
        '2':'#b131fa',
        '3':'#490074',
        '4':'#1c39ff',
        '5':'#856eb7',
        '6':'#7bcadd',
        '7':'#4cb7ca',
        '8':'#1d99ae',
      },
      backgroundImage: {
        'loginFondo':"url(/public/login-fondo.jpg)",
        'login':"url(/public/login.jpg)",
        'registerFondo':"url(/public/register-fondo.png)",
        'register':"url(/public/register.jpg)",
        'homeFondo':"url(/public/home-fondo.jpg)",
      },
    },
  },
  plugins: [],
}

