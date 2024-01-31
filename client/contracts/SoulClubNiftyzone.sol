
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SoulClubNiftyzone is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

	
	uint256 public constant maxSupply = 2000;
    uint256 public constant maxMintPerAddress = 3;
    Counters.Counter private _tokenIdCounter;
 

    mapping(string => uint8) existingURIs;
	mapping(address => uint256) private mintedCount;

    constructor() ERC721("SoulClubNiftyzone", "SCN") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://apricot-advisory-cicada-105.mypinata.cloud/ipfs/QmVScSzuTcWL8CSuB7Q6Bw5DtGkSE2zRansU4fYjR7DE2f/";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        existingURIs[uri] = 1;
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    function payToMint(
        address recipient,
        string memory metadataURI
    ) public payable returns (uint256) {
        require(existingURIs[metadataURI] != 1, 'NFT already minted!');
        require (msg.value >= 0.0539 ether, 'Need to pay up!');

// Check if the sender has already minted the maximum allowed NFTs
        require(mintedCount[msg.sender] < maxMintPerAddress, 'Max mint per address reached');
       

        uint256 newItemId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        existingURIs[metadataURI] = 1;

 

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, metadataURI);

  // Increment the minted count for the sender
        mintedCount[msg.sender]++;

// Check if the total supply has reached the maximum allowed
        require(_tokenIdCounter.current() < maxSupply, 'Max total supply reached, No more NFT');

    // Transfer the funds to your wallet
        payable(owner()).transfer(msg.value);

        return newItemId;
    }


 


    function count() public view returns (uint256) {
        return _tokenIdCounter.current();
    }


}

 