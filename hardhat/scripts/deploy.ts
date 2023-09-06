import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployEduCert: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, ethers } = hre;
  const { deploy } = deployments;

  // Deploy the EduCert contract
  await deploy("EduCert", {
    from: (await ethers.getSigners())[0].address, // Deployer's address
    args: [], // Add constructor arguments if any
    log: true,
  });

  console.log(`EduCert contract deployed to: ${(await deployments.get("EduCert")).address}`);
};

export default deployEduCert;