import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    // Решение из комментов 1 блок 7 видео
    const toggleTheme = () => {
        setTheme((theme: Theme) => {
            const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

            return newTheme;
        });
    };

    return {
        theme,
        toggleTheme,
    };
}
