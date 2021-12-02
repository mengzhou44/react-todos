import axios from 'axios'
import {useEffect, useState} from 'react'

import styled from 'styled-components'

const Box = styled.div`
     margin: 0 auto;
     font-size: 20px;
     border: 1px solid red;
     padding: 20px;

     .todo:not(:last-child) {
         margin-top: 10px;
     }
`

export default function  App() {
     const [todos, setTodos] = useState([])

     useEffect(()=> {
        const fetchTodos = async ()=> {
            const res = await  axios.get('https://jsonplaceholder.typicode.com/todos')
            setTodos(res.data)
        }
        fetchTodos()
     }, [])

    return <Box>
       {todos.map(item=>
           <div className='todo' key={item.id}>
               {item.title}
           </div>
       )}
    </Box>
}