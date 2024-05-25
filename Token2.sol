//SPDX-Licence-Identifier: MIT
// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract RECMINI is ERC20("RECMINI","RMI")
{

function mintOne() public
{
    _mint(msg.sender, 1*10**18);
}

}