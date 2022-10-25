function Container(props) {
   
   return (
      <div style={{background:'black', color:'white'}}>
         {props.children}
      </div>
   )
}

export default Container;