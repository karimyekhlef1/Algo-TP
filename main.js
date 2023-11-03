import handelread from "./readfile.js";
import { handlSlicedata } from "./splices/index.js";
import { calculateDistance } from "./Logic/calculateDistance.js";
import findSiteWithGreatestAmount from "./Logic/findSiteWithGreatestAmount.js";
import findSiteClosest from "./Logic/findSiteClosest.js";
import CheckBackToCenter from "./Logic/CheckBackToCenter.js";
import startVehicles from "./startVehicles.js";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());

handelread()
  .then((data) => {
    const sitesVisited = [];
    const vehicles = handlSlicedata(data).vehicles;
    const central = handlSlicedata(data).central[0];
    const sites = handlSlicedata(data).sites;

    const start = startVehicles(central, vehicles, sites, sitesVisited);

    app.get("/", (req, res) => {
      const vehiclessites = vehicles.reduce((acc, compound) => {
        if (!acc.some((item) => item.site === compound.site)) {
          acc.push(compound);
        }
        return acc;
      }, []);

      const Allsites = sites.concat(central).concat(vehiclessites);
      res.send({ data: Allsites });
    });

    app.get("/start", (req, res) => {
      const pathByVehicle = start.pathByVehicle;
      const test = pathByVehicle.map((item) =>
        item.path.map((singelpath) => ({
          ...singelpath,
          vehicleId: item.vehicle.id,
        }))
      );
      const flattenedArray = [].concat(...test);
    
      res.status(200).send({ data: flattenedArray });
    });
  })

  .catch((err) => {
    console.error("Error:", err);
  });

async function startServer() {
  try {
    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
}

startServer();
