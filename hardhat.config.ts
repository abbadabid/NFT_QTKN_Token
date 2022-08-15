import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-ethers");

const config: HardhatUserConfig = {
  solidity: "0.8.9",
};

export default config;
