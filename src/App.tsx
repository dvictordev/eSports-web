import './styles/main.css'
import logo from './assets/Logo.svg'
function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center'>
      <img src={logo} alt="" className='my-20'/>

      <h1 className=' text-white text-6xl font-black'>Seu <span className="bg-backgroundGradient text-transparent bg-clip-text">Duo</span> esta aqui!</h1>

    </div>
  );
}

export default App;
