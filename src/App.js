import {useState} from 'react'
import './App.css';
import Counters from './Components/counters'
import NavBar from './Components/navBar'

function App() {
  const [counters, setCounters]=useState([
    {id:1, value:2},
    {id:2, value:4},
    {id:3, value:3},
    {id:4, value:0},
  ])

  const handleDelete=(counterId)=>{
    const newCounters=counters.filter((eachCounter) => (eachCounter.id !== counterId))
    setCounters(newCounters)
  }

  const handleReset = ()=>{
    const newCounters=counters.map((eachCounter) => {
      eachCounter.value=0
      return eachCounter
    })
    setCounters(newCounters)
  }

  const handleIncrement =(counter)=>{
    const newCounters=[...counters]
    const index=newCounters.indexOf(counter)
    newCounters[index].value++
    setCounters(newCounters)
  }

  return (
    <>
      <NavBar totalCounters={counters.filter((eachCounter) => (eachCounter.value>0)).length}/>
      <main className="container">
        <Counters
            onReset={handleReset}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            counters={counters}
        />
      </main>
    </>
  );
}

export default App;
