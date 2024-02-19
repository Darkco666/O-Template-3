let data = new XMLHttpRequest();
data.open("Get", "data.json");
data.send();

let userName = document.querySelector(".logo");
let h1Text = document.querySelector(".landing .text h1");

data.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let dataJs = JSON.parse(this.responseText);
    if (dataJs[0].Name) {
      // userName.textContent = dataJs[0].Name;
      // document.title = dataJs[0].Name;
      [
        userName.textContent = `Elzero`,
        document.title = `Elzero`,
        h1Text.textContent = `Elzero`,
      ] = [
        dataJs[0].Name,
        dataJs[0].Name,
        `Welcome, To ${dataJs[0].Name} World`,
      ];
    }
  }
};

let upButton = document.querySelector(".up-arrow");

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
};

upButton.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);

let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(
  ".our-skills .skills .skill .the-progress span "
);
// let spansNum = document.querySelectorAll(".our-skills .skills .skill h3 span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      for (
        let i = 0;
        i <= parseInt(span.getAttribute("full-width"));
        i += 0.1
      ) {
        if (span.style.width != `${span.getAttribute("full-width")}%`) {
          span.style.width = `${i}%`;
        }
      }
    });
  }
};

let ads = document.createElement("div");
ads.className = "ads";
upButton.after(ads);

// setInterval(() => {}, 60000);
