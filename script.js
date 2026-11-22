//animated cards
const exploreCards =
document.querySelectorAll(".explore-card"); //it selects a class with .explore-card

const cardObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry, index) => { //runs for each card that the observer reports

            if (entry.isIntersecting) {

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 400);// add the class with a delay 

                cardObserver.unobserve(entry.target);//stop everything when the card appear
            }

        });

    },
    {
        threshold: 0.4 //only work when at leats 40% of the card is visible
    }
);

exploreCards.forEach(card => {
    cardObserver.observe(card);
});

//food button
const buttons = document.querySelectorAll(".detailsBtn"); //collects every Read More button

buttons.forEach(function(button) {

    button.addEventListener("click", function() { //wait for the button to be click for it to be functioning

        const details = button.parentElement.querySelector(".details");

        details.classList.toggle("show");

        if (details.classList.contains("show")) { //opens and close
            button.textContent = "Read Less";
        } else {
            button.textContent = "Read More";
        }

    });

});

//menubar
 const menuBtn = document.querySelector("#menuBtn"); //find button by its ID
 const navMenu = document.querySelector("#navMenu"); //find menu by its ID
 menuBtn.addEventListener("click", function() { //wait for the button to be click for it to be functioning
    navMenu.classList.toggle("show"); //opens and close
 });