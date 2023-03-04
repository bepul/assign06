const fetchAiHubs = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then((res) => res.json())
    .then(data => showAiHubs(data.data));
}

const showAiHubs = data =>{
    console.log(data);

    const cardContainer = document.getElementById('card-containers');
    data.tools.forEach(singleAiCard=>{
        // console.log(singleAiCard);
       
        
        cardContainer.innerHTML += `
        <div class="border border-light rounded col-sm-4 p-3 m-0">
            <img src="${singleAiCard?.image}"
                class="img-fluid rounded">
            <p><b>Features</b></p>
            <p>1. ${singleAiCard?.features[0]}</p>
            <p>2. ${singleAiCard?.features[1]}</p>
            <p>3. ${singleAiCard?.features[2]}</p>
            <hr>

            <div class="row">
              <div class="col-sm-10">
                <p><b>${singleAiCard?.name}</b></p>
                <p><i class="fa fa-calendar" aria-hidden="true"></i>${singleAiCard?.published_in}</p>
              </div>
              <div class="col-sm-2 text-center">
                <a href="#" onclick="fetchModalData('${singleAiCard.id}')">
                <i class="fa fa-arrow-circle-right" aria-hidden="true"
                 data-bs-toggle="modal" data-bs-target="#exampleModal"></i></a>
              </div>
            </div> 
          
        </div>
        `        


        // const cardbox = document.createElement('p');
        // cardbox.innerHTML = `
        // <div class="border border-light rounded col-sm-4 p-3 m-0">
        //     <img src="${singleAiCard.image}"
        //         class="img-fluid rounded">
        //     <p><b>Features</b></p>
        //     <p>1. ${singleAiCard.features[0]}</p>
        //     <p>2. ${singleAiCard.features[1]}</p>
        //     <p>3. ${singleAiCard.features[2]}</p>
        //     <hr>
        //     <p><b>${singleAiCard.name}</b></p>
        //     <p><i class="fa fa-calendar" aria-hidden="true"></i>${singleAiCard.published_in}</p>    
        // </div>
        // `;
        // cardContainer.appendChild(cardbox);


    })
}


const fetchModalData = (id, name) =>{
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      fetchData = data.data;
      showAllInfo(data.data, name)
    });
} 

const showAllInfo = (data, name) =>{
  console.log(data, name);
  document.getElementById("").innerText = name;
  const aiModalContainer = document.getElementById("all-modal-info");
  aiModalContainer.innerHTML = "";
  data.forEach((singleInfo) => {
    const {id, name} = singleInfo;

  });
    

}