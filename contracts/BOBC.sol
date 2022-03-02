pragma solidity ^0.8.0;

import "../@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

// 667000000000000000000000000
contract BOBC is ERC20{
    constructor() ERC20("BOBC", "BOBC")   {
        _mint(msg.sender, 667000000000000000000000000);
    }
}