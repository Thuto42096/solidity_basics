// Example commands to run in Hardhat console
// Start console with: npx hardhat console

// To use this script, copy and paste these commands into the Hardhat console

/*

// Get signers
const [deployer] = await ethers.getSigners();
console.log("Deployer address:", deployer.address);

// Deploy FullSchoolSystem
const FullSchoolSystem = await ethers.getContractFactory("FullSchoolSystem");
const school = await FullSchoolSystem.deploy("WeThinkCode School");
await school.waitForDeployment();
const address = await school.getAddress();
console.log("Contract deployed to:", address);

// Get school name
const name = await school.getSchoolName();
console.log("School name:", name);

// Get admin
const admin = await school.admin();
console.log("Admin:", admin);

// Add a student
await school.addStudent(1, "Alice Johnson", 85, 92);
console.log("Student added!");

// Get student
const student = await school.getStudent(1);
console.log("Student:", student);

// Get full details
const details = await school.getFullDetails(1);
console.log("Full details:", details);

// Add more students
await school.addStudent(2, "Bob Smith", 78, 88);
await school.addStudent(3, "Charlie Brown", 92, 95);

// Get all students
const student1 = await school.getFullDetails(1);
const student2 = await school.getFullDetails(2);
const student3 = await school.getFullDetails(3);
console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);

*/

