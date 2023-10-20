import React, { useContext } from 'react'
import TodoCounter from './components/toDoCounter';
import TodoSearch from './components/toDoSearch';
import TodoList from './components/toDoList';
import TodoItem from './components/toDoItem';
import CreateTodoButton from './components/createToDoButton';
import TodoLoading from './components/toDoLoading';
import TodoCounterLoading from './components/toDoCounterLoading';
import Modal from './components/Modal';
import { TodoContext } from './toDoContext';
import './styles.css'
import TodoForm from './components/toDoForm';
import Header from './components/header/Header';

const AppUi = () => {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = useContext(TodoContext);

    return (
        <>
            <Header />
            <div className='main-container'>
                <div className='container-left'>
                    {/* Otra forma de consumir la información del contexto */}
                    {/* <TodoContext.Consumer>
                    {({
                        loading
                    }) => (
                        <div>
                            {loading ? (
                                <TodoCounterLoading />
                            ) : (
                                <TodoCounter
                                // completed={toDosComplete}
                                // total={totalTodos}
                                />
                            )}
                        </div>
                    )}

                </TodoContext.Consumer> */}
                    <div>
                        {loading ? (
                            <TodoCounterLoading />
                        ) : (
                            <TodoCounter />
                        )}
                    </div>

                </div>
                <div className='container-right'>
                    <div className='container-right--searchList'>
                        <TodoSearch>
                        </TodoSearch>
                        {/* Otra forma de consumir la información del contexto */}
                        {/* <TodoContext.Consumer>
                    {({
                        error,
                        loading,
                        searchedTodos,
                        completeTodo,
                        deleteTodo
                    }) => (
                        <TodoList>
                            {loading &&
                                (<div>
                                    <TodoLoading />
                                    <TodoLoading />
                                    <TodoLoading />
                                    <TodoLoading />
                                </div>)}
                            {error && <p>Ups...algo anda mal</p>}
                            {(!loading && searchedTodos.length === 0)
                                && <p>Aún no tenes tareas en tu toDo. Crea tu primer tarea!</p>}
                            {searchedTodos.map(toDo => (
                                <TodoItem
                                    key={toDo.text}
                                    text={toDo.text}
                                    completed={toDo.completed}
                                    onComplete={() => completeTodo(toDo.text)}
                                    onDelete={() => deleteTodo(toDo.text)}
                                />
                            ))}
                        </TodoList>
                    )}
                </TodoContext.Consumer> */}
                        <TodoList>
                            {loading &&
                                (<div>
                                    <TodoLoading />
                                    <TodoLoading />
                                    <TodoLoading />
                                    <TodoLoading />
                                </div>)}
                            {error && <p>Ups...algo anda mal</p>}
                            {(!loading && searchedTodos.length === 0)
                                && <p className='noToDo'>Aún no tenes tareas en tu lista. Crea tu primer tarea!</p>}
                            {searchedTodos.map(toDo => (
                                <TodoItem
                                    key={toDo.text}
                                    text={toDo.text}
                                    completed={toDo.completed}
                                    onComplete={() => completeTodo(toDo.text)}
                                    onDelete={() => deleteTodo(toDo.text)}
                                />
                            ))}
                        </TodoList>
                    </div>
                    <div className='container-right--createButton'>
                        <CreateTodoButton />
                        {openModal && (
                            <Modal>
                                <TodoForm />
                            </Modal>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default AppUi