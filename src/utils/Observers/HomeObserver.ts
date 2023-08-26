import { observerItem } from '../Observer';

interface CardProp {
    (element: HTMLDivElement | null, styles: any): void;
}

interface AboutProp {
    (element: HTMLDivElement | null, elementTwo: HTMLDivElement | null, styles: any): void;
}

export const observerTitle: CardProp = (element, styles) => {
    if (!element) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.map((entry) => {
            if (!element) return;

            if (entry.isIntersecting) {
                element.className = `${styles.merchant_title} ${styles.effect}`;
            }
        });
    };

    observerItem(callback, 0.4, element);
};
export const observerCards: CardProp = (element, styles) => {
    if (!element) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.map((entry) => {
            if (!element) return;
            const width = window.innerWidth;
            if (width < 901) return;

            if (entry.isIntersecting) {
                const children = entry.target.children;
                for (let i = 0; i < children.length; i++) {
                    setTimeout(() => {
                        children[i].className = `${styles.card} ${styles.effect}`;

                        if (!element) return;
                        observer.unobserve(element);
                    }, i * 250);
                }
                return;
            }
        });
    };

    observerItem(callback, 0.4, element);
};

export const observerCard: CardProp = (element, styles) => {
    if (!element) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.map((entry) => {
            if (!element) return;
            const width = window.innerWidth;
            if (width > 900) return;

            if (entry.isIntersecting) {
                entry.target.className = `${styles.card} ${styles.effect}`;
                return observer.unobserve(element);
            }
        });
    };

    observerItem(callback, 0.5, element);
};

export const observerUpdateCard: CardProp = (element, styles) => {
    if (!element) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.map((entry) => {
            if (!element) return;

            if (entry.isIntersecting) {
                entry.target.className = `${styles.update} ${styles.effect}`;
                return observer.unobserve(element);
            }
        });
    };

    observerItem(callback, 0.4, element);
};

export const observerUpdate: CardProp = (element, styles) => {
    if (!element) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.map((entry) => {
            if (!element) return;

            if (entry.isIntersecting) {
                entry.target.className = `${styles.updates_title} ${styles.effect}`;
                return observer.unobserve(element);
            }
        });
    };

    observerItem(callback, 0.8, element);
};

export const observerAbout: AboutProp = (element, elementTwo, styles) => {
    if (!element) return;
    if (!elementTwo) return;

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.map((entry) => {
            if (!element) return;
            if (entry.isIntersecting) {
                element.className = `${styles.about_content} ${styles.appear}`;
                observer.unobserve(element);
            }
        });
    };

    const callbackTwo: IntersectionObserverCallback = (entries, observer) => {
        entries.map((entry) => {
            if (!elementTwo) return;

            if (entry.isIntersecting) {
                elementTwo.className = `${styles.about_title} ${styles.appear}`;
                observer.unobserve(elementTwo);
            }
        });
    };

    observerItem(callback, 0.4, element);
    observerItem(callbackTwo, 0.8, elementTwo);
};
