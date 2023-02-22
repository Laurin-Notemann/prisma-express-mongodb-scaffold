import { app } from "./server/app";
import { PORT } from "./secrets";
import { connectToDB, disconnectDB } from "./connection/connection";

const main = async () => {
  console.log("test123")
  console.log("sack")
  console.log("sack")
  console.log("test23243556")
  console.log("test23243556")
  console.log("test23243556")
  console.log("test23243556")
  console.log("sack2")
  app.listen(PORT, async () => {
    console.log("Server is listening on port: ", PORT);
    await connectToDB()

    const [error, msg] = await disconnectDB()

    if (error != null)
      return error

    console.log(msg)
  });
};


console.log(main())