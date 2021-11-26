import path from 'path';
import fs from 'fs';
import AppError from '@shared/errors/AppError';

function getUFName(uf: string) {
  if (uf == 'AC') return 'Acre';
  else if (uf == 'AL') return 'Alagoas';
  else if (uf == 'AP') return 'Amapá';
  else if (uf == 'AM') return 'Amazonas';
  else if (uf == 'BA') return 'Bahia';
  else if (uf == 'CE') return 'Ceará';
  else if (uf == 'ES') return 'Espírito Santo';
  else if (uf == 'GO') return 'Goiás';
  else if (uf == 'MA') return 'Maranhão';
  else if (uf == 'MT') return 'Mato Grosso';
  else if (uf == 'MS') return 'Mato Grosso do Sul';
  else if (uf == 'MG') return 'Minas Gerais';
  else if (uf == 'PA') return 'Pará';
  else if (uf == 'PB') return 'Paraíba';
  else if (uf == 'PR') return 'Paraná';
  else if (uf == 'PE') return 'Pernambuco';
  else if (uf == 'PI') return 'Piauí';
  else if (uf == 'RJ') return 'Rio de Janeiro';
  else if (uf == 'RN') return 'Rio Grande do Norte';
  else if (uf == 'RS') return 'Rio Grande do Sul';
  else if (uf == 'RO') return 'Rondônia';
  else if (uf == 'RR') return 'Roraima';
  else if (uf == 'SC') return 'Santa Catarina';
  else if (uf == 'SP') return 'São Paulo';
  else if (uf == 'SE') return 'Sergipe';
  else if (uf == 'Tocantins') return 'TO';
  else {
    throw new AppError(`UF invalida.`);
  }
}

interface IList {
  city: string;
  city_ascii: string;
  lat: number;
  lng: number;
  pop: number;
  country: string;
  iso2: string;
  iso3: string;
  province: string;
  timezone: string;
}
export default async function (uf: string, city?: string): Promise<IList> {
  const lista = path.resolve(__dirname, '..', 'utils', 'timeZonesList.json');

  const listaa = await fs.readFileSync(lista);

  const new_uf = getUFName(uf);

  const list_json: IList[] = JSON.parse(listaa.toString());
  let new_res: IList | undefined;
  if (new_uf == 'Amazonas') {
    new_res = list_json.find(
      item => item.city === city && item.province === 'Amazonas',
    );
  } else {
    new_res = list_json.find(item => new_uf === item.province);
  }
  if (!new_res) {
    throw new AppError(
      `O fuso horario da cidade "${city}" não foi encontrado.`,
    );
  }

  return new_res;
}
