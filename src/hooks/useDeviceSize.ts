import { useMediaQuery } from "./useMediaQuery";

export default function useDeviceSize() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isMobile = useMediaQuery("(max-width:767px)");

  return { isDesktop, isMobile };
}
