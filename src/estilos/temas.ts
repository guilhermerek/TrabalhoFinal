import { extendTheme } from "native-base";

export const TEMAS = extendTheme({
    colors: {
        grey: {
            300: '#8D8D99'
        },
        blue: {
            500: '#339CFF',
            800: '#0B3B60'
        },
        white: '#fff',
        black: '#000',
        purple: {
            500: '#bf00ff',
            800: '#8806ce'
        }
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
});