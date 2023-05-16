require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()


/** @type import('hardhat/config').HardhatUserConfig */


ALCHEMY_URL=process.env.ALCHEMY_URL
PRIVATE_KEY=process.env.PRIVATE_KEY
ETHERSCAN_KEY = process.env.ETHERSCAN_KEY

module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{
      chainId:31337,
      blockConfirmations:1
  },

  sepolia:{
    url:ALCHEMY_URL,
    accounts:[PRIVATE_KEY],
    chainId:11155111,
    blockConfirmations:1
},

  },
  etherscan: {
    apiKey: {
      sepolia:ETHERSCAN_KEY
    }
  },
namedAccounts: {
  deployer:{
      default:0,
  },
  user: {
      default:1,
  },
 

  },
  solidity: "0.8.18",
}
