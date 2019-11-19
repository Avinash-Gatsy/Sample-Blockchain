const blockchain = require('./blockchain');

blockchain.initBlockchain();
blockchain.addNewBlock('First block');
blockchain.addNewBlock('Second block');
blockchain.addNewBlock('Third block');

console.log(blockchain.getAllBlocks());