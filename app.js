let control = document.querySelector(".control");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let title = document.querySelector(".title");
let desc = document.querySelector(".desc");
let img2 = document.querySelector(".img2");
let price = document.querySelector(".price");

async function getData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        control.innerHTML += Card(data[i].id, data[i].title, data[i].image);
    }

    control.addEventListener("click", (e) => {
        if (e.target.classList.contains("open")) {
            const id = e.target.dataset.id;
            console.log(id);
            const targetData = data.find((item) => item.id == id);
            title.textContent = targetData.title;
            desc.textContent = targetData.description;
            img2.setAttribute("src", targetData.image);
            price.textContent = targetData.price + "$";
            modal.classList.add("active");
            console.log(targetData);
        }
    });
}

close.addEventListener("click", function() {
    modal.classList.remove("active");
});
getData();



function Card(id, title, url) {
    return `
      <div class="card">
            <img src="${url}" alt="" class="img">
            <p class="title">${title}</p>
            <button class="open" data-id="${id}">OPEN</button>
        </div>
        `;
}