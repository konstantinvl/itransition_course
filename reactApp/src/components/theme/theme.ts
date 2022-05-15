import React from 'react';
import { PaletteMode } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? { type: 'light' } : { type: 'dark' }),
  },
});
