import "./App.css";
import { MapPin, Calendar, ArrowRight } from 'lucide-react'

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>
        <div className="py-4 space-y-5 sm:py-0 sm:space-y-0 sm:h-16 sm:flex  bg-zinc-900 px-4 rounded-xl items-center shadow-shape gap-5  ">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400"/>
            <input
              type="text"
              placeholder="Para onde você vai ?"
              className="bg-transparent text-lg placeholder-zinc-400 w-full"
            />
          </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input
                type="text"
                placeholder="Quando?"
                className="border-r-0 bg-transparent text-lg placeholder-zinc-400 sm:border-r-2 border-zinc-800 max-w-24 "
              />
            </div>
            <button
            className="bg-lime-300 text-lime-950 px-5 py-2 font-medium rounded-lg flex gap-2 items-center hover:bg-lime-400 w-full justify-center sm:w-fit">
                Continuar <ArrowRight className='size-5'/>
            </button>
        </div>
        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade.
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
