import { useEffect, useState } from 'react';
import styles from '@/styles/pages/Memory.module.scss';
import { formatTime } from '@/utils/Format';

import Head from 'next/head';
import CardSection from '@/components/CardsSection/Index';
import MemoryBar from '@/components/bars/MemoryBar';
import MessageCard from '@/components/layout/MessageCard';
import Container from '@/components/layout/Container';
import Img from '@/components/utils/Img';

import logo from '@/assets/games/hello-kitty/melody.webp';
import wallpaper from '@/assets/games/hello-kitty/wallpaper.jpg';

export default function Memory() {
    const [firstClick, setFirstClick] = useState(false);
    const [message, setMessage] = useState(false);
    const [reRoll, setReRoll] = useState(false);
    const [timer, setTimer] = useState(0);
    const [tries, setTries] = useState(0);
    const [score, setScore] = useState(0);
    const [hits, setHits] = useState(0);

    const data = {
        img: logo.src,
        text: 'Você ajudou a encontrar Hello Kitty e seus amigos! Qual será a sua proxima aventura?',
        link: '/',
    };

    //Start the timer
    useEffect(() => {
        if (!firstClick) return;

        const interval = setInterval(() => {
            setTimer((prevState) => prevState + 1);
        }, 1000);

        if (timer >= 3599) return clearInterval(interval);

        return () => clearInterval(interval);
    }, [timer, firstClick]);

    //Check if the player win
    useEffect(() => {
        if (hits === 10) {
            setFirstClick(false);
            setMessage(true);
        }
    }, [hits]);

    function playAgain() {
        setTimer(0);
        setTries(0);
        setScore(0);
        setHits(0);
        setReRoll(true);
        setMessage(false);
        setTimeout(() => {
            setReRoll(false);
        }, 1000);
    }

    function defineScore(score: number) {
        setScore((prevState) => prevState + score);
    }

    function defineTries(tries: number) {
        setTries((prevState) => prevState + tries);
    }

    function defineHits(hit: number) {
        setHits((prevState) => prevState + hit);
    }

    function defineClick() {
        setFirstClick(true);
    }

    return (
        <>
            <Head>
                <title>Memory Game | Hello Kitty Edition</title>
            </Head>
            <main className={styles.memory}>
                <div className={styles.wallpaper}>
                    <Img
                        src={wallpaper.src}
                        style={{ objectFit: 'cover', filter: 'brightness(0.3)' }}
                    />
                </div>

                <MemoryBar />

                <div className={styles.infos}>
                    <Container>
                        <div className={styles.infos_container}>
                            <div className={styles.infos_time}>
                                <h2>Tempo</h2>
                                <p>{formatTime(timer)}</p>
                            </div>
                            <div className={styles.infos_score}>
                                <h2>Score</h2>
                                <p>{score}</p>
                            </div>
                            <div className={styles.infos_tries}>
                                <h2>Erros</h2>
                                <p>{tries}</p>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className={styles.memory_cards}>
                    <CardSection
                        handleWrong={defineTries}
                        handleFirst={defineClick}
                        handleScore={defineScore}
                        handleHits={defineHits}
                        playAgain={reRoll}
                    />
                </div>
            </main>
            {message && (
                <MessageCard data={data} game={{ timer, score, tries }} handleAgain={playAgain} />
            )}
        </>
    );
}
