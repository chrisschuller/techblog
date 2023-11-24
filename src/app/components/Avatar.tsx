import styled from "@emotion/styled";
import { Stylable } from "./shared/types";

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
  return <AvatarContainer size={size} src={imageUrl} />;
}

export default Avatar;
