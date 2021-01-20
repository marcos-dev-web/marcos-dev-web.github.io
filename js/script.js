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
