import styles from '@/styles/bars/Footer.module.scss';

import Link from 'next/link';
import Container from '../layout/Container';
import LinkEffect from '../links/LinkEffect';

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer_container}>
                    <div className={styles.footer_links}>
                        <div className={styles.mention_links}>
                            <h3>Menções</h3>
                            <LinkEffect href="https://pexel.com" text="Pexel" target="_blank" />
                            {/* <LinkEffect href="#" text="Something" target="_blank" />
                            <LinkEffect href="#" text="Anything" target="_blank" /> */}
                        </div>
                        <div className={styles.social_links}>
                            <h3>Social</h3>
                            <div className={styles.links}>
                                <Link
                                    href="https://github.com/AndreSiboli"
                                    target="_blank"
                                    aria-label="GitHub"
                                >
                                    <FaGithubSquare />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/andr%C3%A9-siboli-81b969244/"
                                    target="_blank"
                                    aria-label="Linkedin"
                                >
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_site}>
                        <div className={styles.footer_logo}>
                            <div className={styles.logo}>
                                <h1>MINIVERSE</h1>
                            </div>
                        </div>
                        <div className={styles.footer_rights}>
                            <p>&copy; 2023 André Siboli. Todos os direitos reservados. </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
