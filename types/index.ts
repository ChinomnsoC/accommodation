export enum RoomType {
  ENSUITE = 'ENSUITE',
  FLAT = 'FLAT',
  GROUP = 'GROUP'
}

export enum RoomStatus {
  AVAILABLE = 'AVAILABLE',
  BOOKED = 'BOOKED',
  PENDING_BOOKING = 'PENDING_BOOKING'
}

export interface Building {
  id: number;
  name: string;
  description?: string;
  distanceToVenue: string;
  mainImage: string;
  additionalImages: string[];
  features: string[];
  roomsAvailable: number;
  rooms: Room[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Room {
  id: number;
  roomNumber: string;
  type: RoomType;
  status: RoomStatus;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
  description?: string;
  buildingId: number;
  building: Building;
  bookings: Booking[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: number;
  startDate: Date;
  endDate: Date;
  totalAmount: number;
  status: string;
  userId: string;
  roomId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: Booking[];
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface RoomResponse {
  success: boolean;
  data?: Room | Room[];
  error?: string;
}

export interface BuildingResponse {
  success: boolean;
  data?: Building | Building[];
  error?: string;
} 