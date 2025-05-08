"use client";

import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';
import styles from '../components/layout.module.css';
import Image from 'next/image';

const PrivateAccommodation = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Layout>
      <div className={styles.accommodationContainer} style={{ width: '100%', padding: '2rem' }}>
        <h1 className={styles.pageTitle}>Find Your Perfect Stay</h1>
        <p className={styles.pageSubtitle}>Browse our selection of comfortable accommodations</p>
        
        <div className={styles.accommodationGrid} style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px',
          margin: '2rem auto'
        }}>
          <div 
            className={styles.accommodationCard} 
            onClick={() => handleNavigation('/private-accommodation/ensuite-rooms')}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/private-room1.jpg"
                alt="Ensuite Rooms"
                className={styles.cardImage}
                width={400}
                height={300}
                style={{ objectFit: 'cover', width: '100%', height: '250px' }}
              />
            </div>
            <div className={styles.cardContent} style={{ padding: '1.5rem' }}>
              <h2 className={styles.cardTitle}>Ensuite Rooms</h2>
              <p className={styles.cardDescription}>Private rooms with attached bathroom facilities</p>
              <span className={styles.viewMore} style={{ 
                display: 'inline-block',
                marginTop: '1rem',
                color: '#0066cc',
                cursor: 'pointer'
              }}>View Options →</span>
            </div>
          </div>

          <div 
            className={styles.accommodationCard} 
            onClick={() => handleNavigation('/flats')}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/private-room2.jpg"
                alt="Flats"
                className={styles.cardImage} 
                width={400}
                height={300}
                style={{ objectFit: 'cover', width: '100%', height: '250px' }}
              />
            </div>
            <div className={styles.cardContent} style={{ padding: '1.5rem' }}>
              <h2 className={styles.cardTitle}>Flats</h2>
              <p className={styles.cardDescription}>Self-contained apartments with kitchen facilities</p>
              <span className={styles.viewMore} style={{ 
                display: 'inline-block',
                marginTop: '1rem',
                color: '#0066cc',
                cursor: 'pointer'
              }}>View Options →</span>
            </div>
          </div>

          <div 
            className={styles.accommodationCard} 
            onClick={() => handleNavigation('/group-rooms')}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/private-room3.jpg"
                alt="Group Rooms"
                className={styles.cardImage}
                width={400}
                height={300}
                style={{ objectFit: 'cover', width: '100%', height: '250px' }}
              />
            </div>
            <div className={styles.cardContent} style={{ padding: '1.5rem' }}>
              <h2 className={styles.cardTitle}>Group Rooms</h2>
              <p className={styles.cardDescription}>Spacious rooms perfect for group stays</p>
              <span className={styles.viewMore} style={{ 
                display: 'inline-block',
                marginTop: '1rem',
                color: '#0066cc',
                cursor: 'pointer'
              }}>View Options →</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivateAccommodation;
