"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f0c66724-2ede-420f-a013-51f57b68120a");
  }, []);

  return null;
};
