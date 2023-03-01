/*
 *
 * HomePage
 *
 */

import React, {memo, useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
} from "@strapi/design-system";
import { Illo } from "../../components/Illo";
import TodoModal from "../../components/TodoModal";
import { nanoid } from "nanoid";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  console.log("zxctodoData", todoData);
  const addTodo = async (data) => {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  };

  const toggleTodo = async (data) => {
    alert("add toggle");
  };

  const deleteTodo = async (data) => {
    alert("delete");
  };
  const editTodo = async (data) => {
    alert("edit");
  };
  return (
    <Layout>
      <BaseHeaderLayout title="Todo Plugin" subtitle="subtitle" as="h4" />
      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet... "
            action={
              <Button onClick={() => setShowModal(true)}>
                Add yout first todo
              </Button>
            }
          />
        ) : (
          <>
            <TodoCount count={todoData.length} />
            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </Layout>
  );
};

export default memo(HomePage);
