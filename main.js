import handelread from "./readfile.js";
import { handlSlicedata } from "./splices/index.js";

handelread()
  .then(data => {
     handlSlicedata( data)
  })
  .catch(err => {
    console.error('Error:', err);
  });
