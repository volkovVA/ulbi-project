import { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

// TODO: Добавить в сторибук i18n, отрефакторить код

export const preview: Preview = {
    parameters: {
        decorators: [
            StyleDecorator,
            // TODO: Не работает глобально ThemeDecorator и RouterDecorator
            // ThemeDecorator(Theme.LIGHT),
            // RouterDecorator,
        ],
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
