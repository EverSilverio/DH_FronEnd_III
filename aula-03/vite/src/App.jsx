import "./style.css";

function App() {
   const titulo = "Vite + React"

   const list = [
      {name: 'João',    skill: 'Dev',    birth: '01/05/1999', country: <img src="https://tdn.totvs.com/download/thumbnails/428932849/equ.jpg" />},
      {name: 'Maria',   skill: 'QA',     birth: '10/01/1987', country: <img src="https://tdn.totvs.com/download/thumbnails/189305616/mex.jpg" />},
      {name: 'José',    skill: 'Dev',    birth: '18/06/1981', country: <img src="https://tdn.totvs.com/download/attachments/189305616/bra.jpg" />},
      {name: 'Pedro',   skill: 'Scrum',  birth: '12/12/1978', country: <img src="https://tdn.totvs.com/download/thumbnails/189305616/uru.jpg" />},
      {name: 'Joaquim', skill: 'Lead',   birth: '07/10/1975', country: <img src="https://tdn.totvs.com/download/attachments/189305616/bra.jpg" />}
   ];

   
   
   const rows = list.map((row, index) =>
      <tr key={index}><td>{row.name}</td><td>{row.skill}</td><td>{row.birth}</td><td>{row.country}</td></tr>
   );
     
   return (
      <main>
         <h1 className="title">{titulo}</h1> 
         <table style={{
               borderSpacing: 0
            }}
         >

            <tbody>
               <tr>
                  <th>Name</th>
                  <th>Skill</th>
                  <th>Birth</th>
                  <th>Country</th>
               </tr>
               {rows}
            </tbody>
         </table>
      </main>
   )
}

export default App;
