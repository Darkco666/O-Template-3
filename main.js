let upButton = document.querySelector(".up-arrow");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 1000) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
});

upButton.onclick = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

let data = new XMLHttpRequest();
data.open("Get", "data.json");
data.send();

let userName = document.querySelector(".logo");
let h1Text = document.querySelector(".landing .text h1");

data.onload = function () {
  // Or Using onreadstatechange
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

let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(
  ".our-skills .skills .skill .the-progress span "
);
let spansNum = document.querySelectorAll(".our-skills .skills .skill h3 span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      let width = 0,
        fullWidth = setInterval(() => {
          if (span.style.width != `${span.getAttribute("full-width")}%`) {
            span.style.width = `${width}%`;
            width++;
          } else {
            clearInterval(fullWidth);
          }
        }, 0);
    });

    spansNum.forEach((span) => {
      let width = 0,
        fullWidth = setInterval(() => {
          if (span.textContent != `${span.getAttribute("full-width")}%`) {
            span.textContent = `${width}%`;
            width++;
          } else {
            clearInterval(fullWidth);
          }
        }, 10);
    });
  }
};

let ads = document.createElement("div");
ads.className = "ads";
upButton.after(ads);

// setInterval(() => {}, 60000);
