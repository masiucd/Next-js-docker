import {Flex, Skeleton} from "@radix-ui/themes";

export default function ProfileLoading() {
  return (
    <Flex direction="column" gap="3" className="mx-auto">
      <Skeleton width="200px" height="40px" />
      <Skeleton width="300px" height="40px" />
      <Skeleton width="520px" height="40px" />
      <Skeleton width="250px" height="40px" />
      <Skeleton width="210px" height="40px" />
      <Skeleton width="650px" height="40px" />
      <Skeleton width="250px" height="40px" />
      <Skeleton width="200px" height="40px" />
      <Skeleton width="120px" height="40px" />
      <Skeleton width="370px" height="40px" />
    </Flex>
  );
}
