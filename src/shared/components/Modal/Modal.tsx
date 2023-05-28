import {
    FC,
    ReactNode,
    MouseEvent,
    useEffect,
    useCallback,
    useState,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/components/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onCLose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onCLose,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const timerRef = useRef(null);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.opened]: isOpening,
    };

    const closeHandler = useCallback(() => {
        if (onCLose) {
            onCLose();
        }
    }, [onCLose]);

    const onContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, 0);
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            setIsOpening(false);
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (!isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
