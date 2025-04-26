import fs from 'fs';
import path from 'path';

const LISTINGS_DIR = path.join(process.cwd(), 'src/pages/listings');

const TEMPLATE = `import { PropertyLayout } from '../../../components/PropertyLayout';
import { PropertyInfo } from '../../../types/property';

const propertyInfo: PropertyInfo = {
  title: "",
  description: "",
  guests: 0,
  bedrooms: 0,
  beds: 0,
  bathrooms: 0,
  priceRange: "",
  winterPriceRange: "",
  holidayPriceRange: "",
  minimumStay: "",
  airbnbLink: "",
  photos: [],
  spaceDetails: {
    description: "",
    highlights: []
  },
  bedroomLayout: {
    description: "",
    rooms: []
  },
  location: {
    description: ""
  }
};

export default function Property() {
  return <PropertyLayout property={propertyInfo} />;
}
`;

async function updatePropertyListings() {
  try {
    // Read all directories in the listings folder
    const directories = fs.readdirSync(LISTINGS_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    console.log('Found property directories:', directories);

    // Process each directory
    for (const dir of directories) {
      const indexPath = path.join(LISTINGS_DIR, dir, 'index.tsx');
      
      // Check if index.tsx exists
      if (!fs.existsSync(indexPath)) {
        console.log(`No index.tsx found in ${dir}, skipping...`);
        continue;
      }

      // Read the current file
      const currentContent = fs.readFileSync(indexPath, 'utf8');

      // Create backup
      const backupPath = path.join(LISTINGS_DIR, dir, 'index.tsx.bak');
      fs.writeFileSync(backupPath, currentContent);
      console.log(`Created backup for ${dir}`);

      // Write new template
      fs.writeFileSync(indexPath, TEMPLATE);
      console.log(`Updated ${dir} with new template`);
    }

    console.log('Property listing update complete!');
    console.log('Please review each file and fill in the propertyInfo object with the correct data.');
  } catch (error) {
    console.error('Error updating property listings:', error);
  }
}

// Run the update
updatePropertyListings(); 