import { useMemo, createContext, useState } from "react";
import { createTheme, PaletteMode, PaletteOptions } from "@mui/material";
import { lightBlue, grey, pink } from "@mui/material/colors";

const DarkPaletteOption: PaletteOptions = {
    divider: lightBlue[50],
    text: {
        primary: grey[500],
        secondary: grey[300]
    },
    background: {
        default: lightBlue[100],
        paper: lightBlue[200]
    }
}

const LightPaletteOption: PaletteOptions = {
    divider: lightBlue[800],
    text: {
        primary: grey[300],
        secondary: grey[500]
    },
    background: {
        default: lightBlue[300],
        paper: lightBlue[400]
    }
}


const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(
            mode === 'light'
            ? DarkPaletteOption
            : LightPaletteOption
        ),
        primary: {
            main: pink[500],
            dark: pink[400]
        }
    },
  });
  
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
})

export const themeContextValue = () => {
    const [mode, setMode] = useState<PaletteMode>('dark')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                )
            },
        }),
        [mode]
    )

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

    return { colorMode, theme }
}
