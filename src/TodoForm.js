import React from 'react'
import shortid from 'shortid'

class TodoForm extends React.Component{

constructor(props){
    super(props)
    this.state={
        todo:""
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
}

handleChange(event){
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit({
        id:shortid.generate(),
        text:this.state.todo,
        completed:false
    })

    this.setState({
        todo:""
    })
}

render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type = "text" name ="todo" placeholder="Add your todo" onChange={this.handleChange}/>
                <input type = "submit" name = "Add"/>
            </form>
        </div>
    )
}

}

export default TodoForm