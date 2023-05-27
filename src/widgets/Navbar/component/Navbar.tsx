/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/components/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/components/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onCLose={onToggleModal}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, numquam!
            </Modal>
        </div>
    );
};
