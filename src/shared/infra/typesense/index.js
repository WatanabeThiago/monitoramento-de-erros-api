/* eslint-disable @typescript-eslint/no-var-requires */
const Typesense = require('typesense');

console.log(`[TypeSense ⚡] Tentando conectar.`);
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
  // logLevel: 'debug',
});
console.log(`[TypeSense ⚡] Conectado com sucesso.`);
export default typesense;
