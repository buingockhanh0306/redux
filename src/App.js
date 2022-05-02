import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { addTodo, deleteTodo } from "./redux/todoSlice";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import List from "./Component/list/List";
import InputTodo from "./Component/inputGroup/InputTodo";

function App() {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const todoLists = useSelector((state) => state.todos);

  const handleClick = () => {
    dispatch(addTodo(text));
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const NhacCuaTui = require("nhaccuatui-api-full");
  NhacCuaTui.getHome().then((data) => console.log(data));

  return (
    <Box
      w={"40%"}
      overflow={"auto"}
      h={"60vh"}
      mx={"auto"}
      my={20}
      p={10}
      border="2px"
      borderColor="green.500"
      bgColor={"green.600"}
      borderRadius={5}
    >
      <InputTodo
        ref={inputRef}
        onClick={() => handleClick()}
        onChange={(e) => setText(e.target.value)}
      />

      {todoLists.map((todo, index) => (
        <List key={index} text={todo} onClick={() => handleDelete(index)} />
      ))}
    </Box>
  );
}

export default App;
