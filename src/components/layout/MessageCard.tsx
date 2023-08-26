import styles from '@/styles/layout/MessageCard.module.scss';
import { formatTime } from '@/utils/Format';

import Link from 'next/link';
import Img from '@/components/utils/Img';

interface PropTypes {
    data: {
        img: string;
        text: string;
        link: string;
    };

    game: {
        timer: number;
        score: number;
        tries: number;
    };

    handleAgain: Function;
}

export default function MessageCard(props: PropTypes) {
    const { data, game, handleAgain } = props;
    const { img, text, link } = data;

    return (
        <div className={styles.message}>
            <div className={styles.over}>
                <div className={styles.message_container}>
                    <div className={styles.message_image}>
                        <Img src={img} style={{ objectFit: 'cover', borderRadius: '50%' }} />
                    </div>
                    <div className={styles.message_content}>
                        <p>{text}</p>
                    </div>
                    <div className={styles.message_infos}>
                        <div className={styles.infos}>
                            <div className={styles.infos_time}>
                                <h2>Time</h2>
                                <span>{formatTime(game.timer)}</span>
                            </div>
                            <div className={styles.infos_score}>
                                <h2>Score</h2>
                                <span>{game.score}</span>
                            </div>
                            <div className={styles.infos_wrongs}>
                                <h2>Wrongs</h2>
                                <span>{game.tries}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.message_buttons}>
                        <div className={styles.tryagain}>
                            <button onClick={() => handleAgain()}>Novamente?</button>
                        </div>
                        <div className={styles.link}>
                            <Link href={link}>Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
