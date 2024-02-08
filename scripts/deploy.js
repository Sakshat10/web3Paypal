const hre = require("hardhat");

async function main() {
  // Get a signer for the transaction
  const [signer] = await ethers.getSigners();

  // Get the contract factory
  const Paypal = await hre.ethers.getContractFactory("Paypal");

  // **Remove explicit "from" parameter**
  const paypal = await Paypal.deploy();

  // Wait for deployment to complete
  await paypal.deployed();

  console.log("Paypal deployed to:", paypal.address);
}

// Error handling
main()
  .then(() => process.exit(0)) // Exit with a success code
  .catch((error) => {
    console.error(error);
    process.exit(1); // Exit with an error code
  });
