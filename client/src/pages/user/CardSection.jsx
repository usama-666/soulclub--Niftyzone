import { Box, CircularProgress, Hidden } from "@mui/material";
import { Stack } from "@mui/system";
import { CTypography, OutlinedBtn } from "../../utility";
import FireIcon from "../../assets/svg/FireIcon";
import EthIcon from "../../assets/svg/EthIcon";

//Importing Images
import nft0 from "../../assets/Nft_Asset/soulclubnifty_images/0.jpg";
import nft1 from "../../assets/Nft_Asset/soulclubnifty_images/1.jpg";
import nft2 from "../../assets/Nft_Asset/soulclubnifty_images/2.jpg";
import nft3 from "../../assets/Nft_Asset/soulclubnifty_images/3.jpg";
import nft4 from "../../assets/Nft_Asset/soulclubnifty_images/4.jpg";
import nft5 from "../../assets/Nft_Asset/soulclubnifty_images/5.jpg";
import nft6 from "../../assets/Nft_Asset/soulclubnifty_images/6.jpg";
import nft7 from "../../assets/Nft_Asset/soulclubnifty_images/7.jpg";
import nft8 from "../../assets/Nft_Asset/soulclubnifty_images/8.jpg";
import nft9 from "../../assets/Nft_Asset/soulclubnifty_images/9.jpg";
import nft10 from "../../assets/Nft_Asset/soulclubnifty_images/10.jpg";
import nft11 from "../../assets/Nft_Asset/soulclubnifty_images/11.jpg";
import nft12 from "../../assets/Nft_Asset/soulclubnifty_images/12.jpg";
import nft13 from "../../assets/Nft_Asset/soulclubnifty_images/13.jpg";
import nft14 from "../../assets/Nft_Asset/soulclubnifty_images/14.jpg";
import nft15 from "../../assets/Nft_Asset/soulclubnifty_images/15.jpg";
import nft16 from "../../assets/Nft_Asset/soulclubnifty_images/16.jpg";
import nft17 from "../../assets/Nft_Asset/soulclubnifty_images/17.jpg";
import nft18 from "../../assets/Nft_Asset/soulclubnifty_images/18.jpg";
import nft19 from "../../assets/Nft_Asset/soulclubnifty_images/19.jpg";
import nft20 from "../../assets/Nft_Asset/soulclubnifty_images/20.jpg";
import axiosAPI from "../../services/axios.JS";

// import NFTimage from "./NftImage";
//Blockchain Imports
import { ethers } from "ethers";
import SoulClub from "../../artifacts/contracts/SoulClubNiftyzone.sol/SoulClubNiftyzone.json";
import { useEffect, useState } from "react";
import Card from "../../utility/Card";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
// const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractAddress = "0xF432979F87CAeF442FeBF4134297FBd12C5cF2eA";

//  Sepolia const contractAddress = "0x8E0E54A7D6FF2FBbF508542B494c93E0d7D2068c";

// const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
// const signer = provider.getSigner();

// get the smart contract
// const contract = new ethers.Contract(contractAddress, SoulClub.abi, signer);

