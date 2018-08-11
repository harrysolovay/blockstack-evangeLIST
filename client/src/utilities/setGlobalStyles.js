import { injectGlobal } from 'styled-components'
import {
  DEFAULT_FONT_FAMILIES,
  BASE_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  colors
} from '~/constants'

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
  width: inherit;
  height: inherit;
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
    background-color: ${ colors.BLUE };
  }

  body {
    font-family: ${ DEFAULT_FONT_FAMILIES.join(', ') };
    font-size: ${ BASE_FONT_SIZE };
    font-weight: ${ DEFAULT_FONT_WEIGHT };
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: ${ colors.DEFAULT_TEXT_COLOR };
    border-color: ${ colors.DEFAULT_BORDER_COLOR };
  }

  a, button {
    cursor: pointer;
  }

`