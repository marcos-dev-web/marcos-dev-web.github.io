const functions = {
  style: {
    //default: `
    //  transform: scale(1.0);
    //  background-color: rgba(217, 227, 247, 0.5);
    //  color: white;
    //`,
    release: `
      transform: scale(0.8);
      background-color: #4b4b4b;
      color: lightgray;
    `,
  },

  insertDataInCards: () => {
    const values = {
      value_percents_css: 80,
      value_percents_html: 70,
      value_percents_js: 50,
      value_percents_en: 30,
    };

    const elements = {
      value_percents_css: [
        document.querySelector(".value_percents_css"),
        document.querySelector(".percents_css"),
      ],
      value_percents_html: [
        document.querySelector(".value_percents_html"),
        document.querySelector(".percents_html"),
      ],
      value_percents_js: [
        document.querySelector(".value_percents_js"),
        document.querySelector(".percents_js"),
      ],
      value_percents_en: [
        document.querySelector(".value_percents_en"),
        document.querySelector(".percents_en"),
      ],
    };

    for (let el in elements) {
      let element = elements[el][0];
      let l_visual = elements[el][1].querySelector("span");
      let len = values[el];

      element.innerText = values[el];
      l_visual.style.display = "block";
      l_visual.style.minWidth = `${len}%`;
      l_visual.style.maxWidth = `${len}%`;
    }
  },

  apply_style: (element, style) => {
    element.style += style;
  },

  hoverCards: () => {
    const all_cards = document.querySelectorAll(".card");

    all_cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "#2980b9";
        all_cards.forEach((card_2) => {
          if (card != card_2) {
            functions.apply_style(card_2, functions.style.release);
          }
        });
      });
      card.addEventListener("mouseout", () => {
        card.style.backgroundColor = "rgba(217, 227, 247, 0.5)";
        all_cards.forEach((card_2) => {
						card_2.style = ""
        });
      });
    });
  },
};

functions.insertDataInCards();
functions.hoverCards();
