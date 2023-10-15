import { useEffect, useState } from 'react'
// import { BsLightbulbOff } from 'react-icons/bs';

const useLocalStorage = (itemKey, initalValue) => {

  const [item, setItem] = useState(initalValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemKey);
        let parseItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemKey, JSON.stringify(initalValue));
          parseItem = initalValue;
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        };
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }, 1000);
  }, []);


  //SAVE FUNCTION

  const saveItem = (newItem) => {
    localStorage.setItem(itemKey, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    error,
    loading,
  }

}

export default useLocalStorage

// const defaultToDos = [
//   {
//     text: 'Hacer tarea react',
//     completed: true,
//   },
//   {
//     text: 'Jugar al futbol',
//     completed: false,
//   },
//   {
//     text: 'Ver Netflix',
//     completed: true,
//   },
//   {
//     text: 'Tocar la guitarra',
//     completed: false,
//   },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));
//localStorage.removeItem('TODOS_V1');
