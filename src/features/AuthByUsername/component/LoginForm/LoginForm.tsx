import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button/Button';
import { Input } from 'shared/components/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
            />
            <Input
                type="text"
                placeholder={t('Введите пароль')}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
