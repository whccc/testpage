import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function useUser() {
  const router = useRouter();
  const [Json, SetJson] = useState(null);
  useEffect(() => {
    SetJson(JSON.parse(localStorage.getItem("JsonUser")));
  }, []);
  const SetJsonData = (objData) => {
    localStorage.setItem("JsonUser", JSON.stringify(objData));
    router.push("/");
  };
  const DeleteJsonData = () => {
    localStorage.removeItem("JsonUser");
    router.push("/Login");
  };
  const NavigationLogin = () => {
    router.push("/Login");
  };
  const ValidateLogin = () => {
    return JSON.parse(localStorage.getItem("JsonUser")) != undefined;
  };
  const NavigationIndex = () => {
    router.push("/");
  };
  return {
    Json,
    ValidateLogin,
    SetJsonData,
    DeleteJsonData,
    NavigationLogin,
    NavigationIndex,
  };
}
