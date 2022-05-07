import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { completeTodo, removeTodo } from "../../../action/toDoAction"


class TodoList extends Component {
        
render (){
    return (
        <div className="list" >
            {
                this.props.state.map((todo) => {
                    console.log (todo)
                    return (
                        <div  key={todo.id} className = { todo.checked ? "completed" : "not_completed" }>
                            <div className = { todo.checked ? "checked" : "not_checked"} onClick = {() => this.props.completeTodo(todo.id)}> </div>
                                    <p> {todo.todo} </p>
                            <div className="delete_item" onClick = {() => this.props.removeTodo(todo.id)}>X</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        state,
    }
}

const mapDispatchToProps = dispatch => {
    return  bindActionCreators ({
        completeTodo,
        removeTodo,
    }, 
    dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)( TodoList);