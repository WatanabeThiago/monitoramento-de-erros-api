/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
 These examples walk you through all the operations you can do on a collection
 See clientInitalization.js for quick instructions on starting the Typesense server.
*/
// Create a client

const Typesense = require('typesense');

console.log(`[TypeSense ⚡] Tentando criar.`);
const typesense = new Typesense.Client({
  nodes: [
    {
      host: 'localhost',
      port: '8108',
      protocol: 'http',
    },
  ],
  apiKey: 'ade38da678772cb713c3a44d564d86c1',
  numRetries: 3, // A total of 4 tries (1 original try + 3 retries)
  connectionTimeoutSeconds: 120, // Set a longer timeout for large imports
  logLevel: 'debug',
});

const products = {
  name: 'products',
  fields: [
    { name: 'id', type: 'string', facet: true },
    { name: 'title', type: 'string', facet: true },
    { name: 'apresentation', type: 'string', facet: false },
    { name: 'bar_code', type: 'string', facet: true },
    { name: 'category', type: 'string', facet: true },
    { name: 'sub_category', type: 'string', facet: true },
    { name: 'collection', type: 'string', facet: true },
    { name: 'composition', type: 'string', facet: false },
    { name: 'color', type: 'string', facet: true },
    { name: 'have_dye', type: 'bool', facet: false },
    { name: 'care', type: 'string', facet: false },
    { name: 'description', type: 'string', facet: false },
    { name: 'dimensions', type: 'string', facet: true },
    { name: 'relevance', type: 'int32', facet: true },
    { name: 'manufacturer', type: 'string', facet: true },
    { name: 'fragrance', type: 'string', facet: true },
    { name: 'warranty', type: 'string', facet: false },
    { name: 'age', type: 'string', facet: true },
    { name: 'indication', type: 'string', facet: false },
    { name: 'capacity', type: 'string', facet: false },
    { name: 'water_flow', type: 'string', facet: false },
    { name: 'tangible.*', type: 'auto' },
    { name: 'nutritional_information', type: 'string', facet: false },
    { name: 'line', type: 'string', facet: true },
    { name: 'brand', type: 'string', facet: true },
    { name: 'weights', type: 'string', facet: false },
    { name: 'pets', type: 'string[]', facet: true },
    { name: 'shipping', type: 'string[]', facet: true },
    { name: 'posology', type: 'string', facet: false },
    { name: 'product', type: 'string', facet: true },
    { name: 'breeds', type: 'string[]', facet: true },
    { name: 'taste', type: 'string', facet: true },
    { name: 'size', type: 'string', facet: false },
    { name: 'transgenic', type: 'bool', facet: true },
    { name: 'utilization', type: 'string', facet: false },
    { name: 'variant_id', type: 'string', facet: true },
    { name: 'voltage', type: 'string', facet: false },
    { name: 'contraindications', type: 'string', facet: false },
  ],
};

async function runExample() {
  try {
    // Delete if the collection already exists from a previous example run
    await typesense.collections('products').delete();
    console.log('deletou');
    // await typesense.collections('companies').delete();
  } catch (error) {
    console.log(`nao conseguiu deletar`);
  }

  try {
    // create a collection
    const result = await typesense.collections().create(products);
    // const companies2 = await typesense.collections().create(companies);
    console.log(result);
    // console.log(companies2);
  } catch (error) {
    throw new Error(error);
  }

  console.log(`[TypeSense ⚡] Collections executadas com sucesso.`);
}

runExample();
