import { injectGlobal } from 'styled-components'
import { colors } from '~/constants'

export default injectGlobal`

/* container */
html, body, div, header, nav, menu, main, section, hr, footer,

/* media */
img, svg, audio, video, canvas, object, iframe,

/* text */
h1, h2, h3, h4, h5, h6, a, p, span, ol, ul, li,
blockquote, code, del, ins, sub, sup,

/* data */
table, caption, tbody, tfoot, thead, tr, th, td,

/* form */
form, label, input, textarea, datalist, option, select, button

{

  position: relative;
  top : 0px; right: 0px; bottom: 0px; left: 0px;

  box-sizing: border-box;
  width: initial;
  height: initial;
  padding: 0px;
  border-style: solid;
  border-width: 0px;
  border-color: inherit;
  margin: 0px;
  background-color: transparent;

  text-align: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  vertical-align: baseline;
  text-decoration: inherit;
  color: inherit;
  white-space: normal;
  max-width: 100%;

  /* make styles more consistent on iOS */
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  transition: inherit;
  
  /* faster paints */
  backface-visibility: hidden;


}

  :focus {
    border-style: none;
    outline : none;
  }

  ::selection {
    background-color: ${ colors.LIGHT_BLUE };
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 200;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #000;
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: ${ colors.LIGHT_GRAY };
  }

  a, button {
    cursor: pointer;
  }

  h1 {
    font-size: 32px;
    line-height: 48px;
  }

  h2 {
    font-size: 27px;
    line-height: 40px;
  }

  h3 {
    font-size: 22px;
    line-height: 33px;
  }

  h4 {
    font-size: 18px;
    line-height: 27px;
  }

`