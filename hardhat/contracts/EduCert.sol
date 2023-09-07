// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EduCert is ERC721, Ownable {
    using Counters for Counters.Counter;

    // To track the total number of EduCerts issued & auto-increment ids
    Counters.Counter private _tokenIdCounter;

    // Mapping to associate studentName, certificateName, and message with token ID
    mapping(uint256 => CertificateData) private _certificateData;

    // Struct to store certificate data
    struct CertificateData {
        string studentName;
        string certificateName;
        string message;
    }

    // Use the ERC721 standard for creating NFTs
    constructor() ERC721("EduCert", "EDU") {}

    // Mint a new EduCert with associated data
    function safeMint(
        address to,
        string memory studentName,
        string memory certificateName,
        string memory message
    ) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        // Store the associated data for the token ID
        _certificateData[tokenId] = CertificateData({
            studentName: studentName,
            certificateName: certificateName,
            message: message
        });
    }

    // Retrieve certificate data by token ID
    function getCertificateData(
        uint256 tokenId
    )
        public
        view
        returns (
            string memory studentName,
            string memory certificateName,
            string memory message
        )
    {
        CertificateData memory data = _certificateData[tokenId];
        return (data.studentName, data.certificateName, data.message);
    }
}
