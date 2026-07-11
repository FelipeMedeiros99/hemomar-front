import { StaticImageData } from "next/image";
import { CImage } from "./CustomImageStyles";

export default function CustomImage({
  src,
  alt,
  ...props
}: {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}) {
  return <CImage src={src} alt={alt} {...props} />;
}
