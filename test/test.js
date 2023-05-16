const { getNamedAccounts, deployments, ethers, network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { assert, expect } = require("chai")
const { networkConfig } = require("../helper-hardhat-config")


!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Token test", function () {
          let token,deployer
          const chainId = network.config.chainId
          beforeEach(async function () {
              deployer=(await getNamedAccounts()).deployer
              console.log(deployer)
              await deployments.fixture(["all"],1000)
              token = await ethers.getContract("Token",deployer)

          })

          describe("constructor",function(){
              it("checking the name,the symbol and the totalSupply",async () => {
                  const name = await token.name()
                  const symbol = await token.symbol()
                  const totalSupply= await token.totalSupply()
                  assert.equal(name,"Token")
                  assert.equal(symbol,"T")
                  assert.equal(totalSupply.toString(),"100000000000000")
              })

              it("Should assign the total supply to the owner",async()=>{
                const deployerBalance= await token.balanceOf(deployer)
                assert.equal(deployerBalance.toString(),"100000000000000")                
              })
            
          })
        })
