import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/components/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
