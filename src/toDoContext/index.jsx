import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const [searchValue, setSearchValue] = useState('');
    const {
        item: todos,
        saveItem: saveTodos,
        error,
        loading,
    } = useLocalStorage('TODOS_V1', []);

    const [openModal, setOpenModal] = useState(false);

    // console.log('Input capture: ' + searchValue);

    // ESTADOS DERIVADOS
    const toDosComplete = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchtext = searchValue.toLowerCase();
        return todoText.includes(searchtext);
    })

    // ADD NEW TASK FUNCTION

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    // COMPLETE FUNCTION
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            todo => todo.text === text);
        if (todoIndex !== -1) {
            // Cambiamos el estado de 'completed' del todo al valor opuesto (toggle)
            newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
            // Actualizamos el estado de 'todos' y el localstorage con el nuevo array que contiene el todo actualizado
            saveTodos(newTodos);
        }
    }


    // DELETE FUNCTION
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }


    return (
        <TodoContext.Provider value={{
            error,
            loading,
            toDosComplete,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )


}

export { TodoContext, TodoProvider };