import { ChangeEvent, ReactNode, useCallback, useState } from 'react';

import styles from './InputRange.module.scss';

export interface InputRangeProps {
    from: number;
    to: number;
    value: number;
    onChange: (value: number) => void;
    rightItem?: ReactNode | string;
}

export function InputRange(props: InputRangeProps) {
    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = Number(e.target.value);

            if (props.onChange) {
                if (value > props.to) {
                    props.onChange(props.to);
                } else if (value < props.from) {
                    props.onChange(props.from);
                } else {
                    props.onChange(value);
                }
            }
        },
        [props.to, props.from],
    );

    return (
        <label className={styles.wrapper}>
            <input
                min={props.from}
                max={props.to}
                className={styles.input}
                onChange={onChange}
                type='number'
                value={props.value}
            ></input>
            <Range from={props.from} to={props.to} value={props.value} />
            <input
                min={props.from}
                max={props.to}
                className={styles.range}
                value={props.value}
                onChange={onChange}
                type='range'
            ></input>
            {props.rightItem && <div className={styles.right}>{props.rightItem}</div>}
        </label>
    );
}

interface RangeProps {
    from: number;
    to: number;
    value: number;
}

function Range(props: RangeProps) {
    return (
        <div className={styles.range__block}>
            <div
                className={styles.range__range}
                style={{
                    width: `${((props.value - props.from) / (props.to - props.from)) * 100}%`,
                }}
            ></div>
        </div>
    );
}
