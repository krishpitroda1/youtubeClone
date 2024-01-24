import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const havePadding = isMenuOpen ? "pl-64" : "pl-8";
  return (
    <div className={`flex bg-white w-full fixed -z-10 ${havePadding}`}>
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
    </div>
  );
};

export default ButtonList;
