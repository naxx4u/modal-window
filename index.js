let fruits = [
  {
    id: 1,
    title: "Яблука",
    price: 20,
    img: "http://molbuk.ua/uploads/posts/2015-11/1446994035_04_apples.jpg",
  },
  {
    id: 2,
    title: "Апельсини",
    price: 30,
    img: "https://static3.depositphotos.com/1000975/268/i/600/depositphotos_2685431-stock-photo-two-oranges-isolated-on-the.jpg",
  },
  {
    id: 3,
    title: "Манго",
    price: 40,
    img: "https://thumbs.dreamstime.com/b/e-r-150398513.jpg",
  },
];

const toHTML = (fruit) => `
<div class="col d-flex gap-3 ">
<div class="card d-flex justify-content-center align-items-center text-center" style="height: 250px; width: 300px;" >
    <img src="${fruit.img}" class="card-img-top p-2" style="height: 200px; width: 200px;" >
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Ціна, кг</a>
      <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Видалити</a>

    </div>
  </div>
</div>
`;

function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}
render();

const priceModal = $.modal({
  title: "Ціна на товар",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Закрити",
      type: "primary",
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id
  const fruit = fruits.find(f => f.id === id)

  if (btnType === "price") {
    priceModal.setContent(`
    <p>Ціна на ${fruit.title}: <strong>${fruit.price}$/кг</strong></p>
    `)
    priceModal.open();
  } else if(btnType === 'remove'){


    $.confirm({
        title: 'Ви впевненні?',
        content: `<p>Ви видаляєт: <strong>${fruit.title}</strong></p>`
    }).then(() => {
        fruits = fruits.filter(f => f.id !== id)
        render()
    }).catch(() => {
        console.log('Cancel');

    })
  }
});
