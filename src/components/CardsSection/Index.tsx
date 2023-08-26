import { useEffect, useState } from 'react';
import styles from '@/styles/CardsSection/Index.module.scss';
import { Cards } from '@/utils/Cards';

import Card from '@/components/CardsSection/Card';

export default function CardSection(props: any) {
    const { handleWrong, handleFirst, handleScore, handleHits, playAgain } = props;
    const [cards, setCards] = useState([...Cards]);
    const [prevPick, setPrevPick] = useState(-1);
    const [setting, setSetting] = useState(false);

    useEffect(() => {
        const shuffled = shuffledArr(Cards);
        setCards(shuffled);
    }, []);

    useEffect(() => {
        if (!playAgain) return;
        const shuffled = shuffledArr(Cards);
        setPrevPick(-1);
        setCards(shuffled);
    }, [playAgain]);

    function shuffledArr(arr: any[]) {
        const shuffled: any = [];
        const copy = [...arr];

        while (copy.length) {
            const random = Math.floor(Math.random() * copy.length);
            shuffled.push(copy[random]);
            copy.splice(random, 1);
        }

        return shuffled;
    }

    function verifyCards(current: number) {
        if (prevPick === -1) return setPrevPick(current);
        setSetting(true);

        const firstIndex = cards.findIndex((card) => card.id === prevPick);
        const secondIndex = cards.findIndex((card) => card.id === current);

        if (firstIndex === -1 || secondIndex === -1) return;

        const firstCard = cards[firstIndex];
        const secondCard = cards[secondIndex];

        const allCards = cards;
        if (firstCard.compareName === secondCard.compareName) {
            setTimeout(() => {
                allCards[firstIndex] = {
                    ...allCards[firstIndex],
                    found: true,
                };
                allCards[secondIndex] = {
                    ...allCards[secondIndex],
                    found: true,
                };
                handleHits(1);
                handleScore(500);
                setCards(allCards);
                setSetting(false);
            }, 500);
        } else {
            setTimeout(() => {
                allCards[firstIndex] = {
                    ...allCards[firstIndex],
                    flip: false,
                };
                allCards[secondIndex] = {
                    ...allCards[secondIndex],
                    flip: false,
                };
                handleWrong(1);
                handleScore(-100);
                setCards(allCards);
                setSetting(false);
            }, 1000);
        }

        setPrevPick(-1);
    }

    function flipCard(id: number) {
        handleFirst();
        const index = cards.findIndex((data) => data.id === id);

        if (index === -1) return;
        if (cards[index].flip || cards[index].found) return;

        const allCards = cards;

        allCards[index] = {
            ...allCards[index],
            flip: true,
        };

        setCards([...allCards]);

        verifyCards(id);
    }

    return (
        <main className={styles.cardSection}>
            <div className={styles.cardSection_container}>
                {cards.map((card, index) => (
                    <Card
                        key={card.id + card.image + index}
                        data={card}
                        handleCard={flipCard}
                        setting={setting}
                    />
                ))}
            </div>
        </main>
    );
}
