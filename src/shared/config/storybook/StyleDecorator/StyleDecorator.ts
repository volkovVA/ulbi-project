import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => StoryFn) => story();
