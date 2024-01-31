import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import axiosAPI from "../services/axios";
import Spinner from "../components/spinner/Spinner";

function UserRoutes() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  // };
  useEffect(() => {
    const authCheck = async () => {
      const res = await axiosAPI.get("/auth/userauth", {
        headers: {
          Authorization: auth?.token,
        },
      });
      console.log(res);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
}

export default UserRoutes;
