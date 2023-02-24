import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '../../ui';
import styles from './Header.module.scss';

interface HeaderProps {
    onSend?: () => void;
}

export function Header(props: HeaderProps) {
    const [isActive, setIsActive] = useState(false);
    const [isOnTop, setIsOnTop] = useState(true);

    const onOpen = useCallback(() => {
        setIsActive(true);
    }, []);

    const onClose = useCallback(() => {
        setIsActive(false);
    }, []);

    const onSend = useCallback(() => {
        onClose();

        if (props.onSend) {
            props.onSend();
        }
    }, [props.onSend]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset);
            if (window.pageYOffset > 200) {
                setIsOnTop(false);
            } else {
                setIsOnTop(true);
            }
        });
    }, []);

    return (
        <header className={classNames(styles.header, isOnTop ? styles.header__top : '')}>
            <div className={styles.left}>
                <Image
                    className={styles.logo}
                    width={200}
                    height={35}
                    src={'/test6/images/logotype.png'}
                    alt={'logotype'}
                />
                <div className={styles.divide} />
                <p className={styles.description}>лизинговая компания</p>
            </div>
            <button className={classNames(styles.burger, isOnTop ? styles.burger__top : '')} onClick={onOpen}>
                <div className={styles.burger__item}></div>
                <div className={styles.burger__item}></div>
                <div className={classNames(styles.burger__item, styles.burger__item__short)}></div>
            </button>
            <button
                className={classNames(styles.burger__bg, isActive ? styles.burger__bg__active : '')}
                onClick={onClose}
            />
            <div className={classNames(styles.right, isActive ? styles.right__active : '')}>
                <svg
                    className={styles.close}
                    onClick={onClose}
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M22.5996 9.40039L9.40028 22.5997'
                        stroke='black'
                        strokeWidth='2.75'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M9.40039 9.40039L22.5997 22.5997'
                        stroke='black'
                        strokeWidth='2.75'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
                <nav className={styles.navs}>
                    <div className={styles.group}>
                        <Link href={'#'} className={styles.link}>
                            Лизинг
                        </Link>
                        <div className={styles.menu}>
                            <Link className={styles.menu__item} href={'#'}>
                                Для личного пользования
                            </Link>
                            <Link className={styles.menu__item} href={'#'}>
                                Для юридических диц
                            </Link>
                            <Link className={styles.menu__item} href={'#'}>
                                Калькулятор
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Link href={'#'} className={styles.link}>
                            Каталог
                        </Link>
                    </div>
                    <div>
                        <Link href={'#'} className={styles.link}>
                            О нас
                        </Link>
                    </div>
                </nav>
                <Button theme={'outlined'} onClick={onSend} type={'button'}>
                    Оставить заявку
                </Button>
            </div>
        </header>
    );
}
