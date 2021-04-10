const navButtons = document.querySelectorAll("button.window-switches");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        navButtons.forEach(siblings => siblings.classList.remove("active-button"));
        button.classList.add("active-button");
    })
});

let navigation = document.querySelector("nav");
let middleSection = document.querySelector(".middle-section");
let rightPanel = document.querySelector(".right-panel");
let themeSwitch = document.querySelector(".theme-switcher");
let darkTheme = document.querySelector(".theme-dark");
let lightTheme = document.querySelector(".theme-light");

themeSwitch.addEventListener("click", () => {
    navigation.classList.toggle("darker");
    middleSection.classList.toggle("dark");
    rightPanel.classList.toggle("darker");
    darkTheme.classList.toggle("invisible");
    lightTheme.classList.toggle("invisible");
})

let ctx = document.querySelector("canvas");
const config = {
    type: 'line',
    data,
    options: {}
};

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};