//animated cards
const exploreCards =
document.querySelectorAll(".explore-card");

const cardObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 400);

                cardObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.4
    }
);

exploreCards.forEach(card => {
    cardObserver.observe(card);
});

//food button
const buttons = document.querySelectorAll(".detailsBtn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const details = button.parentElement.querySelector(".details");

        details.classList.toggle("show");

        if (details.classList.contains("show")) {
            button.textContent = "Read Less";
        } else {
            button.textContent = "Read More";
        }

    });

});

//menubar
 const menuBtn = document.querySelector("#menuBtn");
 const navMenu = document.querySelector("#navMenu");
 menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");
 });