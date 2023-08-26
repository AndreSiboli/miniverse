import Link from 'next/link';
import styles from '@/styles/links/LinkEffect.module.scss';

interface PropTypes {
    href: string;
    text: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
}

export default function LinkEffect(props: PropTypes) {
    const { href, text, target = '_self' } = props;

    return (
        <Link href={href} target={target} className={styles.link}>
            {text}
        </Link>
    );
}
