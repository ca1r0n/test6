import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    theme?: 'contained' | 'outlined' | 'gray';
    isLoading?: boolean;
};

export function Button(props: ButtonProps) {
    const { className, isLoading, theme = 'contained', ...otherProps } = props;

    return (
        <button
            {...otherProps}
            className={classNames(
                className,
                styles.button,
                theme === 'contained' ? styles.contained : '',
                theme === 'outlined' ? styles.outlined : '',
                theme === 'gray' ? styles.gray : '',
            )}
        />
    );
}
