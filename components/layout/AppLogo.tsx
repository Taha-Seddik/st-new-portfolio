"use client";

import { useIsUpMd } from "@/utils/responsive.utils";

export const AppLogo: React.FC<{}> = ({}) => {
  const isOnMd = useIsUpMd();
  if (!isOnMd) return null;
  return <img src="/mix/tahaLogo.png" alt="logo" width={30} height={30} />;
};
