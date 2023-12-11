import React,{useState} from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

import "./todo.css";
const Todo = () => {

    const [inputVal, setInputVal] = useState([]);

    const [inp, setInp] = useState('');

    const addValue = (name) => {
        if (name.length === 0) {
            alert("Please Enter Items");
        } else {
            setInputVal([...inputVal, { name }]);
        }

    }

    const handleCheck = (index) => ({ target: { checked } }) => {
        const mapArr = inputVal.map((item, i) => {
            if (index === i) {
                return { ...item, isCheck: checked }
            } else {
                return item
            }
        })
        setInputVal(mapArr)
    }

    const handleDelete = (i) => {
        const filteredArr = inputVal.filter((item, index) => {
            return i !== index;
        })
        setInputVal(filteredArr);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addValue(inp);
        setInp("")
    }
  return (
    <div className="main-Container">
      <div className="Todo-container">
        <div className="heading-container">
          <h1>Todo List</h1>
        </div>
        <div className="todo-input">
            <input
              value={inp}
              type="text"
              className="forminput"
              placeholder="Add....."
              name="name"
              onChange={({ target: { value } }) => setInp(value)}
            />
            <button  onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
            </button>
        </div>
        <div className="output">
                <ul className="output-ul">
                    {inputVal.map((item, index) => {
                        return <div key={index} className="output-li">
                            <span className="span-name">{item.isCheck ?(<span className="trueCheck">{item.name}</span>):(<span>{item.name}</span>)}</span> 
                            <span className="span-check"> <input value={""} name={item.name} onChange={handleCheck(index)} type="checkbox" /> {item.isCheck ? (<span className="trueCheck"> Uncheck</span>) : (<span>Check</span>)} </span>
                            <span className="span-delete" onClick={() => handleDelete(index)}> <MdOutlineDeleteForever /></span>
                        </div>
                    })}
                </ul>
            </div>
      </div>
    </div>
  );
};

export default Todo;
