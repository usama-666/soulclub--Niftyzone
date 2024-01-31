import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
function Spinner({ path }) {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  // const location = useLocation();
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prev) => --prev);
    }, 1000);

    if (count === 0) {
      navigate(`/${path}`);
      setAuth({ ...auth, user: null, token: "" });
      localStorage.removeItem("auth");
    }

    return () => clearInterval(interval);
  }, [count, navigate, path, auth, setAuth]);

  return (
    <>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100vh"}>
        <Box>
          <CircularProgress />
        </Box>
      </Box>
    </>
  );
}

export default Spinner;
