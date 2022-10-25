function Button(props) {
   
   console.log(props);

   function handleClick(params) {
      alert('ok')
   }
   
   return (
      <button onClick={props.click} style={{color:props.color, marginRight:"10px"}}>
         {props.name}
      </button>
   )
}

export default Button;