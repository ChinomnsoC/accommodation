import { NextResponse } from 'next/server';
import { getRoomById } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid room ID' 
        },
        { status: 400 }
      );
    }

    const room = await getRoomById(id);
    
    if (!room) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Room not found' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: room
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch room' 
      },
      { status: 500 }
    );
  }
} 