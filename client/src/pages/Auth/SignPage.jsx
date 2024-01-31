import { Stack } from "@mui/material";
import { CTypography, OutlinedBtn } from "../../utility";
import SButton from "../../utility/SButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignPage() {
  const navigate = useNavigate();
  const showSignup = () => {
    navigate("/signin");
  };

  const handleProject = () => {
    toast.success("Login to See Project's", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
    });
  };
  return (
    <>
      <Stack spacing={2}>
        <CTypography
          fontSize={{
            lg: "60px",
            xs: "35px",
          }}
          fontWeight={600}
          lineHeight="80px"
          textTransform="uppercase">
          Explore, Mint and Flip NFT's on SOULCLUB
        </CTypography>
        <CTypography
          fontSize={{
            lg: "24px",
            xs: "14px",
          }}
          fontWeight={100}
          fontFamily="Poppins"
          textTransform="capitalize">
          SoulClub is the World’s first and largest <br /> NFT/Avatar Project
        </CTypography>
        <Stack direction={"row"} spacing={2} py={2}>
          <SButton
            btnTitle={"Explore Now"}
            buttonRightStyle={{
              height: 50,
            }}
            buttonLeftStyle={{
              height: 50,
            }}
            onSignup={showSignup}
          />

          <OutlinedBtn
            size="small"
            btnTitle={"project"}
            onClick={handleProject}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default SignPage;
