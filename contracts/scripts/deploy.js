const { ethers } = require("hardhat");

async function main() {
  const MyETHFarmNFT = await ethers.getContractFactory("MyETHFarmNFT");
  const contract = await MyETHFarmNFT.deploy();
  await contract.deployed();
  console.log("Contract deployed at:", contract.address);
}

main();

