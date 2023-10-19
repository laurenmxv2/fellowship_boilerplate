require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { PRIVATE_KEY, INFURA_API_KEY } = process.env;
// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    linea_testnet: {
      url: `https://linea-goerli.infura.io/v3/6baf3bb52be84807b33e5c84bd20c4c3`,
      accounts: [PRIVATE_KEY],
      console.log(PRIVATE_KEY),
    },
    linea_mainnet: {
      url: `https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};