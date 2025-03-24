# Accommodation Data Documentation

This directory contains data templates and documentation for the accommodation management system.

## Files Structure

- `accommodation-data-template.xlsx`: Main data template for buildings and rooms
- `csv/`: Directory containing CSV exports from the main template
  - `buildings.csv`: Buildings data
  - `features.csv`: Features reference data
  - `amenities.csv`: Amenities reference data
  - `room-status.csv`: Room status tracking
  - `images.csv`: Image inventory tracking

## How to Use

1. Use the Excel template to plan and organize your accommodation data
2. Export sheets to CSV when ready to import to database
3. Run the import script: `npm run import-data`

## Template Sheets

1. **Buildings**: Main building information and configuration
2. **Building Features**: Reference list of available building features
3. **Room Amenities**: Reference list of available room amenities
4. **Room Status**: Track room availability and booking status
5. **Image Inventory**: Track and manage accommodation images

## Data Import Process

1. Update data in the Excel template
2. Export needed sheets to CSV
3. Place CSV files in the `csv` directory
4. Run import script
5. Verify data in the database 