import styles from '@/styles/CardsSection/Card.module.scss';

import Img from '../utils/Img';

import back from '@/assets/games/hello-kitty/cards/back.jpg';

interface PropTypes {
    data: {
        id: number;
        image: string;
        flip: boolean;
        found: boolean;
    };
    setting: boolean;
    handleCard: Function;
}

export default function Card(props: PropTypes) {
    const { handleCard, setting } = props;
    const { id, image, flip, found } = props.data;

    return (
        <main
            className={`${styles.card} ${flip && styles.flip} ${found && styles.found}`}
            onClick={
                !setting
                    ? () => {
                          handleCard(id);
                      }
                    : () => {}
            }
        >
            <div className={styles.card_front}>
                <Img src={image} style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.card_back}>
                <Img src={back.src} style={{ objectFit: 'cover' }} />
            </div>
        </main>
    );
}
