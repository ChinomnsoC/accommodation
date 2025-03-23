import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.booking.deleteMany({});
  await prisma.building.deleteMany({});

  // Create buildings with their room configurations
  const silverSpring = await prisma.building.create({
    data: {
      name: "Silver Spring",
      description: "Modern accommodation complex with excellent facilities",
      distanceToVenue: "2 minutes walk to conference center",
      mainImage: "/private-room1.jpg",
      additionalImages: [
        "/private-room1.jpg",
        "/private-room2.jpg"
      ],
      features: [
        "24/7 Security",
        "Backup Power",
        "Water Treatment Plant",
        "High-speed WiFi",
        "CCTV Surveillance"
      ],
      // Room configuration
      totalRooms: 20,
      availableRooms: 20, // Initially all rooms are available
      roomType: "ENSUITE",
      pricePerRoom: 25000, // ₦250,000
      roomCapacity: 2,
      roomAmenities: [
        "Private Bathroom",
        "Air Conditioning",
        "Study Desk",
        "Single Bed",
        "Wardrobe",
        "Reading Lamp",
        "Bedside Table"
      ]
    },
  });

  const palmCourt = await prisma.building.create({
    data: {
      name: "Palm Court",
      description: "Premium residential facility with modern amenities",
      distanceToVenue: "5 minutes walk to conference center",
      mainImage: "/buildings/palm-court-main.jpg",
      additionalImages: [
        "/buildings/palm-court-1.jpg",
        "/buildings/palm-court-2.jpg"
      ],
      features: [
        "24/7 Security",
        "Backup Power",
        "Central Air Conditioning",
        "Elevator",
        "Common Room",
        "Study Area"
      ],
      // Room configuration
      totalRooms: 15,
      availableRooms: 15, // Initially all rooms are available
      roomType: "ENSUITE",
      pricePerRoom: 30000, // ₦300,000
      roomCapacity: 2,
      roomAmenities: [
        "Private Bathroom",
        "Air Conditioning",
        "Two Study Desks",
        "Two Single Beds",
        "Large Wardrobe",
        "Mini Fridge",
        "Reading Lamps",
        "Bedside Tables"
      ]
    },
  });

  console.log({
    buildings: [silverSpring, palmCourt]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 