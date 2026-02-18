const hre = require("hardhat");

async function main() {
  // Replace this with your deployed contract address
  const contractAddress = process.env.CONTRACT_ADDRESS || "YOUR_CONTRACT_ADDRESS_HERE";
  
  if (contractAddress === "YOUR_CONTRACT_ADDRESS_HERE") {
    console.log("Please set CONTRACT_ADDRESS environment variable or update the script");
    console.log("Example: CONTRACT_ADDRESS=0x... npx hardhat run scripts/interact.js --network localhost");
    return;
  }

  console.log(`Interacting with FullSchoolSystem at: ${contractAddress}`);

  // Get the contract instance
  const FullSchoolSystem = await hre.ethers.getContractFactory("FullSchoolSystem");
  const contract = FullSchoolSystem.attach(contractAddress);

  // Get school name
  const schoolName = await contract.getSchoolName();
  console.log(`School Name: ${schoolName}`);

  // Get admin address
  const admin = await contract.admin();
  console.log(`Admin Address: ${admin}`);

  // Add a student
  console.log("\nAdding student...");
  const tx = await contract.addStudent(1, "Alice Johnson", 85, 92);
  await tx.wait();
  console.log("Student added successfully!");

  // Get student details
  console.log("\nGetting student details...");
  const student = await contract.getStudent(1);
  console.log(`Student Name: ${student[0]}`);
  console.log(`Math Grade: ${student[1]}`);
  console.log(`Science Grade: ${student[2]}`);

  // Get full details
  console.log("\nGetting full details...");
  const fullDetails = await contract.getFullDetails(1);
  console.log(`Name: ${fullDetails[0]}`);
  console.log(`Math Grade: ${fullDetails[1]}`);
  console.log(`Science Grade: ${fullDetails[2]}`);
  console.log(`School: ${fullDetails[3]}`);
  console.log(`Admin: ${fullDetails[4]}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

