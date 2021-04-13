(function(){
  let themeSwitch = document.querySelector(".theme-switcher");
  let menu = document.querySelector("span.menu-button");
  let navigation = document.querySelector("nav");
  let page = document.querySelector("body");
  let overlay = document.querySelector("div.overlay");
  let cardInput = document.querySelector("#credit-card-number");
  let middleSection = document.querySelector(".middle-section");
  let rightPanel = document.querySelector(".right-panel");
  let submitButton  = document.querySelector(".submit-button");
  let darkTheme = document.querySelector(".theme-dark");
  let lightTheme = document.querySelector(".theme-light");
  const inputFields = document.querySelectorAll("input");
  const navButtons = document.querySelectorAll("button.window-switches");
  const invertElements = document.querySelectorAll(".light-colour");

  // For changing styles on active/inactive navigation buttons
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
        navButtons.forEach(siblings => siblings.classList.remove("active-button"));
        button.classList.add("active-button");
  })});

  // Switching between dark and light themes
  themeSwitch.addEventListener("click", () => {
    rightPanel.classList.toggle("dark");
    navigation.classList.toggle("darkest");
    submitButton.classList.toggle("green-gradient");
    [page, middleSection].forEach((element) => element.classList.toggle("darker"));
    [darkTheme, lightTheme].forEach((element) => element.classList.toggle("invisible-button"));
    inputFields.forEach((element) => element.classList.toggle("dark-gray"))
    invertElements.forEach((element) => element.classList.toggle("invert"));
  })

  // For showing/hiding navigation panel on smaller screens
  menu.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
    navigation.classList.toggle("navbar-open");
    overlay.classList.toggle("overlay-visible");
    setTimeout(() => {navigation.classList.toggle("transform"), 1});
  })

  // Credit card input formatting
  cardInput.addEventListener("input", () => {
    let cardNumber = cardInput.value;
    let formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);
  
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join(' ');
    }
    
    if (cardNumber !== formattedCardNumber) {
        cardInput.value = formattedCardNumber;
    }
  })
})();

// Graph
let ctx = document.querySelector("canvas");
let amount = [430, 450, 440, 452, 445, 465, 458, 470, 465, 487, 488, 482, 495, 486, 485];
let day = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
let myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: day,
    datasets: [
      {
        label: "Amount(in $)",
        data: amount,
        backgroundColor: "rgba(70, 181, 123, 0.2)",
        borderColor: "rgba(70, 181, 123, 1)",
        borderWidth: 3,
        fill: true,
        lineTension: 0.4,
      }
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid:{
          display: false
        },
      },
      y: {
        grid:{
          display: false
        },
      }
    }
  }
});