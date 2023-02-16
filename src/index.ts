import { app } from "./server/app";
import { PORT } from "./secrets";
import { connectToDatabase } from "./connection/connection";

const main = () => {
  app.listen(PORT, async () => {
    const [error, msg] = await connectToDatabase()
    if (error != null)
      console.log("Could not connect to Database", error)
    
    console.log("Server is listening on port: ", PORT);

    console.log(msg)

  });
};

main();
