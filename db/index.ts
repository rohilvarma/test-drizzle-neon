import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle, NeonHttpDatabase } from "drizzle-orm/neon-http";
import { config } from 'dotenv'


class DrizzleNeonConnector {
  private sql!: NeonQueryFunction<false, false>;
  private db!: NeonHttpDatabase;
  private isInit: boolean = false;
  
  private async init() {
    config({path: '.env.local'})
    try {
      this.sql = neon(process.env.DATABASE_URL!)
      this.db = drizzle({
        client: this.sql
      })
    }
    catch(err) {
      console.log("Error encoutered while estabilishing connection")
      console.error(err);
    }
  }
  
  get database() {
    if(!this.isInit) {
      this.init();
    }
    return this.db;
  }
}

const db = new DrizzleNeonConnector();
export default db