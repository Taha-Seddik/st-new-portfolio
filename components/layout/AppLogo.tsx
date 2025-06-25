"use client";

import { useIsUpMd } from "@/utils/responsive.utils";
import { withBasePath } from "@/utils/withBasePath";

export const AppLogo: React.FC<{}> = ({}) => {
  const isOnMd = useIsUpMd();
  if (!isOnMd) return null;
  return <img src={withBasePath("/mix/tahaLogo.png")} alt="logo" width={30} height={30} />;
};
