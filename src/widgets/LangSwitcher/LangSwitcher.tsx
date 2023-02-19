import { FC } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';
import { ThemeButton } from 'shared/components/Button/component/Button';
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
  const {t, i18n} = useTranslation();

  const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      onClick={toggle}
      className={classNames(cls.themeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </Button>
  )
};
