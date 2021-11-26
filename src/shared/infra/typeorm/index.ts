import { createConnection } from 'typeorm';
import jobs from '../../jobs';

console.log('[BANCO DE DADOS 🎲] Tentando conectar.');

async function getConnection() {
  createConnection()
    .then(() => {
      console.log('[BANCO DE DADOS 🎲] Conectado com sucesso!');
      jobs();
    })
    .catch(err => console.log(err));
}

getConnection();
