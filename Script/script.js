const modalFunc = () => {
  const cartBtn = document.querySelector("#cart-button");
  const modal = document.querySelector(".cart-modal_overlay");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal_overlay") ||
      event.target.closest(".cart-modal_header-close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArrey = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "Piza_plus.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "Tanuky.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "FoodBand.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "Piza.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "Tochka.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      img: "PizzaBurger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<h1 style='width: 100%; text-align: center;'>Загрузка</h1>";
  };

  const randerResrs = (arrey) => {
    container.innerHTML = "";

    arrey.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <a href="goods.html?id=${card.id}" class="products-card">
                <div class="products-card_image">
                  <img src="./img/${card.img}" alt="${card.img}"> 
                </div>
                <div class="products-card_description">
                 <div class="products-card_description-row">
                  <h4 class="products-card_description-title">${card.title}</h4>
                  <div class="products-card_description-badge">${card.time}мин</div>
                 </div>
                 <div class="products-card_description-row">
                  <div class="products-card_description-info">
                    <div class="products-card_description-info_raiting">
                      <img src="./icon/Star.svg" alt="star">
                      ${card.rating}
                    </div>
                    <div class="products-card_description-info_price">
                      От ${card.price} ₽
                    </div>
                    <div class="products-card_description-info_group">
                      ${card.type} 
                    </div>
                  </div>
                 </div>  
                </div>
              </a>
        `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      randerResrs(restArrey);
    }, 2000);
  }
};
modalFunc();
restsFunc();
