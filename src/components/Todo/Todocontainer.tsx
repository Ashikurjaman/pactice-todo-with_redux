import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import AddFiltaring from "./AddFiltaring";
import { useGetTodosQuery } from "@/Redux/Api/api";
import { useState } from "react";

const Todocontainer = () => {
  const [priority, setPriority] = useState("");
  console.log(priority);
  // const { todo } = useAppSelector((state) => state.todos);
  const { data, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <AddTodoModal />
        <AddFiltaring priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {/* <div className="bg-slate-600 flex justify-center items-center p-3">
          <p>This is no Task</p>
        </div> */}
        <div className="bg-white space-y-5 w-full h-full rounded-lg p-5">
          {data?.data?.map((item) => (
            <TodoCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todocontainer;
