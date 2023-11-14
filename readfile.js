import fs from 'fs/promises';



const handelread = async (file) => {
  try {
    
    const data = await fs.readFile(file, 'utf8');
    return data;
  } catch (err) {
    console.error('Error reading the file:', err);
    throw err;
  }
};

export default handelread;
