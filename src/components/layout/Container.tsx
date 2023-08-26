import { ReactElement, ReactNode } from 'react';
import styles from '@/styles/layout/Container.module.scss';

export default function Container({ children }: { children: ReactElement }) {
    return <div className={styles.container}>{children}</div>;
}
