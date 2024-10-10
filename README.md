# *YumBite*

- *A Food restaurant app which offers wide variety of food and desserts to customers. The data is fetched using Swiggy live
API. Lazy loading and Code splitting are being used for optimising the app. Users can add and remove items from
cart. Redux Toolkit library is used for managing the state at the top level hierarchy. Components are styled using Tailwind
CSS. Shimmer UI is implemented so as to increase user experience. Jest library is used fortesting.*

- *Live Link : https://yumbite.netlify.app/*

- *Tech Stack : ReactJS, Tailwind CSS, Redux Toolkit, Jest, React Toastify, Swiggy Live API, React-Router-DOM*

  # *Setting up the project*

- Created create-react-app from scratch via. npm, webpack
 
- Install tailwindcss via npm, and create your tailwind.config.js file
  ```
  npm install -D tailwindcss
  npx tailwindcss init
  ```
  
- Configure your template paths
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
  
- Add the Tailwind directives to your CSS
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
  
- Install React Router DOM
  ```
  npm i react-router-dom
  ```
  
- Install Jest & its peer dependencies
  ```
  npm i jest
  ```
  
- Install React-toastify
  ```
  npm i react-toastify
  ```
  
- Don't forget to install CORS chrome extension before running app on localhost
  ```
  https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?pli=1
  ```
