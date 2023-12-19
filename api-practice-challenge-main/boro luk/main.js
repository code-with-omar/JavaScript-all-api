const loadAiUniverse = () => {
    fetch(' https://openapi.programming-hero.com/api/ai/tools')
        .then(response => response.json())
        .then(data => aiiUniverseData(data.data.tools));
}

const aiiUniverseData = (datum) => {
    const mainContainer = document.getElementById('main-container');
    for (let data of datum) {

        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
            <img src="${data.image ? data.image : 'image not found'}" class="card-img-top" alt="Image not Found">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">1 : ${data.features[0]}</p>
                <p class="card-text">2 : ${data.features[1]}</p>
                <p class="card-text">3 : ${data.features[2]}</p>
            </div>
            <div class="card-footer d-flex">
            <div class="flex-grow-1">
                <h6 class="my-3">${data.name}</h6>
                <h6>&#128197; ${data.published_in
            }</h6>
            </div>
            <div class="">
                <button onclick="showDetails('${data.id}')" style="font-size: 20px;" class="btn btn-danger opacity-75 rounded-5 fw-bolder text-center" data-bs-toggle="modal" data-bs-target="#modalId">&#8594</button>
            </div>
        </div>
        </div> 
        `
        mainContainer.appendChild(div)
    }
}
const showDetails = (id) => {
    // console.log(id);
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(data => dataShows(data.data))

}
const dataShows = (datum) => {
    console.log(datum.integrations[2])
    const showDetailsContiner = document.getElementById('showDetails');
    showDetailsContiner.innerHTML = ''
    const div = document.createElement('div');
    div.classList.add("modal-content");
    div.innerHTML = `
    <div class="modal-body container">
    <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col ">
                <div class="card border-dark border p-5 bg-danger bg-opacity-25 text-black text-opacity-100 ">

                    <div class="card-body">
                        <h4 class="card-title mb-2">${datum.description}</h4>
                        <div class="d-flex w-100 my-5">
                            <div class="bg-white me-5 rounded p-3 text-center">
                                10$ month basic
                            </div>
                            <div class="bg-white me-5 rounded p-3 text-center">
                                10$ month basic
                            </div>
                            <div class="bg-white rounded p-3 text-center">
                                10$ month basic
                            </div>
                            
                        </div>
                        <div class="d-flex">
                            <div>
                                Features
                                <ul>
                                    <li>${datum.features[1].feature_name}</li>
                                    <li>${datum.features[2].feature_name}</li>
                                    <li>${datum.features[3].feature_name}</li>
                                   
                                </ul>
                            </div>
                            <div>
                                Integrations
                                <ul>
                                    
                                    <li>${datum.integrations[0]}</li>
                                    <li>${datum.integrations[1]}</li>
                                    <li>${datum.integrations[2]}</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit
                            longer.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>
    `
    showDetailsContiner.appendChild(div)
}
loadAiUniverse();