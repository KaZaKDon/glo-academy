const modalGooFunc = () => {
  const cartBtn1 = document.querySelector("#cart-button");
  const modal1 = document.querySelector(".cart-modal_overlay");

  const openModal = () => {
    modal1.classList.add("open");
  };

  const closeModal = () => {
    modal1.classList.remove("open");
  };

  cartBtn1.addEventListener("click", () => {
    openModal();
  });

  modal1.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal_overlay") ||
      event.target.closest(".cart-modal_header-close")
    ) {
      closeModal();
    }
  });
};

const goodsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArrey = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      img: "Roll_kriv.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      img: "Kaliforniy_losos.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      description:
        "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий....",
      price: 250,
      img: "Okinava.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      img: "Chezar.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      img: "Iasay.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      img: "Roll_kriv.jpg",
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
                <div class="products-card">
                    <div class="products-card_image">
                    <img src="./img/goods/${card.img}" alt="${card.img}" />
                    </div>
                    <div class="products-card_description">
                    <div class="products-card_description-row">
                        <h5 class="products-card_description-name">
                        ${card.title}
                        </h5>
                    </div>
                    <div class="products-card_description-row">
                        <p class="products-card_description-text">
                        ${card.description}
                        </p>
                    </div>
                    <div class="products-card_description-row">
                        <div class="produkts-card_desxription-controls">
                        <button class="btn btn-primary">
                            В корзину
                            <img src="./icon/Korzina_white.svg" alt="Korzina" />
                        </button>
                        <span class="produkts-card_desxription-controls_price"
                            >${card.price} ₽</span
                        >
                        </div>
                    </div>
                    </div>
                </div>
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
modalGooFunc();

const modalFunc = () => {
  const cartBtn1 = document.querySelector("#cart-button");
  const modal1 = document.querySelector(".cart-modal_overlay");

  const openModal = () => {
    modal1.classList.add("open");
  };

  const closeModal = () => {
    modal1.classList.remove("open");
  };

  cartBtn1.addEventListener("click", () => {
    openModal();
  });

  modal1.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal_overlay") ||
      event.target.closest(".cart-modal_header-close")
    ) {
      closeModal();
    }
  });
};

modalGooFunc();
goodsFunc();
