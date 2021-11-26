import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

import Banks from '@modules/banks/infra/typeorm/entities/Banks';

export default class CreateInitialBankCodes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Banks)
      .values([
        { name: '	Banco Do Brasil S.A (Bb)', code: '001', ipsb_code: '0' },
        { name: 'Bradesco S.A', code: '237', ipsb_code: '60746948' },
        { name: 'Banco Digio S.A', code: '335', ipsb_code: '27098060' },
        {
          name: 'Nu Pagamentos S.A (Nubank)',
          code: '260',
          ipsb_code: '18236120',
        },
        { name: 'Pagseguro Internet S.A', code: '290', ipsb_code: '8561701' },
        {
          name: 'Mercado Pago – Conta Do Mercado Livre',
          code: '323',
          ipsb_code: '10573521',
        },
        {
          name: 'Next Bank',
          code: '237',
          ipsb_code: '60746948',
        },
        {
          name: 'Banco Sofisa S.A',
          code: '637',
          ipsb_code: '60889128',
        },
        {
          name: 'Banco Inter S.A',
          code: '077',
          ipsb_code: '416968',
        },
        {
          name: 'Itaú Unibanco S.A',
          code: '341',
          ipsb_code: '60701190',
        },
        {
          name: 'Caixa Econômica Federal',
          code: '104',
          ipsb_code: '360305',
        },
        {
          name: 'Banco Santander Brasil S.A',
          code: '033',
          ipsb_code: '90400888',
        },
        {
          name: 'Banco Original S.A	',
          code: '212',
          ipsb_code: '92894922',
        },
        {
          name: 'Bancoob',
          code: '756',
          ipsb_code: '2038232',
        },
        {
          name: 'Banco Votorantim S.A',
          code: '655',
          ipsb_code: '59588111',
        },
        {
          name: 'Neon Pagamentos S.A',
          code: '655',
          ipsb_code: '59588111',
        },
        {
          name: 'Banrisul',
          code: '041',
          ipsb_code: '92702067',
        },
        {
          name: 'Banco Mercantil Do Brasil S.A',
          code: '389',
          ipsb_code: '17184037',
        },
        {
          name: 'Banco Safra S.A',
          code: '422',
          ipsb_code: '58160789',
        },
        {
          name: 'Banco De Brasília',
          code: '070',
          ipsb_code: '208',
        },
        {
          name: 'Unicred Cooperativa',
          code: '136',
          ipsb_code: '315557',
        },
        {
          name: 'Banco Ribeirão Preto',
          code: '741',
          ipsb_code: '517645',
        },
        {
          name: 'Banco Cetelem S.A',
          code: '739',
          ipsb_code: '558456',
        },
        {
          name: 'Banco Semear S.A',
          code: '743',
          ipsb_code: '795423',
        },
        {
          name: 'Planner Corretora De Valores S.A',
          code: '100',
          ipsb_code: '806535',
        },
        {
          name: 'Banco B3 S.A',
          code: '096',
          ipsb_code: '997185',
        },
        {
          name: 'Banco Rabobank Internacional Do Brasil S.A',
          code: '747',
          ipsb_code: '1023570',
        },
        {
          name: 'Sicredi S.A',
          code: '748',
          ipsb_code: '1181521',
        },
        {
          name: 'Bnp Paribas Brasil S.A',
          code: '752',
          ipsb_code: '1522368',
        },
        {
          name: 'Unicred Central Rs',
          code: '091',
          ipsb_code: '1634601',
        },
        {
          name: 'Kirton Bank',
          code: '399',
          ipsb_code: '1701201',
        },
        {
          name: 'Portocred S.A',
          code: '108',
          ipsb_code: '1800019',
        },
        {
          name: 'Banco Keb Hana Do Brasil S.A',
          code: '757',
          ipsb_code: '2318507',
        },
        {
          name: 'Xp Investimentos S.A',
          code: '102',
          ipsb_code: '2332886',
        },
        {
          name: 'Banco Xp S/A',
          code: '348',
          ipsb_code: '33264668',
        },
        {
          name: 'Super Pagamentos S/A',
          code: '340',
          ipsb_code: '9554480',
        },
        {
          name: 'Uniprime Norte Do Paraná',
          code: '084',
          ipsb_code: '2398976',
        },
        {
          name: 'Cm Capital Markets Cctvm Ltda',
          code: '180',
          ipsb_code: '2685483',
        },
        {
          name: 'Banco Morgan Stanley S.A',
          code: '066',
          ipsb_code: '2801938',
        },
        {
          name: 'Ubs Brasil Cctvm S.A',
          code: '015',
          ipsb_code: '2819125',
        },
        {
          name: 'Treviso Cc S.A',
          code: '143',
          ipsb_code: '2992317',
        },
        {
          name: 'Hipercard Bm S.A',
          code: '062',
          ipsb_code: '3012230',
        },
        {
          name: 'Bco. J.Safra S.A',
          code: '074',
          ipsb_code: '3017677',
        },
        {
          name: 'Uniprime Central Ccc Ltda',
          code: '099',
          ipsb_code: '3046391',
        },
        {
          name: 'Banco Alfa S.A.',
          code: '025',
          ipsb_code: '3323840',
        },
        {
          name: 'Bco Abn Amro S.A',
          code: '075',
          ipsb_code: '3532415',
        },
        {
          name: 'Banco Cargill S.A',
          code: '040',
          ipsb_code: '3609817',
        },
        {
          name: 'Servicoop',
          code: '190',
          ipsb_code: '3973814',
        },
        {
          name: 'Banco Bradescard',
          code: '063',
          ipsb_code: '4184779',
        },
        {
          name: 'Nova Futura Ctvm Ltda',
          code: '191',
          ipsb_code: '4257795',
        },
        {
          name: 'Goldman Sachs Do Brasil Bm S.A',
          code: '064',
          ipsb_code: '4332281',
        },
        {
          name: 'Ccc Noroeste Brasileiro Ltda',
          code: '097',
          ipsb_code: '4632856',
        },
        {
          name: 'Ccm Desp Trâns Sc E Rs',
          code: '016',
          ipsb_code: '4715685',
        },
        {
          name: 'Banco Inbursa',
          code: '012',
          ipsb_code: '4866275',
        },
        {
          name: 'Banco Da Amazonia S.A',
          code: '003',
          ipsb_code: '4902979',
        },
        {
          name: 'Confidence Cc S.A',
          code: '060',
          ipsb_code: '4913129',
        },
        {
          name: 'Banco Do Estado Do Pará S.A',
          code: '037',
          ipsb_code: '4913711',
        },
        {
          name: 'Casa Credito S.A',
          code: '159',
          ipsb_code: '5442029',
        },
        {
          name: 'Albatross Ccv S.A',
          code: '172',
          ipsb_code: '5452073',
        },
        {
          name: 'Coop Central Ailos',
          code: '085',
          ipsb_code: '5463212',
        },
        {
          name: 'Central Cooperativa De Crédito No Estado Do Espírito Santo',
          code: '114',
          ipsb_code: '5790149',
        },
        {
          name: 'Banco Bbi S.A',
          code: '036',
          ipsb_code: '6271464',
        },
        {
          name: 'Banco Bradesco Financiamentos S.A	',
          code: '394',
          ipsb_code: '7207996',
        },
        {
          name: 'Banco Do Nordeste Do Brasil S.A',
          code: '004',
          ipsb_code: '7237373',
        },
        {
          name: 'Banco Ccb Brasil S.A',
          code: '320',
          ipsb_code: '7450604',
        },
        {
          name: 'Hs Financeira',
          code: '189',
          ipsb_code: '7512441',
        },
        {
          name: 'Lecca Cfi S.A',
          code: '105',
          ipsb_code: '7652226',
        },
        {
          name: 'Banco Kdb Brasil S.A.',
          code: '076',
          ipsb_code: '7656500',
        },
        {
          name: 'Banco Topázio S.A',
          code: '082',
          ipsb_code: '7679404',
        },
        {
          name: 'Ccr De Ouro',
          code: '286',
          ipsb_code: '7853842',
        },
        {
          name: 'Pólocred Scmepp Ltda',
          code: '093',
          ipsb_code: '7945233',
        },
        {
          name: 'Ccr De São Miguel Do Oeste',
          code: '273',
          ipsb_code: '8253539',
        },
        {
          name: 'Icap Do Brasil Ctvm Ltda',
          code: '157',
          ipsb_code: '9105360',
        },
        {
          name: 'Socred S.A',
          code: '183',
          ipsb_code: '9210106',
        },
        {
          name: 'Natixis Brasil S.A',
          code: '014',
          ipsb_code: '9274232',
        },
        {
          name: 'Caruana Scfi',
          code: '130',
          ipsb_code: '9313766',
        },
        {
          name: 'Codepe Cvc S.A',
          code: '127',
          ipsb_code: '9512542',
        },
        {
          name: 'Banco Original Do Agronegócio S.A',
          code: '079',
          ipsb_code: '9516419',
        },
        {
          name: 'Bbn Banco Brasileiro De Negocios S.A',
          code: '081',
          ipsb_code: '10264663',
        },
        {
          name: 'Standard Chartered Bi S.A',
          code: '118',
          ipsb_code: '11932017',
        },
        {
          name: 'Cresol Confederação',
          code: '133',
          ipsb_code: '10398952',
        },
        {
          name: 'Banco Agibank S.A',
          code: '121',
          ipsb_code: '10664513',
        },
        {
          name: 'Banco Da China Brasil S.A',
          code: '083',
          ipsb_code: '10690848',
        },
        {
          name: 'Get Money Cc Ltda',
          code: '138',
          ipsb_code: '10853017',
        },
        {
          name: 'Bco Bandepe S.A',
          code: '024',
          ipsb_code: '10866788',
        },
        {
          name: 'Banco Confidence De Câmbio S.A',
          code: '095',
          ipsb_code: '11703662',
        },
        {
          name: 'Banco Finaxis',
          code: '094',
          ipsb_code: '11758741',
        },
        {
          name: 'Senff S.A',
          code: '276',
          ipsb_code: '11970623',
        },
        {
          name: 'Multimoney Cc Ltda',
          code: '137',
          ipsb_code: '12586596',
        },
        {
          name: 'Brk S.A',
          code: '092',
          ipsb_code: '12865507',
        },
        {
          name: 'Banco Bco Do Estado De Sergipe S.A',
          code: '047',
          ipsb_code: '13009717',
        },
        {
          name: 'Bexs Banco De Cambio S.A.',
          code: '144',
          ipsb_code: '13059145',
        },
        {
          name: 'Br Partners Bi',
          code: '126',
          ipsb_code: '13220493',
        },
        {
          name: 'Bpp Instituição De Pagamentos S.A',
          code: '301',
          ipsb_code: '13370835',
        },
        {
          name: 'Brl Trust Dtvm Sa',
          code: '173',
          ipsb_code: '13486793',
        },
        {
          name: '	Banco Western Union',
          code: '119',
          ipsb_code: '13720915',
        },
        {
          name: 'Parana Banco S.A',
          code: '254',
          ipsb_code: '14388334',
        },
        {
          name: 'Barigui Ch',
          code: '268',
          ipsb_code: '14511781',
        },
        {
          name: '	Banco Bocom Bbm S.A',
          code: '107',
          ipsb_code: '15114366',
        },
        {
          name: 'Banco Capital S.A',
          code: '412',
          ipsb_code: '15173776',
        },
        {
          name: 'Banco Woori Bank Do Brasil S.A',
          code: '124',
          ipsb_code: '15357060',
        },
        {
          name: 'Facta S.A. Cfi',
          code: '149',
          ipsb_code: '15581638',
        },
        {
          name: 'Stone Pagamentos S.A',
          code: '197',
          ipsb_code: '16501555',
        },
        {
          name: 'Broker Brasil Cc Ltda',
          code: '142',
          ipsb_code: '16944141',
        },
        {
          name: 'Banco Mercantil Do Brasil S.A.',
          code: '389',
          ipsb_code: '17184037',
        },
        {
          name: 'Banco Itaú Bba S.A',
          code: '184',
          ipsb_code: '17298092',
        },
        {
          name: 'Banco Triangulo S.A (Banco Triângulo)',
          code: '634',
          ipsb_code: '17351180',
        },
        {
          name: 'Senso Ccvm S.A',
          code: '545',
          ipsb_code: '17352220',
        },
        {
          name: 'Icbc Do Brasil Bm S.A',
          code: '132',
          ipsb_code: '17453575',
        },
        {
          name: 'Vips Cc Ltda',
          code: '298',
          ipsb_code: '17772370',
        },
        {
          name: 'Ubs Brasil Bi S.A',
          code: '129',
          ipsb_code: '18520834',
        },
        {
          name: 'Ms Bank S.A Banco De Câmbio',
          code: '128',
          ipsb_code: '19307785',
        },
        {
          name: 'Parmetal Dtvm Ltda',
          code: '194',
          ipsb_code: '20155248',
        },
        {
          name: 'Vortx Dtvm Ltda',
          code: '310',
          ipsb_code: '22610500',
        },
        {
          name: 'Commerzbank Brasil S.A Banco Múltiplo',
          code: '163',
          ipsb_code: '23522214',
        },
        {
          name: 'Avista S.A',
          code: '280',
          ipsb_code: '23862762',
        },
        {
          name: 'Guitta Cc Ltda',
          code: '146',
          ipsb_code: '24074692',
        },
        {
          name: 'Ccr De Primavera Do Leste',
          code: '279',
          ipsb_code: '26563270',
        },
        {
          name: 'Dacasa Financeira S/A',
          code: '182',
          ipsb_code: '27406222',
        },
        {
          name: 'Genial Investimentos Cvm S.A',
          code: '278',
          ipsb_code: '27652684',
        },
        {
          name: 'Ib Cctvm Ltda',
          code: '271',
          ipsb_code: '27842177',
        },
        {
          name: 'Banco Banestes S.A',
          code: '021',
          ipsb_code: '28127603',
        },
        {
          name: 'Banco Abc Brasil S.A',
          code: '246',
          ipsb_code: '28195667',
        },
        {
          name: 'Scotiabank Brasil',
          code: '751',
          ipsb_code: '29030467',
        },
        {
          name: 'Banco Btg Pactual S.A',
          code: '208',
          ipsb_code: '30306294',
        },
        {
          name: 'Banco Modal S.A',
          code: '746',
          ipsb_code: '30723886',
        },
        {
          name: 'Banco Classico S.A',
          code: '241',
          ipsb_code: '31597552',
        },
        {
          name: 'Banco Guanabara S.A',
          code: '612',
          ipsb_code: '31880826',
        },
        {
          name: 'Banco Industrial Do Brasil S.A',
          code: '604',
          ipsb_code: '31895683',
        },
        {
          name: 'Banco Credit Suisse (Brl) S.A',
          code: '505',
          ipsb_code: '32062580',
        },
        {
          name: 'Banco Fair Cc S.A',
          code: '196',
          ipsb_code: '32648370',
        },
        {
          name: 'Banco La Nacion Argentina',
          code: '300',
          ipsb_code: '33042151',
        },
        {
          name: 'Citibank N.A',
          code: '477',
          ipsb_code: '33042953',
        },
        {
          name: 'Banco Cedula S.A',
          code: '266',
          ipsb_code: '33132044',
        },
        {
          name: 'Banco Bradesco Berj S.A',
          code: '122',
          ipsb_code: '33147315',
        },
        {
          name: 'Banco J.P. Morgan S.A',
          code: '376',
          ipsb_code: '33172537',
        },
        {
          name: 'Banco Caixa Geral Brasil S.A',
          code: '473',
          ipsb_code: '33466988',
        },
        {
          name: 'Banco Citibank S.A',
          code: '745',
          ipsb_code: '33479023',
        },
        {
          name: 'Banco Rodobens S.A',
          code: '120',
          ipsb_code: '33603457',
        },
        {
          name: 'Banco Fator S.A',
          code: '265',
          ipsb_code: '33644196',
        },
        {
          name: 'Bndes (Banco Nacional Do Desenvolvimento Social)',
          code: '7',
          ipsb_code: '33657248',
        },
        {
          name: 'Ativa S.A Investimentos',
          code: '188',
          ipsb_code: '33775974',
        },
        {
          name: 'Bgc Liquidez Dtvm Ltda',
          code: '134',
          ipsb_code: '33862244',
        },
        {
          name: 'Banco Alvorada S.A',
          code: '641',
          ipsb_code: '33870163',
        },
        {
          name: 'Banco Itaú Consignado S.A',
          code: '029',
          ipsb_code: '33885724',
        },
        {
          name: 'Banco Máxima S.A',
          code: '243',
          ipsb_code: '33923798',
        },
        {
          name: 'Haitong Bi Do Brasil S.A',
          code: '078',
          ipsb_code: '34111187',
        },
        {
          name: 'Banco Oliveira Trust Dtvm S.A',
          code: '111',
          ipsb_code: '36113876',
        },
        {
          name: 'Bny Mellon Banco S.A',
          code: '017',
          ipsb_code: '42272526',
        },
        {
          name: 'Pernambucanas Financ S.A',
          code: '174',
          ipsb_code: '43180355',
        },
        {
          name: 'La Provincia Buenos Aires Banco',
          code: '495',
          ipsb_code: '44189447',
        },
        {
          name: 'Brasil Plural S.A Banco',
          code: '125',
          ipsb_code: '45246410',
        },
        {
          name: 'Jpmorgan Chase Bank',
          code: '488',
          ipsb_code: '46518205',
        },
        {
          name: 'Banco Andbank S.A',
          code: '065',
          ipsb_code: '48795256',
        },
        {
          name: 'Ing Bank N.V',
          code: '492',
          ipsb_code: '49336860',
        },
        {
          name: 'Banco Bcv',
          code: '250',
          ipsb_code: '50585090',
        },
        {
          name: 'Levycam Ccv Ltda',
          code: '145',
          ipsb_code: '50579044',
        },
        {
          name: 'Banco Rep Oriental Uruguay',
          code: '494',
          ipsb_code: '51938876',
        },
        {
          name: 'Bexs Cc S.A',
          code: '253',
          ipsb_code: '52937216',
        },
        {
          name: 'Hsbc Banco De Investimento',
          code: '269',
          ipsb_code: '53518684',
        },
        {
          name: 'Bco Arbi S.A',
          code: '213',
          ipsb_code: '54403563',
        },
        {
          name: 'Intesa Sanpaolo Brasil S.A',
          code: '139',
          ipsb_code: '55230916',
        },
        {
          name: 'Banco Tricury S.A',
          code: '018',
          ipsb_code: '57839805',
        },
        {
          name: 'Banco Intercap S.A',
          code: '630',
          ipsb_code: '58497702',
        },
        {
          name: 'Banco Fibra S.A',
          code: '224',
          ipsb_code: '58616418',
        },
        {
          name: 'Banco Luso Brasileiro S.A',
          code: '600',
          ipsb_code: '59118133',
        },
        {
          name: 'Banco Pan',
          code: '623',
          ipsb_code: '59285411',
        },
        {
          name: 'Banco Bradesco Cartoes S.A',
          code: '204',
          ipsb_code: '59438325',
        },
        {
          name: 'Banco Itaubank S.A',
          code: '479',
          ipsb_code: '60394079',
        },
        {
          name: 'Banco Mufg Brasil S.A',
          code: '456',
          ipsb_code: '60498557',
        },
        {
          name: 'Banco Sumitomo Mitsui Brasil S.A',
          code: '464',
          ipsb_code: '60518222',
        },
        {
          name: 'Omni Banco S.A',
          code: '613',
          ipsb_code: '60850229',
        },
        {
          name: 'Itaú Unibanco Holding Bm S.A',
          code: '652',
          ipsb_code: '60872504',
        },
        {
          name: 'Banco Indusval S.A',
          code: '653',
          ipsb_code: '61024352',
        },
        {
          name: 'Banco Crefisa S.A',
          code: '069',
          ipsb_code: '61033106',
        },
        {
          name: 'Banco Mizuho S.A',
          code: '370',
          ipsb_code: '61088183',
        },
        {
          name: 'Banco Investcred Unibanco S.A',
          code: '249',
          ipsb_code: '61182408',
        },
        {
          name: 'Banco Bmg S.A',
          code: '318',
          ipsb_code: '61186680',
        },
        {
          name: 'Banco Ficsa S.A',
          code: '626',
          ipsb_code: '61348538',
        },
        {
          name: 'Sagitur Cc Ltda',
          code: '270',
          ipsb_code: '61444949',
        },
        {
          name: 'Banco Societe Generale Brasil',
          code: '366',
          ipsb_code: '61533584',
        },
        {
          name: 'Magliano S.A',
          code: '113',
          ipsb_code: '61723847',
        },
        {
          name: 'Tullett Prebon Brasil Cvc Ltda',
          code: '131',
          ipsb_code: '61747085',
        },
        {
          name: 'C.Suisse Hedging-Griffo Cv S.A (Credit Suisse)',
          code: '011',
          ipsb_code: '61809182',
        },
        {
          name: 'Banco Paulista',
          code: '611',
          ipsb_code: '61820817',
        },
        {
          name: 'Bofa Merrill Lynch Bm S.A',
          code: '755',
          ipsb_code: '62073200',
        },
        {
          name: 'Ccr Reg Mogiana',
          code: '089',
          ipsb_code: '62109566',
        },
        {
          name: 'Banco Pine S.A',
          code: '643',
          ipsb_code: '62144175',
        },
        {
          name: 'Easynvest – Título Cv S.A',
          code: '140',
          ipsb_code: '62169875',
        },
        {
          name: 'Banco Daycoval S.A',
          code: '707',
          ipsb_code: '62232889',
        },
        {
          name: 'Carol Dtvm Ltda',
          code: '288',
          ipsb_code: '62237649',
        },
        {
          name: 'Renascenca Dtvm Ltda',
          code: '101',
          ipsb_code: '62287735',
        },
        {
          name: 'Deutsche Bank S.A Banco Alemão',
          code: '487',
          ipsb_code: '62331228',
        },
        {
          name: 'Banco Cifra',
          code: '233',
          ipsb_code: '62421979',
        },
        {
          name: 'Guide',
          code: '177',
          ipsb_code: '65913436',
        },
        {
          name: 'Banco Rendimento S.A',
          code: '633',
          ipsb_code: '68900810',
        },
        {
          name: 'Banco Bs2 S.A',
          code: '218',
          ipsb_code: '71027866',
        },
        {
          name: 'Bs2 Distribuidora De Títulos E Investimentos',
          code: '292',
          ipsb_code: '28650236',
        },
        {
          name: 'Banco Olé Bonsucesso Consignado S.A',
          code: '169',
          ipsb_code: '71371686',
        },
        {
          name: 'Lastro Rdv Dtvm Ltda',
          code: '293',
          ipsb_code: '71590442',
        },
        {
          name: 'Frente Cc Ltda',
          code: '285',
          ipsb_code: '71677850',
        },
        {
          name: 'B&T Cc Ltda',
          code: '080',
          ipsb_code: '73622748',
        },
        {
          name: 'Novo Banco Continental S.A Bm',
          code: '753',
          ipsb_code: '74828799',
        },
        {
          name: 'Banco Crédit Agricole Br S.A',
          code: '222',
          ipsb_code: '75647891',
        },
        {
          name: 'Banco Sistema',
          code: '754',
          ipsb_code: '76543115',
        },
        {
          name: 'Credialiança Ccr',
          code: '098',
          ipsb_code: '78157146',
        },
        {
          name: 'Banco Vr S.A',
          code: '610',
          ipsb_code: '78626983',
        },
        {
          name: 'Banco Ourinvest S.A',
          code: '712',
          ipsb_code: '78632767',
        },
        {
          name: 'Credicoamo',
          code: '010',
          ipsb_code: '81723108',
        },
        {
          name: 'Rb Capital Investimentos Dtvm Ltda',
          code: '283',
          ipsb_code: '89960090',
        },
        {
          name: 'Banco John Deere S.A',
          code: '217',
          ipsb_code: '91884981',
        },
        {
          name: 'Advanced Cc Ltda',
          code: '117',
          ipsb_code: '92856905',
        },
        {
          name: 'Banco C6 S.A – C6 Bank',
          code: '336',
          ipsb_code: '28326000',
        },
        {
          name: 'Banco A.J. Renner S.A',
          code: '654',
          ipsb_code: '92874270',
        },
      ])
      .execute();
  }
}
