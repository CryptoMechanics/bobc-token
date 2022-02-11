pragma solidity ^0.8.0;

//its a simple example of a coin-like contract. have to read on ux contract
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers! madi


import "../@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

// 667000000000000000000000000
contract BOBC is ERC20{
    constructor() ERC20("BOBC", "BOBC")   {
        _mint(msg.sender, 667000000000000000000000000);
    }
}