import {useState} from 'react'
import Counter from './counter'

const Counters = ({onReset, onIncrement, onDelete,counters}) => {




    return (
        <>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map((eachCounter) =>
                <Counter
                    onDelete={onDelete}
                    key={eachCounter.id}
                    eachCounter={eachCounter}
                    onIncrement={onIncrement}
                    counter={eachCounter}
                />
            )}
        </>
    );
};

export default Counters;
