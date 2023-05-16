// SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Token is ERC20 {

    constructor(uint256 initialsupply) ERC20("Token","T"){
        _mint(msg.sender,initialsupply);
        
    }
}