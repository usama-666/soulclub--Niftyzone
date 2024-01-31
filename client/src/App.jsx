import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Landing Page Components
import AppLayout from "./pages/AppLayout";
import Home from "./pages/LandingPage/Home";
import NftDrop from "./pages/LandingPage/NftDrop";

//Global & Auth  Components
import TrendingNFts from "./components/trendingNFts/TrendingNFts";
import Influencers from "./components/influencers/Influencers";

//User Page Components
import UserLayout from "./pages/user/UserLayout";
import Projects from "./pages/user/Project";
import Collection from "./pages/user/Collection";
import Collaboration from "./pages/user/Collaboration";

//User Page Components
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/scenes/dashboard";
import Team from "./pages/Admin/scenes/team";
import AdminCollaborations from "./pages/Admin/scenes/collaboration";
import AdminProjects from "./pages/Admin/scenes/projects/AdminProject";
import AdminUsers from "./pages/Admin/scenes/users/AdminUsers";
import CollabForm from "./pages/Admin/scenes/collabform/index";
import Geography from "./pages/Admin/scenes/geography";
import Line from "./pages/Admin/scenes/line";
import Forgot from "./pages/Auth/Forgot";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import AuctionNFTs from "./pages/user/AuctionNFTs";
import Roadmap from "./components/roadmap/Roadmap";

import { Sugar } from "react-preloaders";
import { useEffect, useState } from "react";

export default function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   return () => {
  //     setLoading(false);
  //   };
  // }, []);
  return (
    <>
      {/* <Sugar
        background={` #140C1F`}
        time={3800}
        customLoading={loading}
        animation="slide-down"
        color={`#911895`}
        size={30}
      /> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/trending" element={<TrendingNFts />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/nftdrop" element={<NftDrop />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/roadmap" element={<Roadmap />} />

            <Route path="/dummy" element={<AuctionNFTs />} />
            <Route path="*" element={<Home />} />
          </Route>
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}
          {/* Protected routes for logged-in users */}

          {/* <Route path="/user" element={<UserRoutes />}> */}
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<Collection />} />
            <Route path="collection" element={<Collection />} />
            {/* <Route path="trending" element={<Trending />} /> */}
            <Route path="projects" element={<Projects />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="influencers" element={<Influencers />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="*" element={<Collection />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="adminusers" element={<AdminUsers />} />
            <Route path="adminprojects" element={<AdminProjects />} />
            <Route
              path="admincollaboartion"
              element={<AdminCollaborations />}
            />
            <Route path="collabform" element={<CollabForm />} />
            <Route path="line" element={<Line />} />

            <Route path="geography" element={<Geography />} />

            <Route path="*" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<AppLayout />} />
        </Routes>
      </Router>
    </>
  );
}
