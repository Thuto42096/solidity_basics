const hre = require("hardhat");

async function main() {
  console.log("Deploying FullSchoolSystem contract...");

  // Get the contract factory
  const FullSchoolSystem = await hre.ethers.getContractFactory("FullSchoolSystem");
  
  // Deploy the contract with school name
  const schoolName = "WeThinkCode School";
  //const fullSchoolSystem = await FullSchoolSystem.deploy(schoolName);
  const Parent = await hre.ethers.getContractFactory("Parent");
  const parent = await Parent.deploy();
  
  //await fullSchoolSystem.waitForDeployment();
  await parent.waitForDeployment();
  
  // const address = await fullSchoolSystem.getAddress();
  // console.log(`FullSchoolSystem deployed to: ${address}`);
  // console.log(`School Name: ${schoolName}`);
  
  const parentAddress = await parent.getAddress();
  console.log(`Parent deployed to: ${parentAddress}`);
  
  return parentAddress;
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

