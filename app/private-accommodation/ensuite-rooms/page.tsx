"use client";

import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from './ensuite-rooms.module.css';
import { Room, RoomResponse } from '@/types';

const EnsuiteRoomsPage = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnsuiteRooms = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/rooms/ensuite');
        const data: RoomResponse = await response.json();
        
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch rooms');
        }

        setRooms(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load rooms');
      } finally {
        setLoading(false);
      }
    };

    fetchEnsuiteRooms();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'NGN'
    }).format(price);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Ensuite Rooms</h1>
        <p className={styles.pageDescription}>
          Discover our collection of comfortable ensuite rooms, each featuring private bathroom facilities
          and modern amenities for a pleasant stay.
        </p>

        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading rooms...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorContainer}>
            <p className={styles.errorMessage}>{error}</p>
            <button onClick={() => window.location.reload()} className={styles.retryButton}>
              Try Again
            </button>
          </div>
        )}

        <div className={styles.roomsGrid}>
          {rooms.map((room) => (
            <div key={room.id} className={styles.roomCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={room.images[0]}
                  alt={`Room ${room.roomNumber}`}
                  width={400}
                  height={300}
                  className={styles.roomImage}
                />
                <div className={styles.availability}>
                  {room.status}
                </div>
              </div>
              
              <div className={styles.roomContent}>
                <h2 className={styles.roomTitle}>
                  {room.building.name} - Room {room.roomNumber}
                </h2>
                <p className={styles.roomDescription}>{room.description}</p>
                
                <div className={styles.roomDetails}>
                  <div className={styles.roomSize}>
                    <span className={styles.detailLabel}>Capacity:</span> {room.capacity} {room.capacity > 1 ? 'people' : 'person'}
                  </div>
                  <div className={styles.roomPrice}>
                    <span className={styles.price}>{formatPrice(room.price)}</span>
                    <span className={styles.perMonth}>/month</span>
                  </div>
                </div>

                <div className={styles.buildingInfo}>
                  <p className={styles.distanceInfo}>
                    <span className={styles.detailLabel}>Distance to Venue:</span> {room.building.distanceToVenue}
                  </p>
                </div>

                <div className={styles.amenitiesList}>
                  {room.amenities.map((amenity, index) => (
                    <span key={index} className={styles.amenityTag}>
                      {amenity}
                    </span>
                  ))}
                </div>

                <button 
                  className={styles.viewDetailsButton}
                  onClick={() => window.location.href = `/private-accommodation/ensuite-rooms/${room.id}`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {!loading && !error && rooms.length === 0 && (
          <div className={styles.noRooms}>
            <p>No ensuite rooms are currently available.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EnsuiteRoomsPage; 