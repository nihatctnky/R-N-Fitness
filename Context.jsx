
import React,{createContext,useState}from "react"

const FıtnessItem= createContext()

const FıtnessContext=({children}) => {
    const [completed,setCompleted]=useState([])
    const [workout,setWorkout]=useState(0)
    const [calories,setCalories]=useState(0)
    const [minutes,setMinutes]=useState(0)
    return(
        <FıtnessItem.Provider value={{completed,setCompleted,workout,setWorkout,calories,setCalories,minutes,setMinutes}}>
            {children}
            </FıtnessItem.Provider>
    )
}
export{FıtnessContext,FıtnessItem}