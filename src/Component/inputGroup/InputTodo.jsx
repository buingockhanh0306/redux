import { Button, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import React from "react";

const InputTodo = ({ onChange, onClick, ref }) => {
  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Enter value..."
        color={"#fff"}
        onChange={onChange}
        ref={ref}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={onClick}>
          Add
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputTodo;
