const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account: " + deployer.address);

    

    const Vesting = await ethers.getContractFactory("InvestorClaimV2");
    const vesting = await Vesting.deploy();
    const EBru = await ethers.getContractFactory("InvestorClaimV2");
    const eBru = await EBru.deploy();
    
    console.log("Vesting: " + vesting.address);
    console.log("EBRU: " + eBru.address);
}

main()
    .then(() => process.exit())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
