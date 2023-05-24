import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
        to: '/',
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
        to: '/',
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
        to: '/',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        RouterDecorator,
    ],
};

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
        to: '/',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        RouterDecorator,
    ],
};
