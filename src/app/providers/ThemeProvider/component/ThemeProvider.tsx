import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

// Type-guard  для проверки, чтобы потом не оказалось,
// что в теме лежит не "light/dark", а, например, число
const isTheme = (value: any): value is Theme => typeof value === 'string'
    && (Theme.DARK === value || Theme.LIGHT === value);
const getDefaultTheme = (): Theme => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    return isTheme(defaultTheme) ? defaultTheme : Theme.LIGHT;
};

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(getDefaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
