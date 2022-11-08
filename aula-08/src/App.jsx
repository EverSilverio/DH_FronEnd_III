import { useRef, useState } from "react";

const App = () => {
   const inputRef = useRef(null)
   const [valueInput, setValueInput] = useState("")
   const [isChecked, setIsChecked] = useState(false)

   function handleSubmit(event) {
      event.preventDefault()
      setValueInput(inputRef.current.value)
   }

   return (
      <div style={isChecked ? {backgroundColor: 'navy', color: 'white'} : {}}>
         <h1>{isChecked.toString()}</h1>
         <form onSubmit={handleSubmit}>
            <input ref={inputRef} />

            <input type="submit"/>

            <input type="checkbox" onChange={event => setIsChecked(event.target.checked)}/>
         </form>
         <span>{valueInput}</span>

      </div>
   )
}

export default App