import { AppLink, AppLinkTheme } from 'shared/components/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
          Главная
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  )
};
