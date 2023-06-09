import { useEffect, useState } from 'react';

export const useMediaQuery = (screen) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = `(max-width: ${screen})`;
        const media = window.matchMedia(query);
        console.log(window);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, screen]);

    return matches;
};