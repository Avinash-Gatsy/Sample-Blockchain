const sha256 = require('js-sha256');

const tA = 'Vatsal -> Selva : 10tokens';
const tB = 'Anand -> Danny : 3tokens';
const tC = 'Chinmaya -> Supraja : 6tokens';
const tD = 'Akshay -> Vignesh : 1token';

const hA = sha256(sha256(tA)); //0ad90d50247d6b572823f6191148eda95a15797a0036d511323af9496222a653
const hB = sha256(sha256(tB)); //9aa98122f81cd40023a1d605ea5b575993fedb62bc3909e5904b44a375d0660e
const hC = sha256(sha256(tC)); //a21a2701b8d2ee037f6e29dd562d4258822922717cf3e1112db8be06c4f1913c
const hD = sha256(sha256(tD)); //0ded46281065a7a41d2ceaa718afde07076c3d8b0de270672f72ad862521b932

const hAB = sha256(sha256(hA + hB)); //49476bea8feee3757db3c4ed96911ce36cf444d6de2a0c80c5a86182d00a7e7c
const hCD = sha256(sha256(hC + hD)); //39ef9fdcb2f840e07f2f516aaf21ae10666fd729e6fa343373d39df359e8e906

const hABCD = sha256(sha256(hAB + hCD)); 
//merkle root -> 9d5294856915727adcb96f59aef0d974da9f3a9fec32d121a165d968a18c3878
