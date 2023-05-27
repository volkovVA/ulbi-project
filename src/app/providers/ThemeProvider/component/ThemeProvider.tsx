import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
}

// Type-guard  для проверки, чтобы потом не оказалось,
// что в теме лежит не "light/dark", а, например, число
const isTheme = (value: any): value is Theme => typeof value === 'string'
    && (Theme.DARK === value || Theme.LIGHT === value);
const getDefaultTheme = (): Theme => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    return isTheme(defaultTheme) ? defaultTheme : Theme.LIGHT;
};

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || getDefaultTheme);

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
