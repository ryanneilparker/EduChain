import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
      goerli:{
        url : process.env.RPC_URL,
        accounts: [process.env.ACCOUNT],
      }
   }
};

export default config;
