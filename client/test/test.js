/*eslint-disable */

// const { expect } = require("chai");
// const { ethers } = require("hardhat");
import { expect } from "chai";
import pkg from "hardhat";

const { ethers } = pkg;
describe("SoulClubNiftyzone", function () {
  it("Should mint and transfer an NFT to someone", async function () {
    const SoulClub = await ethers.getContractFactory("SoulClubNiftyzone");
    const soulclub = await SoulClub.deploy();
    await soulclub.deployed();

    const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
    const metadataURI =
      "ipfs://QmNqCdsTuykipyk9rnnaizAmg2FKtGJmCBD4aWw9kNyvku/2.jpg";

    let balance = await soulclub.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await soulclub.payToMint(recipient, metadataURI, {
      value: ethers.utils.parseEther("0.0539"),
    });

    // wait until the transaction is mined
    await newlyMintedToken.wait();

    balance = await soulclub.balanceOf(recipient);
    expect(balance).to.equal(1);

    expect(await soulclub.isContentOwned(metadataURI)).to.equal(true);
    const newlyMintedToken2 = await soulclub.payToMint(recipient, "foo", {
      value: ethers.utils.parseEther("0.0539"),
    });
  });
});
