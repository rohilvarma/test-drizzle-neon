import { migrate } from "drizzle-orm/neon-http/migrator";
import drizzleConnector from ".";

const main = async() => {
  const db = drizzleConnector.database;
  try {
    await migrate(db, {
      migrationsFolder: "./db/migrations"
    })
    console.log("Migration Successful!")
  }
  catch(err) {
    console.log(err);
    process.exit(1);
  }
}

main();