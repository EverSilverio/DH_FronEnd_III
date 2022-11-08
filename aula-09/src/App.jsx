import { useState } from "react";

const App = () => {
   /*
   const [nome, setNome] = useState('');
   const [funcao, setFuncao] = useState('');
   */

   const [form, setForm] = useState({nome: '', funcao: ''})

   function onSubmit(e) {
      e.preventDefault()
      //setNome("")
   }

   return (
      <div>
         <h1>Formulário</h1>
         <form onSubmit={onSubmit}>
            <input value={form.nome} onChange={event => setForm({ ...form, nome:event.target.value })} />

            <select value={form.funcao} onChange={e => setForm({ ...form, funcao:e.target.value})}>
               <option value="front">FrontEnd</option>
               <option value="back">BackEnd</option>
               <option value="ux-ui">UX/UI</option>
            </select>

            <input type="submit" />
         </form>

         {form.nome ? <span>{form.nome} prefere {form.funcao}</span> : ''}

         
      </div>
   )

}
export default App
