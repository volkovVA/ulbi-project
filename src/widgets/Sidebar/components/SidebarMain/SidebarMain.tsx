import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarMain.module.scss';

interface SidebarMainProps {
    className?: string;
}

export const SidebarMain: FC<SidebarMainProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

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
        >
            <button type="button" onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
