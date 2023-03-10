import classNames from 'classnames';
import Link from 'next/link';

import { Button, Input } from '../../ui';
import styles from './Proposal.module.scss';

export interface ProposalProps {
    isActive?: boolean;
    onClose?: () => void;
}

export function Proposal(props: ProposalProps) {
    return (
        <div>
            <button
                onClick={props.onClose}
                className={classNames(styles.bg, props.isActive ? styles.bg__active : '')}
            />
            <div className={classNames(styles.block, props.isActive ? styles.block__active : '')}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Онлайн-заявка</h2>
                    <p className={styles.description}>
                        Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы
                    </p>
                    <div className={styles.inputs}>
                        <Input placeholder={'Телефон'} required classNameWrapper={styles.inputs__item} />
                        <Input placeholder={'Имя'} classNameWrapper={styles.inputs__item} />
                    </div>
                    <div className={styles.send}>
                        <p className={styles.send__text}>
                            Нажимая на кнопку «Оставить заявку», я даю согласие{' '}
                            <a href='/' target={'_blank'}>
                                на обработку персональных данных
                            </a>
                        </p>
                        <Button className={styles.send__btn} onClick={props.onClose}>
                            Оставить заявку
                        </Button>
                    </div>
                    <div className={styles.contacts}>
                        <Link className={styles.contacts__item} target={'_blank'} href={'#'}>
                            <Viber />
                        </Link>
                        <Link className={styles.contacts__item} target={'_blank'} href={'#'}>
                            <Telegram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Viber() {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_1_3898)'>
                <path
                    d='M10.0001 0.799927C4.92731 0.799927 0.800108 4.92713 0.800108 9.99993C0.800108 11.5839 1.20931 13.1415 1.98531 14.5159L0.814908 18.6919C0.776508 18.8291 0.813708 18.9763 0.912908 19.0783C0.989308 19.1571 1.09331 19.1999 1.20011 19.1999C1.23211 19.1999 1.26451 19.1959 1.29611 19.1883L5.65451 18.1087C6.98531 18.8231 8.48411 19.1999 10.0001 19.1999C15.0729 19.1999 19.2001 15.0727 19.2001 9.99993C19.2001 4.92713 15.0729 0.799927 10.0001 0.799927ZM14.6281 13.2463C14.4313 13.7911 13.4873 14.2883 13.0337 14.3551C12.6265 14.4147 12.1113 14.4403 11.5457 14.2627C11.2029 14.1547 10.7629 14.0115 10.1993 13.7711C7.83011 12.7607 6.28291 10.4051 6.16451 10.2495C6.04651 10.0939 5.20011 8.98513 5.20011 7.83753C5.20011 6.68993 5.81011 6.12553 6.02691 5.89193C6.24371 5.65833 6.49931 5.59993 6.65691 5.59993C6.81451 5.59993 6.97171 5.60193 7.10971 5.60833C7.25491 5.61553 7.44971 5.55353 7.64131 6.00873C7.83811 6.47593 8.31051 7.62353 8.36891 7.74073C8.42811 7.85753 8.46731 7.99393 8.38891 8.14953C8.31051 8.30513 8.27131 8.40233 8.15291 8.53873C8.03451 8.67513 7.90491 8.84273 7.79851 8.94753C7.68011 9.06393 7.55731 9.18993 7.69491 9.42353C7.83251 9.65713 8.30651 10.4207 9.00891 11.0391C9.91091 11.8335 10.6721 12.0799 10.9081 12.1967C11.1441 12.3135 11.2821 12.2939 11.4197 12.1383C11.5573 11.9823 12.0101 11.4571 12.1673 11.2239C12.3245 10.9907 12.4821 11.0291 12.6989 11.1071C12.9157 11.1847 14.0769 11.7487 14.3129 11.8655C14.5489 11.9823 14.7065 12.0407 14.7657 12.1379C14.8249 12.2347 14.8249 12.7019 14.6281 13.2463Z'
                    fill='#575757'
                />
            </g>
            <defs>
                <clipPath id='clip0_1_3898'>
                    <rect width='20' height='20' fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
}

function Telegram() {
    return (
        <svg width='22' height='17' viewBox='0 0 22 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.61862 11.2189L16.7717 16.7684C17.7021 17.2414 18.3736 16.9965 18.6053 15.9726L21.924 1.56445C22.2638 0.30941 21.4048 -0.259816 20.5147 0.112461L1.0272 7.03535C-0.303004 7.5269 -0.295249 8.21061 0.784733 8.51526L5.78567 9.95328L17.3634 3.22393C17.9099 2.91858 18.4116 3.08274 17.9998 3.41939'
                fill='#575757'
            />
        </svg>
    );
}
