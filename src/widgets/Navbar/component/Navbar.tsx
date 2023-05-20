/* eslint-disable i18next/no-literal-string */
import { AppLink, AppLinkTheme } from 'shared/components/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                Главная
            </AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                О сайте
            </AppLink>
        </div>
    </div>
);
