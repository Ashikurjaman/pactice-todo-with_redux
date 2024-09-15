import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import AddFiltaring from "./AddFiltaring";
import { useAppSelector } from "@/Redux/Hook";

const Todocontainer = () => {
  const { todo } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="mb-5 flex justify-between">
        <AddTodoModal />
        <AddFiltaring />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {/* <div className="bg-slate-600 flex justify-center items-center p-3">
          <p>This is no Task</p>
        </div> */}
        <div className="bg-white space-y-5 w-full h-full rounded-lg p-5">
          {todo.map((item) => (
            <TodoCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todocontainer;
