import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { CTypography, OutlinedBtn } from "../../utility";
import FireIcon from "../../assets/svg/FireIcon";
import EthIcon from "../../assets/svg/EthIcon";

import { ethers } from "ethers";
import SoulClub from "../../artifacts/contracts/SoulClubNiftyzone.sol/SoulClubNiftyzone.json";

// const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, SoulClub.abi, signer);

export default function NFTimage({
  background,
  borderWidth,
  borderRadius,
  borderColor,
  backdropFilter,
  noHover,
  tokenId,
  getCount,
  item,
  ...rest
}) {
  //const contentId = "PINATA_CONTENT_ID";
  const contentId = "QmNqCdsTuykipyk9rnnaizAmg2FKtGJmCBD4aWw9kNyvku";

  const metadataURI = `${contentId}/${tokenId}.json`;
  // const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

  const [isMinted, setIsMinted] = useState(false);
  const [status, setStatus] = useState(item);
  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result);
    setIsMinted(result);
  };

  const mintToken = async () => {
    const connection = contract.connect(signer);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther("200"),
    });

    await result.wait();
    // setStatus((prevState) => item.map({ ...prevState, status: "Sold" }));
    getMintedStatus();
    getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    alert(uri);
  }

  return (
    <Box
      sx={{
        background:
          background ||
          "linear-gradient(160.61deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 101.7%);",
        borderWidth: borderWidth || "2.5px 0px",
        borderStyle: "solid",
        borderColor: borderColor || "rgba(255, 255, 255, 0.4)",
        backdropFilter: backdropFilter || "blur(17.915px)",
        borderRadius: borderRadius || "41.6667px",
        width: "fit-content",
        ...(!noHover && {
          "&:hover": {
            background:
              "linear-gradient(160.61deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 101.7%);",
            borderColor: "rgba(255, 255, 255, 0.6)",
          },
        }),
      }}
      {...rest}>
      <>
        <Box
          sx={{
            position: "relative",
          }}>
          <Box
            component="img"
            // src={`../../assets/Nft_Asset/soul_images/${index}.jpg`}
            // src={item.status === "on sale" ? item.img : item.img}
            src={`https://apricot-advisory-cicada-105.mypinata.cloud/ipfs/QmNqCdsTuykipyk9rnnaizAmg2FKtGJmCBD4aWw9kNyvku/${item.id}.jpg`}
            alt={`${item.name} image`}
            sx={{
              width: 310,
              height: 300,
              borderRadius: "15px",
            }}
          />
        </Box>
        <Stack px={1}>
          <Stack py={1}>
            {/* <CTypography fontSize={14} fontWeight={200} fontFamily="Oxanium">
              ID: {item.id}
            </CTypography> */}
          </Stack>
          <Stack justifyContent="space-between" direction="row" py={2}>
            <Stack direction="row" spacing={1}>
              <CTypography fontSize={14} fontWeight={200} fontFamily="Oxanium">
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
              <CTypography fontSize={12} fontFamily="Oxanium" fontWeight={400}>
                ($ {item.busd})
              </CTypography>
            </Stack>
          </Stack>
          {isMinted ? (
            <OutlinedBtn
              fullWidth
              btnTitle={"Already Minted"}
              btnHeight={"45px"}
              color={"#fff"}
              onClick={getURI}
            />
          ) : (
            <OutlinedBtn
              fullWidth
              btnTitle={"Mint now"}
              btnHeight="45px"
              onClick={mintToken}
            />
          )}
        </Stack>
      </>
    </Box>
  );
}
