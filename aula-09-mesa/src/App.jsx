import "./styles.css";
import { useState } from 'react';

function App() {
   const [form, setForm] = useState({ disciplina: '', nota: 0 });
   const [error, setError] = useState('');

   const [alunos, setAlunos] = useState({
      database: { notas: [], media: 0 },
      backend: { notas: [], media: 0 },
      frontend: { notas: [], media: 0 }
   });

   function handleSubmit(e) {
      e.preventDefault();
      setError('')

      if (form.disciplina !== 'database' && form.disciplina !== 'backend' && form.disciplina !== 'frontend') {
         setError('Disciplina selecionada não é válida')
         return;
      }

      if ((form.nota < 0 || form.nota > 10) || form.nota == "") {
         setError('Informe uma nota válida')
         return;
      }

      const aux = { ...alunos }

      aux[form.disciplina].notas.push(form.nota);
      const total = aux[form.disciplina].notas.reduce((acc, val) => parseInt(acc) + parseInt(val));
      aux[form.disciplina].media = total / aux[form.disciplina].notas.length;

      console.log(total, aux[form.disciplina].notas.length)

      setAlunos(aux)

      setForm({...form, nota:0})

   }

   function onChangeDisciplina(e) {
      setError('')

      console.log(e.target.value)

      if (e.target.value !== 'database' && e.target.value !== 'backend' && e.target.value !== 'frontend') {
         setError('Disciplina selecionada não é válida')
         return;
      }
      setForm({ ...form, disciplina: e.target.value })
   }

   return (
      <div className="container">
         <h1>Média de Alunos por Disciplina</h1>
         <form className="form" onSubmit={handleSubmit}>
            <div className="container_input">
               <select value={form.disciplina} onChange={onChangeDisciplina}>
                  <option disabled >
                     Selecione uma disciplina
                  </option>
                  <option value="database">Banco de Dados</option>
                  <option value="backend">Desenvolvimento Backend</option>
                  <option value="frontend">Desenvolvimento Frontend</option>
                  <option value="devops">Devops</option>
               </select>
               <input value={form.nota} type="number" required onChange={e => setForm({ ...form, nota: e.target.value })} placeholder="Informe a nota do aluno" />

            </div>
            <input id="btn" type="submit" value="Salvar" disabled={form.disciplina == 'devops'} />



         </form>

         <span>{error}</span>

         <div className="container">
            <table border="1" className="line_title">
               <thead>
                  <tr>
                     <th>Disciplina</th>
                     <th>Quantidade de Alunos</th>
                     <th>Média das notas dos alunos</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Banco de Dados</td>
                     <td>{alunos.database.notas.length}</td>
                     <td>{alunos.database.media}</td>
                  </tr>

                  <tr>
                     <td>Desenvolvimento Frontend</td>
                     <td>{alunos.frontend.notas.length}</td>
                     <td>{alunos.frontend.media}</td>
                  </tr>

                  <tr>
                     <td>Desenolvimento Backend</td>
                     <td>{alunos.backend.notas.length}</td>
                     <td>{alunos.backend.media}</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <code>{JSON.stringify(alunos)}</code>

      </div>
   );
}

export default App;


/*
Luiz Espicalsky
Vanessa Fernandes
Caroline Machado
Cristian fernandes
felipe lopes
Everton Silverio
*/