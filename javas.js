const btn_teste = document.getElementById('btn_teste');
const characterId= document.getElementById('characterId');
const image=document.getElementById('img');
const dados=document.getElementById('dados');


const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        return data;
    }
    );
return result;
}

btn_teste.addEventListener('click',async (event)=>{
    event.preventDefault();
    const result= await fetchApi(characterId.value);
    dados.textContent = JSON.stringify(result,undefined,1);
    image.src = `${result.image}`;

});
