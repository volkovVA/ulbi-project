import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/components/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './SidebarMain.module.scss';

interface SidebarMainProps {
    className?: string;
}

export const SidebarMain: FC<SidebarMainProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                cls.sidebarMain,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar-main"
        >
            <Button
                onClick={onToggle}
                data-testid="sidebar-toggle"
            >
                {t('Переключить')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
