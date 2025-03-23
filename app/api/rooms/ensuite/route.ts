import { NextResponse } from 'next/server';
import { getRoomsByType } from '@/lib/db';
import { RoomType } from '@/types';

export async function GET() {
  try {
    const rooms = await getRoomsByType(RoomType.ENSUITE);
    
    if (!rooms || rooms.length === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'No ensuite rooms available' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: rooms
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch ensuite rooms' 
      },
      { status: 500 }
    );
  }
} 