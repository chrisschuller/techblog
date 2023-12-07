import styled from "@emotion/styled";
import Stylable from "../types/Stylable";
import Image from "next/image";

const AvatarContainer = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

interface AvatarProps extends Stylable {
  size: string;
  imageUrl: string;
}

function Avatar({ size = "40px", imageUrl }: AvatarProps) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
      }}
    >
      <Image
        alt={imageUrl}
        src={imageUrl}
        fill
        sizes="(min-width: 600px) 15vw, 25vw"
        loading="eager"
        style={{
          objectFit: "cover", // cover, contain, none
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default Avatar;
