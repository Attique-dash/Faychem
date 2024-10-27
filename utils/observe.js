import { useEffect, useState } from 'react';

const useActiveLink = (sections) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveLink(section);
            return;
          }
        }
      }

      setActiveLink('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set the initial active link

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return activeLink;
};

export default useActiveLink;
