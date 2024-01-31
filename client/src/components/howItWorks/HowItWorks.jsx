import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import AddIcon from "../../assets/svg/AddIcon";
import CollectionIcon from "../../assets/svg/CollectionIcon";
import SealsIcon from "../../assets/svg/SealsIcon";
import WalletIcon from "../../assets/svg/WalletIcon";
import dotLineImg1 from "../../assets/images/dotLine1.png";
import dotLineImg2 from "../../assets/images/dotLine2.png";
import dotLineImg3 from "../../assets/images/dotLine3.png";

import { CCard, CTypography } from "../../utility";
const icons = [
  {
    id: 1,
    icon: <WalletIcon />,
    name: "Set up your wallet",
    dontLine: dotLineImg1,
  },
  {
    id: 2,
    icon: <CollectionIcon />,
    name: "Explore our collection",
    dontLine: dotLineImg2,
  },
  {
    id: 3,
    icon: <AddIcon />,
    name: "Mint NFTs",
    dontLine: dotLineImg3,
  },
  {
    id: 4,
    icon: <SealsIcon />,
    name: "List them for sale on OpenSea",
  },
];
export default function HowItWorks() {
  return (
    <Stack
      gap={4}
      py={{
        sm: 10,
        xs: 0,
      }}>
      <CTypography
        fontWeight={700}
        fontFamily="Oxanium"
        textTransform="capitalize"
        align="center"
        color={"#F5FBF2"}
        fontSize={{
          lg: 64,
          md: 50,
          xs: 45,
        }}>
        How it works
      </CTypography>
      <Stack
        direction="row"
        gap={2}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap">
        {icons.map((icon) => (
          <Stack key={icon.id} alignItems="center" gap={2} direction="row">
            <Stack alignItems="center" gap={2}>
              <CCard borderWidth={"0"} p={3} borderRadius={50}>
                {icon.icon}
              </CCard>
              <CTypography fontSize={18} fontWeight={600} textAlign="center">
                {icon.name}
              </CTypography>
            </Stack>
            <Box
              component="img"
              src={icon?.dontLine}
              display={{
                xs: "none",
                lg: "block",
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
