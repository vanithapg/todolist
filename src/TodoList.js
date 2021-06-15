import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class Todolist extends React.Component {

    constructor (){
        super()
        this.state={
            todos:[]
        }
    }
addTodo=todo=>{
    this.setState({
        todos:[todo,...this.state.todos]
    })
}

render(){
    return(
        <div>
            <TodoForm onSubmit={this.addTodo}/>
            {this.state.todos.map((item) => <Todo key={item.id} text={item.text}></Todo>)}
        </div>
    )
}
}

export default Todolist;