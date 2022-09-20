import { createGlobalStyle } from "styled-components"


export const lightTheme = {
    color_1: '#212429',
    bg_1: '#ffffff',
    bg_2: '#F4F4F6',
    bg_3: '#3E4145',
    color_2: '#3E4145',
    color_3: '#00BBFF'
}
export const darkTheme = {
    color_1 : '#ffffff',
    bg_1: '#212429',
    bg_2: '#1B1D21',
    bg_3: '#3E4145',
    color_2: '#D2D2DB',
    color_3: '#00BBFF'
}

export const GlobalStyles = createGlobalStyle`

    .container-lg{
        max-width: 1000px;
        width: 100%;
        margin: auto;
    }

`