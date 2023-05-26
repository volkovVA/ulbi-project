import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SidebarMain } from './SidebarMain';

const meta: Meta<typeof SidebarMain> = {
    title: 'widget/SidebarMain',
    component: SidebarMain,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarMain>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        RouterDecorator,
    ],
};
