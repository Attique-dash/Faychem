const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './images';
const outputDir = './images/optimized';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && !fullPath.includes('optimized')) {
            processDirectory(fullPath);
        } else if (item.match(/\.(jpg|jpeg|png)$/i)) {
            const relativePath = path.relative(inputDir, fullPath);
            const outputPath = path.join(outputDir, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
            const outputDirPath = path.dirname(outputPath);

            if (!fs.existsSync(outputDirPath)) {
                fs.mkdirSync(outputDirPath, { recursive: true });
            }

            sharp(fullPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(info => {
                    const originalSize = (stat.size / 1024).toFixed(2);
                    const newSize = (info.size / 1024).toFixed(2);
                    const savings = ((1 - info.size / stat.size) * 100).toFixed(1);
                    console.log(`✅ ${item}: ${originalSize}KB → ${newSize}KB (${savings}% smaller)`);
                })
                .catch(err => console.error(`❌ ${item}:`, err.message));
        }
    });
}

console.log('🎨 Starting image optimization...\n');
processDirectory(inputDir);
console.log('\n✨ Optimization in progress... Check output above for results!');
