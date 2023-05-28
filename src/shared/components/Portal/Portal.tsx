import {
    FC, ReactNode, useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        element = document.body,
    } = props;

    const ref = useRef();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector('#root') || undefined;
        setMounted(true);
    }, []);

    return mounted && ref.current ? createPortal(children, element) : null;
};
