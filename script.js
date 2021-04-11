const navButtons = document.querySelectorAll("button.window-switches");
navButtons.forEach(button => {
    button.addEventListener("click", () => {
        navButtons.forEach(siblings => siblings.classList.remove("active-button"));
        button.classList.add("active-button");
    })
});

(function(){
  let navigation = document.querySelector("nav");
  let middleSection = document.querySelector(".middle-section");
  let rightPanel = document.querySelector(".right-panel");
  let themeSwitch = document.querySelector(".theme-switcher");
  let darkTheme = document.querySelector(".theme-dark");
  let lightTheme = document.querySelector(".theme-light");
  let element1 = document.querySelector(".heading h1");
  let element2 = document.querySelector(".heading-2 h2");
  let element3 = document.querySelector(".transfer-section h2");
  let element4 = document.querySelector("div.light-gray");
  let element5 = document.querySelectorAll(".transaction-status b");
  let element6 = document.querySelectorAll(".transaction-status p");
  let element7 = document.querySelectorAll(".transaction-status h3");
  const invertElements = [element1, element2, element3, element4, ...element5, ...element6, ...element7];
  console.log(invertElements);

  themeSwitch.addEventListener("click", () => {
    navigation.classList.toggle("darker");
    middleSection.classList.toggle("dark");
    rightPanel.classList.toggle("darker");
    darkTheme.classList.toggle("invisible");
    lightTheme.classList.toggle("invisible");
    invertElements.forEach((element) => element.classList.toggle("invert"));
  })
})();

let ctx = document.querySelector("canvas");
var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: "rgba(70, 181, 123, 0.6)",
        borderColor: "rgba(70, 181, 123, 1)",
        borderWidth: 1,
        lineTension: 0.4
      }
    ]
  }
});