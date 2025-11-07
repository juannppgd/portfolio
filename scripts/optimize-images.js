import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const INPUT_DIR = './src/assets';
const OUTPUT_DIR = './public/assets/optimized';

async function optimizeImages() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Read all files from input directory
    const files = await fs.readdir(INPUT_DIR);
    
    for (const file of files) {
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())) {
        continue;
      }

      const inputPath = path.join(INPUT_DIR, file);
      const outputPath = path.join(OUTPUT_DIR, `${path.parse(file).name}.webp`);

      // Optimize and convert to WebP
      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .toFile(outputPath);

      // Create responsive versions
      const sizes = [640, 768, 1024, 1366];
      for (const width of sizes) {
        const responsiveOutputPath = path.join(
          OUTPUT_DIR,
          `${path.parse(file).name}-${width}.webp`
        );
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
          .toFile(responsiveOutputPath);
      }

      console.log(`Optimized: ${file}`);
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();