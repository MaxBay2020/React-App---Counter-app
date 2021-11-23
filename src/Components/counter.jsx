import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react'



const Counter = ({eachCounter, onDelete, onIncrement}) => {

    const getBadgeClasses = () => {
        let classes = 'badge m-2 p-2 badge-'
        classes += eachCounter.value === 0 ? 'warning' : 'primary'
        return classes;
    }

    const formatCount=()=>{
        return eachCounter.value===0?'Zero':eachCounter.value
    }
    let classes = getBadgeClasses();



    return (
        <div>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button onClick={()=>{onIncrement(eachCounter)}} className='btn btn-secondary btn-sm'>+</button>
            <button onClick={()=>{onDelete(eachCounter.id)}} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
    );
};

export default Counter;
