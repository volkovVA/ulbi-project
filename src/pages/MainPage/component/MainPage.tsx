import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const {t} = useTranslation('main');
    
    return (
        <div>
            {t('страница')}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;