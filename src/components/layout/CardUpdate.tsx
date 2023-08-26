import styles from '@/styles/layout/CardUpdate.module.scss';
import Link from 'next/link';
import Img from '../utils/Img';

import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { observerUpdateCard } from '@/utils/Observers/HomeObserver';

interface PropTypes {
    img: string;
    title: string;
    text: string;
    link: string;
}

export default function CardUpdate(props: PropTypes) {
    const { img, title, text, link } = props;

    const cardEl = useRef(null);

    useEffect(() => {
        observerUpdateCard(cardEl.current, styles);
    }, []);

    return (
        <div className={styles.update} ref={cardEl}>
            <div className={styles.update_image}>
                <Img src={img} style={{ objectFit: 'cover', borderRadius: '0.5em' }} />
            </div>
            <div className={styles.update_infos}>
                <div className={styles.update_title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.update_text}>
                    <p>{text}</p>
                </div>
                <div className={styles.update_link}>
                    <Link href={link}>
                        Ler mais <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}
