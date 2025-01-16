import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="360px" />
      <CardBody height="60px">
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
