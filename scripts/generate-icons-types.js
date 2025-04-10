const fs = require('fs');
const path = require('path');

const iconsDir = path.resolve(__dirname, '../src/assets/icons');
const typesFilePath = path.join(iconsDir, 'types.ts');

const files = fs.readdirSync(iconsDir);
const svgIcons = files
  .filter(file => file.endsWith('.svg'))
  .map(file => `"${file.replace('.svg', '')}"`)
  .sort();

const typeContent = `export type Icons = ${svgIcons.join(' | ')};\n`;

fs.writeFileSync(typesFilePath, typeContent);
console.log('✅ types.ts atualizado com sucesso!');
