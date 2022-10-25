import Button from './Button';
import Title from './Title';

function App() {

   function funBtn1() {
      alert('BTN 1');
   }

   function funBtn2() {
      alert('BTN 2');
   }

   function funBtn3() {
      alert('BTN 3');
   }


   return (
      <>
         <Title text="Título 1"></Title>
         <Title text="Título 2"></Title>
         <Title></Title>

         <Button name="Pressione" color="red" click={funBtn1}></Button>
         <Button name="Clique Aqui" color="blue" click={funBtn2}></Button>
         <Button name="Clique" color="green" click={funBtn3}></Button>
      </>

   )

}

export default App;

