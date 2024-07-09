import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react";







const List=()=>{


    const [todos, setTodos] = useState([])

    function addToDo(event) {
        event.preventDefault()  
        const task = event.target.task.value
        setTodos([...todos, task])
        event.target.reset()
    }

    function deleteBtn(index){
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
}

    function editeBtn(index){
        const newWord=window.prompt()
        todos[index]=newWord
        setTodos([...todos]);
        
    }

  return (  
    
    <div>

        <form className="d-flex" onSubmit={addToDo}>
            <input className="form-control me-2" placeholder="New Task" name="task" />
            <button className="btn btn-outline-light" type="submit">Add</button>
        </form>

        
        <ListGroup className="justify-content-center">
        {todos.map((todo, index) => {
            return (
                <div key={index} className="rounded mt-4 p-2 d-flex">
                    <div className="me-auto">{todo}</div>
                    <Button variant="danger" onClick={()=>{deleteBtn(index)}}>X</Button>
                    <Button variant="info" className='mx-3' onClick={()=>{editeBtn(index)}}>Edite</Button>

                </div>
                
            )
        })}

    </ListGroup>
        
    </div>
    

  );

}
  
  export default List;
  