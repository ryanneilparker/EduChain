// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EduCert is ERC721, Ownable {
    using Counters for Counters.Counter;

    // To track the total number of EduCerts issued & auto-increment ids
    Counters.Counter private _tokenIdCounter;

    // Use the ERC721 standard for creating NFTs
    constructor() ERC721("EduCert", "EDU") {}

    // Only a privilaged account should be able to mint new EduCerts
    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
}
}
