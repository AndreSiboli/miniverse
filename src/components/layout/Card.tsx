import { useEffect, useRef } from 'react';
import styles from '@/styles/layout/Card.module.scss';
import { observerCard } from '@/utils/Observers/HomeObserver';

import Link from 'next/link';
import Img from '../utils/Img';

interface PropTypes {
    data: {
        img: string;
        title: string;
        content: string;
        link: string;
    };
}

export default function Cards(props: PropTypes) {
    const { img, title, content, link } = props.data;

    const cardEl = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        observerCard(cardEl.current, styles);
    }, []);

    return (
        <div className={`${styles.card}`} ref={cardEl}>
            <Link href={link} className={styles.card_link}>
                <div className={styles.card_image}>
                    <Img src={img} style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.card_title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.card_content}>
                    <p>{content}</p>
                </div>
            </Link>
        </div>
    );
}
