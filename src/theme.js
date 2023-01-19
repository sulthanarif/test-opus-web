import {createTheme} from '@mui/material/styles';
import "@fontsource/inter";

const theme = createTheme({
    palette: {
        card: {
            main1: '#C71FBE',
            main2: '#64AFF9',
            main3: '2FC7BB',
            main4: '#A460ED'
        },
        fontColor: {
            main: '#FFFFFF'
        },
        fontAcentColor: {
            main: '#4E4C4C'
        },
        acent: {
            main: '#FFB41F'
        }
    },
    typography: {
        fontFamily: "Inter",
        regullar: 400,
        medium: 500,
        bold: 600
    }
})

export default theme;