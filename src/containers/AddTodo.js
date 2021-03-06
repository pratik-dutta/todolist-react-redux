import React from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../actions"

const AddTodo = ({dispatch}) => {
    let input;

    return(
        <div>
            <form
                onSubmit = {
                    e=>{
                        e.preventDefault();
                        if(!input.value.trim()){
                            return;
                        }
                        dispatch(addTodo(input.value));
                        input.value="";
                    }
                }
                
            >
                <input className="field" type="text" ref={el => (input = el)}></input>
                <button type="submit" className="submit">Add Task</button>
            </form>
        </div>
    );
}
export default connect()(AddTodo);