// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
/*eslint-disable */
//for COMMON js module
//const hre = require("hardhat");
//for ES modules

import hre from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const SoulClub = await hre.ethers.getContractFactory("SoulClubNiftyzone");
  const soulclub = await SoulClub.deploy();
  // const soulclub = await SoulClub.deploy({
  //   //owner address
  //   // from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  // });

  await soulclub.deployed();

  console.log("NiftyZone NFT deployed to:", soulclub.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
