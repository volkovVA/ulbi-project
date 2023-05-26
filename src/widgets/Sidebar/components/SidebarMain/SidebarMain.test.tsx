import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { SidebarMain } from './SidebarMain';

describe('SidebarMain', () => {
    test('test render', () => {
        componentRender(<SidebarMain />);
        expect(screen.getByTestId('sidebar-main')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<SidebarMain />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar-main')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar-main')).toHaveClass('collapsed');
    });
});
