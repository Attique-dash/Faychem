import { useEffect, useState, useRef, useCallback } from 'react';

const useActiveLink = (sections) => {
  const [activeLink, setActiveLink] = useState('');
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveLink(section);
            ticking.current = false;
            return;
          }
        }
      }

      setActiveLink('');
      ticking.current = false;
    });
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeLink;
};

export default useActiveLink;
