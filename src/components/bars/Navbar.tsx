import styles from '@/styles/bars/Navbar.module.scss';
import Link from 'next/link';
import Container from '../layout/Container';
import LinkEffect from '../links/LinkEffect';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header_container}>
                    <div className={styles.header_logo}>
                        <h1>MINIVERSE</h1>
                    </div>
                    <div className={styles.header_links}>
                        <nav className={styles.links_container}>
                            {/* <div className={styles.link}>
                                <LinkEffect href="#home" text="Home" />
                            </div> */}
                            <div className={styles.link}>
                                <LinkEffect href="#games" text="Games" />
                            </div>
                            <div className={styles.link}>
                                <LinkEffect href="#updates" text="Updates" />
                            </div>
                            <div className={styles.link}>
                                <LinkEffect href="#about" text="About" />
                            </div>
                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    );
}
