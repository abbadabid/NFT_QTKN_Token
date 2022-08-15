# NFT_QTKN_Token
Purchasing course NFTs from School (upgradeable ERC20 and upgradeable ERC721)

npm install #installing dependencies

mpx hardhat node #for starting a local blockchain

1. Running script for deploying upgradeable ERC20 token
- npx hard run scripts/deply_token.ts --network localhost

copy the address and paste it in "deploy_mycontract.ts" in Token.attach(" ");

2. Running scipt for deploying upgradeable ERC721 token
-npx hardhat run scripts/deploy_nft.ts -- network localhost

copy the address and paste it in "deploy_mycontract.ts" in Token.attach(" ");

3. Running script for deploying upgradeable mycontract (contract which handles all the use cases)
-npx hardhat run scripts/deploy_mycontract.ts -- network localhost




