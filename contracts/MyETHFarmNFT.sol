// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyETHFarmNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    mapping(uint256 => string) public tokenCategories; // Tracks the type of each NFT (e.g., "Cow", "Tractor")

    event NFTMinted(address indexed owner, uint256 tokenId, string category);

    constructor() ERC721("MyETHFarmNFT", "MEF") {}

    /**
     * @dev Mint a new farm-themed NFT.
     * @param recipient Address to receive the NFT.
     * @param tokenURI Metadata URI for the NFT.
     * @param category The type of the NFT (e.g., "Cow", "Tractor").
     */
    function mintNFT(
        address recipient,
        string memory tokenURI,
        string memory category
    ) public onlyOwner returns (uint256) {
        _tokenIds += 1;
        uint256 newTokenId = _tokenIds;

        _mint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCategories[newTokenId] = category;

        emit NFTMinted(recipient, newTokenId, category);

        return newTokenId;
    }

    /**
     * @dev Fetch details of an NFT.
     * @param tokenId The ID of the token to fetch details for.
     * @return owner Owner of the token.
     * @return uri URI metadata for the token.
     * @return category Type/category of the token.
     */
    function getTokenDetails(uint256 tokenId)
        public
        view
        returns (
            address owner,
            string memory uri,
            string memory category
        )
    {
        owner = ownerOf(tokenId);
        uri = tokenURI(tokenId);
        category = tokenCategories[tokenId];
    }
}

