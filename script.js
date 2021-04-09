const navButtons = document.querySelectorAll("button.window-switches");

navButtons.forEach(button => {
    button.addEventListener("click", () => {
        navButtons.forEach(siblings => siblings.classList.remove("active-button"));
        button.classList.add("active-button");
    })
});