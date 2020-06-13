var MikeRealERC721Token = artifacts.require('MikeRealERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const totalSupplyAccountOne = 5;
    const totalSupplyAccountTwo = 10;
    const totalSupply = totalSupplyAccountOne + totalSupplyAccountTwo;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await MikeRealERC721Token.new({from: account_one});

            // TODO: mint multiple tokens
            for (var i = 0; i < totalSupplyAccountOne; i++) {
                await this.contract.mint(account_one, i, {from: account_one});
            }
      
            for (var i = totalSupplyAccountOne; i < totalSupply; i++) {
                await this.contract.mint(account_two, i, {from: account_one});
            }
        })

        it('should return total supply', async function () { 
            let result = await this.contract.totalSupply.call();
      assert.equal(totalSupply, result);
            
        });

        it('should get token balance', async function () { 
            let result = await this.contract.balanceOf(account_one);
      assert.equal(totalSupplyAccountOne, result);

      result = await this.contract.balanceOf(account_two);
      assert.equal(totalSupplyAccountTwo, result);
            
        });

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let result = await this.contract.tokenURI(1);
      assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", result);
            
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_one, (totalSupply-1), {from: account_two});
            let result = await this.contract.ownerOf((totalSupply-1));
            assert.equal(account_one, result);
      
            result = await this.contract.balanceOf(account_one);
            assert.equal(totalSupplyAccountOne + 1, result, "account one gains 1 token");
      
            result = await this.contract.balanceOf(account_two);
            assert.equal(totalSupplyAccountTwo - 1, result, "account two loses 1 token");
      
            result = await this.contract.totalSupply.call();
            assert.equal(totalSupply, result, "total supply stays");
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await MikeRealERC721Token.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(account_two, 1, {from: account_two});
              } catch(err) {
                assert.equal(err.reason, "caller must be the contract owner");
              }
        });

        it('should return contract owner', async function () { 
            let result = await this.contract.owner();
            assert.equal(account_one, result);
      
            
            
        });

    });
})