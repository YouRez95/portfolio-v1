"use client";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  icon: IconDefinition;
  className: string;
};

const FontAwesomeIconClient = ({ icon, className }: Props) => {
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default FontAwesomeIconClient;
