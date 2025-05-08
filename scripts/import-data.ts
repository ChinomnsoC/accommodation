import { createReadStream } from 'fs';
import { parse } from 'csv-parse';
import { PrismaClient } from '@prisma/client';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

async function parseCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    createReadStream(filePath)
      .pipe(parse({ columns: true, skip_empty_lines: true }))
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

async function importData() {
  try {
    const dataDir = join(process.cwd(), 'docs', 'data', 'csv');
    
    // Read all CSV files
    console.log('Reading CSV files...');
    const buildingsData = await parseCSV(join(dataDir, 'buildings.csv'));
    const featuresData = await parseCSV(join(dataDir, 'features.csv'));
    const amenitiesData = await parseCSV(join(dataDir, 'amenities.csv'));
    const roomStatusData = await parseCSV(join(dataDir, 'room-status.csv'));
    
    // Clear existing data
    console.log('Clearing existing data...');
    await prisma.booking.deleteMany({});
    await prisma.building.deleteMany({});

    // Import buildings
    console.log('Importing buildings...');
    for (const row of buildingsData) {
      const buildingData = {
        name: row['Building Name'],
        description: row.Description,
        distanceToVenue: row['Distance to Venue'],
        mainImage: row['Main Image Path'],
        features: row.Features.split(',').map((f: string) => f.trim()),
        totalRooms: parseInt(row['Total Rooms']),
        availableRooms: parseInt(row['Total Rooms']), // Initially all rooms available
        roomType: row['Room Type'],
        pricePerRoom: parseFloat(row['Price per Room']),
        roomCapacity: parseInt(row['Room Capacity']),
        roomAmenities: row['Room Amenities'].split(',').map((a: string) => a.trim())
      };

      const building = await prisma.building.create({
        data: buildingData
      });
      console.log(`Created building: ${building.name}`);
    }

    console.log('Data import completed successfully');
  } catch (error) {
    console.error('Error importing data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
importData(); 