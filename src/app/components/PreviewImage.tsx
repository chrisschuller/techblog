import styled from "@emotion/styled";

interface PreviewImageProps {
  imageUrl: string;
  height?: string;
}

const PreviewImageContainer = styled.div<PreviewImageProps>`
  height: ${({ height }) => (height ? height : "200px")};
  width: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function PreviewImage(props: PreviewImageProps) {
  return <PreviewImageContainer {...props} />;
}

export default PreviewImage;
