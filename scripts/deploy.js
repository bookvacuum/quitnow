// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const sendEth = await hre.ethers.getContractFactory("SendEth");
  const sendEthContract = await sendEth.deploy();

  await sendEthContract.deployed();

  console.log("SendEthContract deployed to:", sendEthContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });