import { CSSProperties, useEffect, useRef, useState } from 'react';
import styles from '@/styles/bars/MemoryBar.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import Container from '../layout/Container';

import { FaAngleLeft, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import logo from '@/assets/games/hello-kitty/logo.png';

export default function Memory() {
    const [isMute, setIsMute] = useState(false);
    const player = useRef<HTMLAudioElement | null>(null);

    const imageStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    useEffect(() => {
        async function play() {
            if (!player.current) return;
            await player.current.play();
            player.current.volume = 0.4;
            window.removeEventListener('click', play);
        }

        window.addEventListener('click', play);

        return () => window.removeEventListener('click', play);
    }, []);

    function defineMute() {
        setIsMute((prevState) => !prevState);
    }

    function playState() {
        defineMute();
        if (!isMute) return player.current?.pause();
        player.current?.play();
    }

    return (
        <header className={styles.header}>
            <audio src="../music/BABYMETAL.mp3" autoPlay muted={isMute} loop ref={player}></audio>
            <Container>
                <div className={styles.header_container}>
                    <div className={styles.header_link}>
                        <Link href="/">
                            <FaAngleLeft /> Voltar
                        </Link>
                    </div>
                    <div className={styles.header_logo}>
                        <div className={styles.logo_image}>
                            <Image
                                src={logo}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={imageStyle}
                            />
                        </div>
                    </div>
                    <div className={styles.header_volume}>
                        <div className={styles.volume_button}>
                            <button onClick={playState}>
                                {!isMute ? <FaVolumeUp /> : <FaVolumeMute />}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
