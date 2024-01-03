const bttn = document.querySelector('#btn'); 
const catUrl = 'https://catfact.ninja/fact'; 

bttn.addEventListener('click', function() {
    
    // pick anyone to use 


    handleFunction(); 
    // handlemeasync(); 
    
}); 

function handleFunction() {
    // when this btn is clicked the we are going to send a request to an api and get data frome the api to 
    // display is the white text box

    // send request in js by using the fetch(); 
   fetch(catUrl)
    .then((response) => response.json())
    .then((res) => { 
        // console.log(res["fact"]);
        const txt = document.querySelector(".txt"); 
        txt.textContent = res["fact"]; 
    })
    .catch((err) => { 
        console.error(err);
    })


}

async function handlemeasync() { 
    // give us the new keyword await that wait for the async funciton to resolve

    const res = await fetch(catUrl, {
        method:"GET",
        headers: { 
            "Content-type":"application/json"
        },
    }); 

    const format = await res.json(); 
    const text = format["fact"]; 
    const txt = document.querySelector(".txt"); 
    txt.textContent = text; 
    // console.log(text);


};