import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../../../action/toDoAction"


function TodoInput ({ addTodo }) {
    const [item, setItem] = useState("");

    const insertInputedItem = e => {
        setItem(e.target.value);
    }

    const addInput = e => {
        e.preventDefault();
        if (item !== "") {
            e.preventDefault();
            // collbackFunction, store.dispatch
            (addTodo(item));

            setItem("")
        }
    }

    return (
        <form onSubmit={addInput} className="form" >
            <input type="text" value={item} onChange={insertInputedItem} />
            <button type="submit"> Add </button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTodo
    },
        dispatch
    )

}

export default connect(null, mapDispatchToProps)(TodoInput);