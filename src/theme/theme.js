import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    colors:{
        brand: {
            50: "#3744bd",
            100: "#c4c8ee",
            200: "#9ca3e2",
            300: "#757ed7",
            400: "#4d59cb",
            500: "#3440b2",
            600: "#28328a",
        },
        fade: {
            white: "#f9fafc",
            grey: "	#aaaaaa",
            black: "#d3d3d3"
        },
        black: "#0d0c22",
        yellow1: "#fee715",
        semantic: {
            success: "#22bb33",
            failure: "#bb2124",
            alert: "#f0ad4e",
            info: "#5bc0de"
        }

    },
    components: {
        Heading: {
            variants: {
                cardHeading:{
                    fontSize: '1.2rem'
                }
            }
        }
    }
})