function CardSection({ visibleNft }) {
  console.log(visibleNft);
  const metadata = [
    {
      id: 0,

      _id: "dsadasdadad",
      img: nft0,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 1,

      _id: "dsadasdadad",
      img: nft1,
      react: "341",
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 2,

      _id: "dsadasdadad",
      img: nft2,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 3,

      _id: "dsadasdadad",
      img: nft3,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 4,

      _id: "dsadasdadad",
      img: nft4,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 5,

      _id: "dsadasdadad",
      img: nft5,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 6,

      _id: "dsadasdadad",
      img: nft6,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 7,

      _id: "dsadasdadad",
      img: nft7,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 8,

      _id: "dsadasdadad",
      img: nft8,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 9,

      _id: "dsadasdadad",
      img: nft9,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 10,
      _id: "dsadasdadad",
      img: nft10,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 11,
      _id: "dsadasdadad",
      img: nft11,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 12,
      _id: "dsadasdadad",
      img: nft12,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 13,
      _id: "dsadasdadad",
      img: nft13,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 14,
      _id: "dsadasdadad",
      img: nft14,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 15,
      _id: "dsadasdadad",
      img: nft15,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 16,
      _id: "dsadasdadad",
      img: nft16,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 17,
      _id: "dsadasdadad",
      img: nft17,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 18,
      _id: "dsadasdadad",
      img: nft18,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 19,
      _id: "dsadasdadad",
      img: nft19,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
    {
      id: 20,
      _id: "dsadasdadad",
      img: nft20,
      // name: "Monkey Ape",
      eth: "0.0539",
      busd: "125.66",
      status: "on Sale",
    },
  ];
  const [totalMinted, setTotalMinted] = useState(0);

  //const contentId = "PINATA_CONTENT_ID";
  // const contentId =
  //   "https://apricot-advisory-cicada-105.mypinata.cloud/ipfs/QmVScSzuTcWL8CSuB7Q6Bw5DtGkSE2zRansU4fYjR7DE2f";

  // const metadataURI = `${contentId}/${tokenId}.json`;
  // console.log(tokenId);
  // const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  const [collectionData, setCollectionData] = useState(metadata);
  // useEffect(() => {
  //   getMintedStatus();
  // }, [isMinted]);

  useEffect(() => {
    // getCount();

    if (!window.ethereum) {
      alert("Please Install metamask to use Applicaton");
      toast.warn(" Please Install metamask to use Applicaton", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });
    }
    fetchCollection();
  }, [isMinted]);
  async function fetchCollection() {
    try {
      const res = await axiosAPI.get("/collection");
      console.log(res);
      console.log(res.data[0]._id);
      console.log(res.data[0].status);
      // setCollectionData((collection) => collection.status);
      // updatedMetadata();

      const updatedMetadata = collectionData.map((item, index) => ({
        ...item,
        _id: res.data[index]._id,
        status: res.data[index].status,
      }));

      console.log(updatedMetadata);
      setCollectionData(updatedMetadata);
      // console.log(collectionData.status);
    } catch (error) {
      console.log("failed to fetch collection", error);
    }
  }

  async function handleStatus(id) {
    try {
      const res = await axiosAPI.put(`/collection/${id}`);
      console.log("Updated status Successfully", res);
      // return true;
    } catch (error) {
      console.log("failed to update status", error);
    }
  }

  // async function getURI(tokenId) {
  //   try {
  //     const uri = await contract.tokenURI(tokenId);
  //     console.log(uri);
  //     alert(uri);
  //   } catch (error) {
  //     console.log("No Ui storage link", error);
  //   }
  // }

  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // get the end user
    const signer = provider.getSigner();

    // get the smart contract
    const contract = new ethers.Contract(contractAddress, SoulClub.abi, signer);

    const getMintedStatus = async (metadataURI) => {
      try {
        // console.log("Inside mint status", tokenId);
        const result = await contract.isContentOwned(metadataURI);
        console.log(result);
        // if (result) {
        //   collectionData.map((item) =>
        //     item.id === id ? { ...item, status: "Sold" } : item
        //   );
        // }
        // setIsMinted(result);
      } catch (error) {
        console.log("Error in getting mint status : ", error);
      }
    };

    const mintToken = async (tokenId) => {
      const metadataURI = `${tokenId}.json`;
      console.log("URL : ", metadataURI);
      const connection = contract.connect(signer);
      const addr = connection.address;
      console.log("Address : ", addr);
      try {
        // Check if the user has MetaMask installed and connected
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (!accounts || accounts.length === 0) {
          toast.error(" Connect Metamask", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
          return;
        }

        // Check if the user has enough balance
        const balance = await provider.getBalance(accounts[0]);
        if (ethers.utils.formatEther(balance) < 0.0539) {
          toast.warn(" Insufficient balance.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
          return;
        }
        const mintedmetadatauri = `${metadataURI}`;
        // Check if the NFT has already been minted
        if (await contract.isContentOwned(mintedmetadatauri)) {
          toast.error("NFT already minted!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
          return;
        }

        const transaction = await contract.payToMint(accounts[0], metadataURI, {
          value: ethers.utils.parseEther("0.0539"),
        });

        // Display initial pending message
        toast.success("Minting NFT in progress...", {
          position: "top-center",
          autoClose: 3000, // Keep the message open until further updates
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "dark",
        });

        const minted = await transaction.wait();

        if (minted) {
          toast.success("NFT minted Successfully", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
        }
        console.log("URL- in Mint view on OpenSea  : ", `ifs://${metadataURI}`);
        getMintedStatus(metadataURI);
        getCount();

        return true;
      } catch (error) {
        console.log("Minting Failed", error);
        // Handle specific errors here
        if (error.code === 4001) {
          alert("Transaction rejected by user.");
        } else if (error.message.includes("NFT already minted")) {
          toast.warn("NFT already minted!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
        } else if (error.message.includes("Max mint per address reached")) {
          toast.warn("Max mint per address reached", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
        } else {
          toast.error("Minting failed. Please try again later.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
          });
        }
      } finally {
        console.log("successfuly minted");
      }
    };
    const handleMintAndStatus = async (index, id) => {
      console.log(id);

      const minted = await mintToken(index);
      if (minted) {
        await handleStatus(id);
        await fetchCollection();
      }
      // if (mintStatus) {
      //   const updated = handleStatus(id);
      //   if(updated){

      //     await fetchCollection();
      //   }
      //   console.log("updated", updated);
      // }
    };
    const getCount = async () => {
      const count = await contract.count();
      console.log(parseInt(count));
      setTotalMinted(parseInt(count));
    };

    return (
      <>
        <Stack
          direction="row"
          gap={2}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          // row gap is not working in stack
          // rowGap={4}
        >
          {collectionData.slice(0, visibleNft).map((item, index) => (
            <Card
              key={index}
              tokenId={index}
              sx={{
                background:
                  "linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);" ||
                  "linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%);",
                borderWidth: "0px" || "2.5px 0px",
                borderStyle: "solid",
                borderColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px)" || "blur(17.915px)",
                borderRadius: "15px" || "41.6667px",
                width: "fit-content",
                // ...(!noHover && {
                //   "&:hover": {
                //     background:
                //       "linear-gradient(160.61deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 101.7%);",
                //     borderColor: "rgba(255, 255, 255, 0.6)",
                //   },
                // }),
              }}>
              <>
                <Box
                  className="nftCollectionImage"
                  sx={{
                    position: "relative",
                  }}>
                  <Box
                    overflow:Hidden
                    className={item.status === "Sold" ? "nftImage" : ""}
                    padding={1}
                    component="img"
                    // src={`../../assets/Nft_Asset/soul_images/${index}.jpg`}
                    // src={`../../`}
                    src={item.status === "on sale" ? item.img : item.img}
                    // src={`https://apricot-advisory-cicada-105.mypinata.cloud/ipfs/QmfZQvPYTrFjfg4ELshkkhrVrHEPA2qV6kDgsWTNQFhanv/${item.id}.jpg`}
                    alt={`${item.name} image`}
                    sx={{
                      width: 310,
                      height: 300,
                      borderRadius: "15px",
                    }}
                  />
                </Box>
                <Stack px={1}>
                  <Stack>
                    {/* <CTypography fontSize={14} fontWeight={200} fontFamily="Oxanium">
                 ID: {item.id}
               </CTypography> */}
                  </Stack>
                  <Stack justifyContent="space-between" direction="row" py={2}>
                    <Stack direction="row" spacing={1}>
                      <CTypography
                        fontSize={14}
                        fontWeight={200}
                        fontFamily="Oxanium">
                        {item.status}
                      </CTypography>
                      <FireIcon />
                    </Stack>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <EthIcon />
                        <CTypography
                          fontSize={14}
                          fontFamily="Oxanium"
                          fontWeight={400}>
                          {item.eth} ETH
                        </CTypography>
                      </Stack>
                      <CTypography
                        fontSize={12}
                        fontFamily="Oxanium"
                        fontWeight={400}>
                        ($ {item.busd}){/* `(0.0539)` */}
                      </CTypography>
                    </Stack>
                  </Stack>

                  {item.status === "Sold" ? (
                    <Link
                      to={`https://testnets.opensea.io/collection/soulclubniftyzone-3`}
                      target="blank">
                      <OutlinedBtn
                        fullWidth
                        btnTitle={"NFT Already Minted!"}
                        btnHeight={"45px"}
                        color={"#fff"}
                        // onClick={() => getURI(index)}

                        // onClick={() => handleMintAndStatus(index, item._id)}
                      />
                    </Link>
                  ) : (
                    <OutlinedBtn
                      fullWidth
                      btnTitle={"Mint now"}
                      btnHeight="45px"
                      // onClick={() => mintToken(index)}
                      // onClick={() => handleStatus(item.id)}
                      onClick={() => handleMintAndStatus(index, item._id)}
                    />
                  )}
                </Stack>
              </>
            </Card>
          ))}
          {/* <ToastContainer /> */}
        </Stack>
      </>
    );
  } else {
    alert("Please install metmask");
  }
}
export default CardSection;
