import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const List = ({ text, onClick }) => {
  return (
    <Flex
      justify={"space-between"}
      borderRadius={5}
      p={1}
      my={2}
      bgColor={"green.300"}
      alignItems={"center"}
    >
      <Text color={"#fff"}>{text}</Text>
      <Button h="1.75rem" size="sm" onClick={onClick}>
        Delete
      </Button>
    </Flex>
  );
};

export default List;
