import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SidebarMain } from './SidebarMain';

describe('SidebarMain', () => {
    test('test render', () => {
        renderWithTranslation(<SidebarMain />);
        expect(screen.getByTestId('sidebar-main')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<SidebarMain />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar-main')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar-main')).toHaveClass('collapsed');
    });
});
