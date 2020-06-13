// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var MikeRealERC721Token = artifacts.require("./MikeRealERC721Token.sol");

module.exports = async function(deployer) {
  await deployer.deploy(MikeRealERC721Token);
  const nipaHutERC721Token = await MikeRealERC721Token.deployed();

  await deployer.deploy(SquareVerifier);
  const verifierContract = await SquareVerifier.deployed();

  await deployer.deploy(SolnSquareVerifier, verifierContract.address);
  const solnSquareVerifier = await SolnSquareVerifier.deployed();
};
