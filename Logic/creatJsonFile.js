const creatJsonFile=(path , namefile)=>{
    const filePath = path


fs.writeFile(filePath,namefile, (err) => {
  if (err) {
    console.error('Error writing JSON file:', err);
  } else {
    console.log(`JSON file "${filePath}" created successfully.`);
  }
});

}