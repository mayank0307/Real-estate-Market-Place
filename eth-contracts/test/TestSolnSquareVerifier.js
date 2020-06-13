// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol');
var SquareVerifier = artifacts.require('SquareVerifier');
const Proofzokrates = require("../../zokrates/code/square/proof.json");

contract("TestSolnSquareVerifier", accounts => {
  const account_one = accounts[0];
  const account_two = accounts[1];
  const tokenID = 11;

  

  console.log("TestSolnSquareVerifier:");
  console.log("Account one: accounts[0] ", accounts[0]);
  console.log("Account two: accounts[1] ", accounts[1]);

  beforeEach(async() => {
    let squareVerifierContract = await SquareVerifier.new({from: account_one});
    this.contract = await SolnSquareVerifier.new(squareVerifierContract.address, {from: account_one});
  });

  // Test if a new solution can be added for contract - SolnSquareVerifier
  it("should add new solution", async() => {
    let result = false;

    try {
      await this.contract.submitSolution(...Object.values(Proofzokrates.proof), Proofzokrates.inputs, account_two, tokenID, { from: account_two });
      result = true;
    } 
    catch(e) {
      console.log(e);
      result = false;
    }
    assert.equal(result, true);
  });

  it("should not add new solution if the proof was used previously", async() => {
    let result = false;

    try {
      await this.contract.submitSolution(...Object.values(Proofzokrates.proof), Proofzokrates.inputs, account_two, tokenID, { from: account_two });
      await this.contract.submitSolution(...Object.values(Proofzokrates.proof), Proofzokrates.inputs, account_two, tokenID+1, { from: account_two });
      result = true;
    } catch(e) {
      result = false;
    }
    assert.equal(result, false);
  });

  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  it("should be able to mint new token after solution has been submitted", async() => {
    let result = false;
    try {
      await this.contract.submitSolution(...Object.values(Proofzokrates.proof), Proofzokrates.inputs, account_two, tokenID, { from: account_two });
      await this.contract.mint(account_two, tokenID, { from: account_one });
      result = true
    } catch(e) {
      console.log(false);
      result = false;
    }
    assert.equal(result, true);
  });
});