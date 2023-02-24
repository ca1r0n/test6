import Head from 'next/head';
import { useCallback, useState } from 'react';

import { Calculator, Header, Proposal } from '../components';
import { Intro } from '../components/layouts/Intro';

export default function Main() {
    const [isActive, setIsActive] = useState(false);

    const onClose = useCallback(() => {
        setIsActive(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsActive(true);
    }, []);

    return (
        <>
            <Head>
                <title>Калькулятор</title>
                <meta name='description' content='Калькулятор' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <Header onSend={onOpen} />
            <Intro onSend={onOpen} />
            <Calculator onSend={onOpen} />
            <Proposal isActive={isActive} onClose={onClose} />
        </>
    );
}
