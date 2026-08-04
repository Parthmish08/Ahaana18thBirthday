const openGiftButton = document.getElementById("openGift");

const birthdayPage = document.querySelector(".birthday-page");

const transitionMessage = document.getElementById("transitionMessage");

openGiftButton.addEventListener("click", () => {

    birthdayPage.classList.add("fade-away");

    setTimeout(() => {

        birthdayPage.style.display = "none";

        transitionMessage.classList.add("show");

    }, 900);

    setTimeout(() => {

        window.location.href = "eighteen.html";

    }, 3200);

});