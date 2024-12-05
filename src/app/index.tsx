import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './styles/JoinSection.module.css';

export default function Index() {
  const allIconsData = [
    { id: 1, top: '15%', left: '5%' },
    { id: 2, top: '40%', left: '20%' },
    { id: 3, top: '60%', left: '10%' },
    { id: 4, top: '30%', left: '30%' },
    { id: 5, top: '50%', left: '50%' },
    { id: 6, top: '75%', left: '25%' },
    { id: 7, top: '20%', left: '50%' },
    { id: 8, top: '65%', left: '70%' },
    { id: 9, top: '55%', left: '80%' },
    { id: 10, top: '25%', left: '70%' },
    { id: 11, top: '35%', left: '85%' },
    { id: 12, top: '10%', left: '85%' },
    { id: 13, top: '80%', left: '60%' },
    { id: 14, top: '90%', left: '40%' },
    { id: 15, top: '50%', left: '20%' }
  ];

  const [iconsData, setIconsData] = useState(allIconsData);

  // Update icons for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIconsData(allIconsData.slice(0,0)); // Show only the first 6 icons on mobile
      } else {
        setIconsData(allIconsData); // Show all icons on larger screens
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // GSAP animation for icons
  useEffect(() => {
    gsap.fromTo(
      '.icon',
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        repeat: 0,
        yoyo: true,
        duration: 2,
        stagger: 0.3,
        ease: 'power1.inOut',
      }
    );
  }, [iconsData]); // Reapply animation if icons change

  return (
    <div className={styles.page}>
      <section className={styles.joinSection}>
        <div className={styles.mapContainer}>
          <h1 className={styles.title}>Join millions of others</h1>
          <p className={styles.description}>
            Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on NetHunt. Sign up to discover why millions of people have published their passions here.
          </p>
          <button className={styles.joinButton}>Create Your Blog</button>

          {/* Icons */}
          {iconsData.map((icon) => (
            <img
              key={icon.id}
              src="/icons/icon1.png"
              alt={`Person ${icon.id}`}
              className={`${styles.icon} icon`}
              style={{ top: icon.top, left: icon.left }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
