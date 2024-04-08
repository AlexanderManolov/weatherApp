import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* 1. Use a more-intuitive box-sizing model. */
*, *::before, *::after {
box-sizing: border-box;
}

/* 2. Remove default margin */
* {
margin: 0;
}

/* 3. Allow percentage-based heights in the application */
html, body {
height: 100%;
}

/* Typographic tweaks! 4. Add accessible line-height 5. Improve text rendering */
body {
line-height: 1.5;
-webkit-font-smoothing: antialiased;
font-family: 'Lato', sans-serif;
color: white;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
display: block;
max-width: 100%;
}

ul, li {
  float: left;
  border: 0px;
  margin: 0;
  padding: 0;
}

/* 7. Remove built-in form typography styles */
input, button, textarea, select {
font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
overflow-wrap: break-word;
}

/* 9. Create a root stacking context */
#root, #__next {
isolation: isolate;
height: 100%;
}

@font-face {
  font-family: Lato;
  src: url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
}
`

export default GlobalStyle