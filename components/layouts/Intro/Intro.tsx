import classNames from 'classnames';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '../../ui';
import styles from './Intro.module.scss';

interface SlideItem {
    image: string;
    title: string;
    description: string;
}

const slides: SlideItem[] = [
    {
        image: '/test6/images/slide1.jpg',
        title: 'Авто в лизинг для физических лиц ',
        description: 'Получите машину за 5 дней',
    },
    {
        image: '/test6/images/slide2.jpg',
        title: 'Авто в лизинг для физических лиц 1',
        description: 'Получите машину за 5 дней 1',
    },
    {
        image: '/test6/images/slide3.jpg',
        title: 'Авто в лизинг для физических лиц 2',
        description: 'Получите машину за 5 дней 2',
    },
    {
        image: '/test6/images/slide1.jpg',
        title: 'Авто в лизинг для физических лиц ',
        description: 'Получите машину за 5 дней 3',
    },
    {
        image: '/test6/images/slide2.jpg',
        title: 'Авто в лизинг для физических лиц 1',
        description: 'Получите машину за 5 дней 4',
    },
    {
        image: '/test6/images/slide3.jpg',
        title: 'Авто в лизинг для физических лиц 2',
        description: 'Получите машину за 5 дней 5',
    },
];

export interface IntroProps {
    onSend?: () => void;
}

export function Intro(props: IntroProps) {
    const [activeSlide, setActiveSlide] = useState(0);
    const refRightArrow = useRef<HTMLButtonElement | null>(null);

    const reloadAnimation = useCallback(() => {
        const current = refRightArrow.current;
        if (current) {
            current.classList.remove(styles.arrows__right__animation);
            setTimeout(() => {
                current.classList.add(styles.arrows__right__animation);
            }, 10);
        }
    }, [refRightArrow]);

    useEffect(() => {
        reloadAnimation();
        const timeout = setTimeout(() => {
            setActiveSlide((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
        }, 10000);

        return () => {
            clearInterval(timeout);
        };
    }, [activeSlide]);

    const onNext = useCallback(() => {
        setActiveSlide((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
    }, []);

    const onPrev = useCallback(() => {
        setActiveSlide((prev) => (prev - 1 === -1 ? slides.length - 1 : prev - 1));
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{slides[activeSlide].title}</h1>
                    <h2 className={styles.description}>{slides[activeSlide].description}</h2>
                    <div className={styles.button}>
                        <Button onClick={props.onSend}>Оставить заявку</Button>
                    </div>
                </div>
                <div className={styles.arrows}>
                    <button className={styles.arrows__left} onClick={onPrev}>
                        <svg width='7' height='10' viewBox='0 0 7 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M5.5 1L1.5 5L5.5 9' stroke='white' strokeWidth='2' />
                        </svg>
                    </button>
                    <button ref={refRightArrow} className={styles.arrows__right} onClick={onNext}>
                        <svg width='11' height='18' viewBox='0 0 11 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M1 1L9 9L1 17' stroke='white' strokeWidth='2' />
                        </svg>
                    </button>
                </div>

                <Dots activeSlide={activeSlide} length={slides.length} />
                <Image className={styles.image} width={675} height={379} src={slides[activeSlide].image} alt={'bg'} />
            </div>
        </div>
    );
}

interface DotsProps {
    activeSlide: number;
    length: number;
}

function Dots(props: DotsProps) {
    return (
        <div className={styles.dots}>
            {new Array(props.length).fill(null).map((_, index) => {
                return (
                    <div
                        key={index}
                        className={classNames(styles.dots__item, index === props.activeSlide ? styles.active : '')}
                    ></div>
                );
            })}
        </div>
    );
}
