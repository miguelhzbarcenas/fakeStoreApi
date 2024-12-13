const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const url = "https://fakestoreapi.com/products/";

function getData() {
  fetch(url)
    .then((response) => {
      response.json().then((res) => {
        /* divProductos.innerHTML = `
        <strong>Titulo:</strong> ${res[5].title}
        <br/>
        <strong>Descripción:</strong> ${res[5].description}
        <br/>
        <strong>Precio:</strong> $${res[5].price}`; */
        res.forEach((element) => {
          createCard(element.image, element.title, element.description, element.price, element.category, element.id);
        });
      });
    })
    .catch((error) => {
      console.log("Problemas al consultar la url");
      alertError.innerHTML = `Error`;
      alertError.style.display = "block";
    });
}

getData();

function createCard(srcImg, title, description, price,category,id) {
  divProductos.insertAdjacentHTML(
    "beforeend",
    
    /* <div class="card" style="width: 18rem;">
      <div style="height:300px; align-content: center">
        <img src="${srcImg}" class="card-img-top" style="max-height:300px">
      </div>
      
      <div class="card-body">

        <h5 class="card-title">${title}</h5>
        <h6>${category}</h6>
        <p class="card-text text-truncate">${description}</p>
        <h6>$ ${price} USD</h6>

        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">
          Más Info.
        </button> */
`
        <div class="card" style="width: 18rem; display: flex; flex-direction: column;">
          <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <img src="${srcImg}" class="card-img-top" style="max-height: 300px;">
          </div>
          
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${title}</h5>
            <h6>${category}</h6>
            <p class="card-text text-truncate">${description}</p>

            <!-- Contenedor inferior -->
            <div class="mt-auto">
              <h6>$ ${price} USD</h6>
              <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">
                Más Info.
              </button>
            </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${title}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">${description}</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>`
  );
}
