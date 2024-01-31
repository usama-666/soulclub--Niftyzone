import { Stack } from "@mui/system";
import NftDrop from "./NftDrop";
import Hero from "./Hero";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import TrendingNFts from "../../components/trendingNFts/TrendingNFts";
import Roadmap from "../../components/roadmap/Roadmap";

export default function Home() {
  return (
    <Stack gap={10}>
      <Hero />
      <HowItWorks />
      <TrendingNFts />
      <Roadmap />
      <NftDrop />
      {/* <Footer /> */}
    </Stack>
  );
}
