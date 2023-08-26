
interface ObserverTypes {
    (callback: IntersectionObserverCallback, threshold: number, el: Element): void;
}

export const observerItem: ObserverTypes = (callback, threshold, el) => {
    const options: IntersectionObserverInit = {
        // root: ''
        rootMargin: '0px',
        threshold: 0.1,
    };

    const observer1 = new IntersectionObserver(callback, options);
    observer1.observe(el);
};
