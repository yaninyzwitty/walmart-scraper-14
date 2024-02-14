import { AstraDB } from "@datastax/astra-db-ts";

async function main() {

  const { ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_API_ENDPOINT, ASTRA_KEYSPACE } = process.env;

  // Initialize the client. The keyspace parameter is optional if you use
  // "default_keyspace".
   const db = new AstraDB(
      ASTRA_DB_APPLICATION_TOKEN,
      ASTRA_DB_API_ENDPOINT,
      ASTRA_KEYSPACE
  );


  return db;



}

main()
.catch(console.error);

const db = main();

export { db };