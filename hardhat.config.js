require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  networks: {
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/o0jXNR4Sp74yw_2yL3kU2uGbHS8-pQEx",
      accounts: ["009e6ec3c2fe6d989f684d08b12b752f47bd54cd1bcb954c722ad2be37220e5b"], // Use a private key from an environment variable
      chainId: 80001, // Explicitly set chain ID for Polygon Mumbai
    },
  },

  etherscan: {
    apiKey: "VNP3A13RSKIRX1VR5X26FI5EFCJDI485EY", // Use an environment variable for API key
  },
};
