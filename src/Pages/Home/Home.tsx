import {Header} from "./Header"
import { GeneratorCats } from "../../Components/GeneratorCats/GeneratorCats"
import "./StyleHome/Style-Home.css"
function Home() {

  return (
    <div className="home">
      <Header/>
      <GeneratorCats/>
    </div>
  )
}

export default Home
