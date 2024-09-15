import Todocontainer from "@/components/Todo/Todocontainer";
import Container from "@/components/ui/Container";
import React from "react";

const Todo = () => {
  return (
    <Container>
      <h2 className="text-center font-semibold text-3xl my-10">My Todo</h2>
      <Todocontainer />
    </Container>
  );
};

export default Todo;
