import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from 'react';

import styles from './Input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    classNameWrapper?: string;
    error?: string;
    isDone?: boolean;
    required?: boolean;
    placeholder: string;
};

export function Input(props: InputProps) {
    const { required, className, classNameWrapper, placeholder, error, disabled, isDone, ...otherProps } = props;
    const [value, setValue] = useState('');

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return (
        <label className={classNames(styles.wrapper, classNameWrapper)}>
            <div className={styles.wrapper__left}>
                <input
                    {...otherProps}
                    onChange={onChange}
                    value={value}
                    className={classNames(className, styles.input)}
                />
                {placeholder && (
                    <div>
                        {placeholder}
                        <span>{required ? '*' : ''}</span>
                    </div>
                )}
            </div>
        </label>
    );
}
