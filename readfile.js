import fs from 'fs/promises';
const filePath = './data/AAC-LT-150_113712.txt';
const handelread = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    console.error('Error reading the file:', err);
    throw err;
  }
};

export default handelread;
