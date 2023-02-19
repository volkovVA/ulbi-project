import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import { SidebarMain } from 'widgets/Sidebar';
import {classNames} from "shared/lib/classNames/classNames";
import "./styles/index.scss";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <SidebarMain />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;