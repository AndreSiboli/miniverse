import { CSSProperties, useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import childStyle from '@/styles/layout/Card.module.scss';
import {
    observerAbout,
    observerCards,
    observerTitle,
    observerUpdate,
} from '@/utils/Observers/HomeObserver';

import Head from 'next/head';
import Navbar from '@/components/bars/Navbar';
import Container from '@/components/layout/Container';
import Img from '@/components/utils/Img';
import CardUpdate from '@/components/layout/CardUpdate';
import Card from '@/components/layout/Card';
import Footer from '@/components/bars/Footer';

import wallpaper from '@/assets/home/wallpaper.jpg';
import gif from '@/assets/home/gif.gif';
import text from '@/assets/home/text.jpg';
import soon from '@/assets/home/cards/soon.jpg';
import image1 from '@/assets/home/cards/hellokitty.webp';
import image2 from '@/assets/home/cards/1.jpg';
import image3 from '@/assets/home/cards/2.jpg';
import image4 from '@/assets/home/cards/3.jpg';
import update from '@/assets/home/update.jpg';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const titleEl = useRef(null);
    const cardsEl = useRef(null);
    const aboutContentEl = useRef(null);
    const aboutTitleEl = useRef(null);
    const updateTitleEl = useRef(null);

    const cards = [
        { img: image1.src, title: 'Hello Kitty', content: 'Memory game', link: '/games/memory' },
        { img: soon.src, title: 'Em breve', content: 'Em construção.', link: '#' },
        { img: soon.src, title: 'Em breve', content: 'Em construção.', link: '#' },
        { img: soon.src, title: 'Em breve', content: 'Em construção.', link: '#' },
    ];

    useEffect(() => {
        observerTitle(titleEl.current, styles);
        observerAbout(aboutContentEl.current, aboutTitleEl.current, styles);
        observerUpdate(updateTitleEl.current, styles);
        observerCards(cardsEl.current, childStyle);
    }, []);

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`} id="home">
                <Navbar />
                <div className={styles.wallpaper}>
                    <Img
                        src={wallpaper.src}
                        style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
                    />
                </div>
                <div className={styles.main_merchant}>
                    <Container>
                        <div className={styles.merchant_container}>
                            <div className={styles.merchant_title} ref={titleEl}>
                                <h1>
                                    Bem-vindo ao{' '}
                                    <span style={{ backgroundImage: `url(${text.src})` }}>
                                        Miniverse
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </Container>
                </div>
            </main>

            <section className={styles.games} id="games">
                <Container>
                    <div className={styles.games_container}>
                        <div className={styles.games_title}>
                            <h2>JOGOS</h2>
                        </div>
                        <div className={styles.cards_container} ref={cardsEl}>
                            {cards.map((card) => (
                                <Card data={card} key={card.img} />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.updates} id="updates">
                <Container>
                    <div className={styles.updates_container}>
                        <div className={styles.updates_title} ref={updateTitleEl}>
                            <h2>Updates</h2>
                        </div>
                        <div className={styles.updates_update}>
                            <CardUpdate
                                img={update.src}
                                title="Update One"
                                text=" Como não tem nenhuma atualização. Prestigie a foto desse pato. Quack!"
                                link="/"
                            />
                            <CardUpdate
                                img={update.src}
                                title="Update Two"
                                text=" Como não tem nenhuma atualização. Pretigie a foto desse pato. Quack!"
                                link="/"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.about} id="about">
                <Container>
                    <div className={styles.about_container}>
                        <div className={styles.about_content} ref={aboutContentEl}>
                            <p>
                                No Miniverse, a magia está em cada clique. Imagine um lugar onde
                                você pode experimentar uma miríade de jogos emocionantes?
                                Acreditamos que os jogos não precisam ser gigantes para proporcionar
                                uma experiência memorável. Cada mini-game no Miniverse foi
                                cuidadosamente projetado para envolver, desafiar e entreter.
                                <br /> <br /> <br />
                                <span className={styles.purpose}>
                                    Nossa visão é simples: tornar o entretenimento acessível e
                                    instantâneo. Com apenas alguns cliques, você pode mergulhar em
                                    um mundo de jogos cativantes.
                                </span>
                                <br /> <br />
                                <span className={styles.slogan}>
                                    Bem-vindo ao Miniverse, onde o tamanho não define a diversão!
                                </span>
                            </p>
                        </div>
                        <div className={styles.about_title} ref={aboutTitleEl}>
                            <h2>About</h2>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}
