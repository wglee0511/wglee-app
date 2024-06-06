import Image from "next/image";
import React from "react";
import { IconProps } from "./type";
import { COLORS } from "@/style/colors";
import * as Icons from "./icons";

const Icon = ({ icon, size, color = COLORS.gray300 }: IconProps) => {
  const IconImage = Icons[icon];

  return <IconImage fill={color} width={size} height={size} />;
};

export default Icon;
