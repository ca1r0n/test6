import { useCallback, useState } from 'react';

import { Button, InputRange } from '../../ui';
import styles from './Calculator.module.scss';

export interface CalculatorProps {
    onSend?: () => void;
}

interface AllInfo {
    price: number;
    first: number;
    firstPercent: number;
    months: number;
    everyMonth: number;
    stavka: number;
    endSum: number;
}

export function Calculator(props: CalculatorProps) {
    const [allInfo, setAlInfo] = useState<AllInfo>({
        price: 3300000,
        first: 420000,
        firstPercent: 13,
        months: 60,
        everyMonth: 114455,
        stavka: 0.2,
        endSum: 4467313,
    });

    const onChange = useCallback(
        (key: keyof AllInfo) => (value: number) => {
            setAlInfo((prev) => {
                const n = {
                    ...prev,
                    [key]: value,
                };

                if (n.first > n.price * 0.6) {
                    n.first = Math.round(n.price * 0.6);
                } else if (n.first < n.price * 0.1) {
                    n.first = Math.round(n.price * 0.1);
                }

                n.firstPercent = Math.round((n.first / n.price) * 100);
                n.everyMonth = Math.round(((n.price - n.first) * (n.stavka + 1)) / n.months);
                n.endSum = Math.round(n.first + n.months * n.everyMonth);

                return n;
            });
        },
        [],
    );
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Рассчитайте стоимость автомобиля в лизинг</h3>
            <div className={styles.top}>
                <div>
                    <h5 className={styles.item__title}>Стоимость автомобиляа</h5>
                    <InputRange
                        rightItem={'₽'}
                        value={allInfo.price}
                        onChange={onChange('price')}
                        from={1000000}
                        to={6000000}
                    />
                </div>
                <div>
                    <h5 className={styles.item__title}>Первоначальный взнос</h5>
                    <InputRange
                        rightItem={<div className={styles.procents}>{allInfo.firstPercent}</div>}
                        value={allInfo.first}
                        onChange={onChange('first')}
                        from={allInfo.price * 0.1}
                        to={allInfo.price * 0.6}
                    />
                </div>
                <div>
                    <h5 className={styles.item__title}>Срок лизинга</h5>
                    <InputRange
                        rightItem={'мес.'}
                        value={allInfo.months}
                        onChange={onChange('months')}
                        from={1}
                        to={60}
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <h5 className={styles.item__title}>Сумма договора лизинга</h5>
                    <p className={styles.bottom__description}>{allInfo.endSum} ₽</p>
                </div>
                <div>
                    <h5 className={styles.item__title}>Ежемесячный платеж от</h5>
                    <p className={styles.bottom__description}>{allInfo.everyMonth} ₽</p>
                </div>
                <Button onClick={props.onSend} className={styles.btn}>
                    Оставить заявку
                </Button>
            </div>
        </div>
    );
}
