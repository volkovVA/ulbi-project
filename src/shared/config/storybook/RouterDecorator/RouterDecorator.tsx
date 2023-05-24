import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => React.ReactNode) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
