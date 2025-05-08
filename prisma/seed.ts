import { PrismaClient, RoomType } from '@prisma/client';

const prisma = new PrismaClient();

// This data structure mirrors your spreadsheet
const buildingsData = [
  {
    name: "Silver Spring",
    description: "Modern accommodation with lake view",
    distanceToVenue: "2 minutes walk",
    mainImage: "/private-room1.jpg",
    features: [
      "24/7 Security",
      "Backup Power",
      "WiFi",
      "CCTV",
      "Water Treatment"
    ],
    totalRooms: 20,
    availableRooms: 20,
    roomType: RoomType.ENSUITE,
    pricePerRoom: 25000,
    roomCapacity: 2,
    roomAmenities: ["Private Bathroom", "Air Conditioning", "Study Desk", "Single Bed", "Wardrobe"]
  },
  {
    name: "Palm Court",
    description: "Premium facility with modern amenities",
    distanceToVenue: "5 minutes walk",
    mainImage: "/private-room1.jpg",
    features: [
      "24/7 Security",
      "Backup Power",
      "Central Air Conditioning",
      "Elevator",
      "Common Room"
    ],
    totalRooms: 15,
    availableRooms: 15,
    roomType: RoomType.ENSUITE,
    pricePerRoom: 30000,
    roomCapacity: 2,
    roomAmenities: ["Private Bathroom", "Air Conditioning", "Study Desk", "Single Bed", "Wardrobe"]
  }
];

async function main() {
  try {
    // Clear existing data
    console.log('Clearing existing data...');
    await prisma.booking.deleteMany({});
    await prisma.building.deleteMany({});

    // Create buildings from the data
    console.log('Creating buildings...');
    for (const buildingData of buildingsData) {
      const building = await prisma.building.create({
        data: buildingData
      });
      console.log(`Created building: ${building.name}`);
    }

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 