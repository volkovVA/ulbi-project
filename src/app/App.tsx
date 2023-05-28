import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SidebarMain } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <Navbar />
            <div className="content-page">
                <SidebarMain />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);

export default App;
