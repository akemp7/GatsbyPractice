import { createGlobalStyle } from 'styled-components'
import MuliRegular from 'fonts/Muli-Regular.woff'
import MuliBlack from 'fonts/Muli-Black.woff'

export const colors = {
    green: "#006400", 
    darkGrey: "#1a1c20",
    deepDarkGrey: "#404040",
    blueShade: "#215973",
    white: 	"#FFFFFF"
}

export const darkTheme = {
    colors: {
        background: colors.darkGrey,
        menuBackground: colors.blueShade,
        textDark: colors.green,
        textMain: colors.green,
        textSecondary: colors.green
    },
}

export const darkTheme = {
    colors: {
        background: colors.white,
        menuBackground: colors.blueShade,
        textDark: colors.green,
        textMain: colors.green,
        textSecondary: colors.deepDarkGrey
    },
}

export const GlobalStyles = createGlobalStyle 

   //to create a Css variable
`
:root {
    --site-max-width: 1200px; 
}

@font-face {
    font-family: 'Muli Regular';
    src: local('Muli Regular'), local('MuliRegular'),
    url(${MuliRegular}) format('woff');
}


@font-face {
    font-family: 'Muli Black';
    src: local('Muli Black'), local('MuliBlack'),
    url(${MuliBlack}) format('woff');
}

body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    margin: 0;
    padding: 
}
`


