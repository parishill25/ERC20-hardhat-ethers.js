const { deployments, ethers } = require("hardhat")
const { verify } = require("../utils/verify")
const { developmentChains} = require("../helper-hardhat-config")

const INITIAL_SUPPLY=1e14
module.exports=async({developementChains,getNamedAccounts})=>{
    const {deployer}= await getNamedAccounts()
    const{log,deploy}=deployments
    const  chainId=network.config.chainId
    console.log("hello")

    const args=[INITIAL_SUPPLY]

    const token= await deploy("Token",{
        from:deployer,
        log:true,
        args:args,
        waitConfirmations:network.config.blockCofirmations||1,
    })
    console.log(token.address)
    console.log("Token deployed")
    
    if(!developmentChains.includes(network.name)&& process.env.ETHERSCAN_KEY){
        log("Verifying.......................")
        await verify(token.address,args)
    }
    log("-----------------------------------------------------")
    
}

module.exports.tags=["all","Token"]