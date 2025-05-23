// import { ObjectEnumValue } from '@prisma/client/runtime/library';
import prisma from '../prisma/prisma';
import { RoomType } from '@prisma/client';

// type RoomType = 'ENSUITE' | 'FLAT' | 'GROUP';
// Fetch zero or more Buildings


// const RoomType: {
//   ENSUITE: "ENSUITE";
//   FLAT: "FLAT";
//   GROUP: "GROUP";
// }
// export async function getRoomsByType(RoomType: ObjectEnumValue) {
// export async function getRoomsByType(RoomType: RoomType.ENSUITE | RoomType.FLAT | RoomType.GROUP ) {
export async function getRoomsByType(type: RoomType) {
  try {
    const rooms = await prisma.room.findMany({
      where: {
        type,
        status: 'AVAILABLE',
      },
      include: {
        building: {
          select: {
            name: true,
            distanceToVenue: true,
            features: true,
          },
        },
      },
      orderBy: {
        price: 'asc',
      },
    });
    return rooms;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch rooms');
  }
}

export async function getRoomById(id: number) {
  try {
    const room = await prisma.room.findUnique({
      where: { id },
      include: {
        building: true,
      },
    });
    return room;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch room');
  }
}

export async function getBuildingWithRooms(buildingId: number) {
  try {
    const building = await prisma.building.findUnique({
      where: { id: buildingId },
      include: {
        rooms: {
          where: {
            status: 'AVAILABLE',
          },
        },
      },
    });
    return building;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch building');
  }
} 