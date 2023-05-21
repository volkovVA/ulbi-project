import { useEffect, useState } from 'react';
import { Button } from 'shared/components/Button/Button';

// Компонент для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow}>
            throw error
        </Button>
    );
};
