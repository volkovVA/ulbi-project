import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
    args: {
        isOpen: true,
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, numquam!',
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const ModakDark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, numquam!',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
