// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DegreeCertificate is ERC721 {
    address public owner;
    uint256 public nextTokenId;

    struct Institution {
        string name;
        address owner;
        bool exists;
    }

    struct Certificate {
        string name;
        string institution;
        string degreeType;
        string date;
    }

    mapping(address => Institution) public institutions;
    mapping(uint256 => Certificate) public certificates;

    constructor() ERC721("NFT Certificate", "NFTC") {}

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyInstitution() {
        require(
            institutions[msg.sender].exists == true,
            "Only institutions can call this function"
        );
        _;
    }

    function createInstitution(
        string memory name,
        address institutionOwner
    ) public {
        require(
            institutions[institutionOwner].exists == false,
            "Institution already exists"
        );
        institutions[institutionOwner] = Institution(
            name,
            institutionOwner,
            true
        );
    }

    function mintCertificate(
        string memory name,
        string memory institution,
        string memory degreeType,
        string memory date
    ) public onlyInstitution {
        uint256 tokenId = nextTokenId;
        certificates[tokenId] = Certificate(
            name,
            institution,
            degreeType,
            date
        );
        _safeMint(msg.sender, tokenId);
        nextTokenId++;
    }

    function getCertificate(
        uint256 tokenId
    ) public view returns (Certificate memory) {
        return certificates[tokenId];
    }
}
