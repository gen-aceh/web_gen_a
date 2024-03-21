"use client"

import { ArrowBigLeft } from "lucide-react";
import { Button } from "./ui/button";

const ButtonBack = () => {
  return (
    <Button onClick={() => window.history.back()}>
      <ArrowBigLeft className="md:mr-2" />{" "}
      <span className="hidden md:block">Kembali</span>
    </Button>
  );
};

export default ButtonBack;
