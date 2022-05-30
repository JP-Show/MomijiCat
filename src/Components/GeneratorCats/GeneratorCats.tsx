type Test = {
  url: string
}
import "./Style-GeneratorCats.css"
import { Api } from "../../providers"

import { useState } from "react";


export function GeneratorCats () {
  const [useApi, setUseApi] = useState([]);



  function gerarCat ():Object {
      return Api.get("")
      .then(
        ({ data }) => {
          setUseApi(data);
        }
      )
      .catch(() => {
        console.log("não deu certo fudeu");
      });
  }

  
  return (
    <>
      {useApi.map((item:Test, key) => {
        return (
          <img id="imageCat" key={key}src={item.url}/>
        )

      })}
      <button onClick={gerarCat}>gerar</button>
    </>

  )


}