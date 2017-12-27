(function() {
  // Get the closest element of a given element by class

  function closestByClass(el, classToFind) {
    while (!el.classList.contains(classToFind)) {
      el = el.parentNode;
      if (!el) {
        return null;
      }
    }
    return el;
  }

  // Find UI buttons
  var cardBtn = document.querySelectorAll(".crew-card__btn");

  function panelAction(e) {
    e.preventDefault();

    // 1. travel up DOM to get .crew-card
    let card = closestByClass(this, "crew-card");

    console.log(card);
    // 2. toggle active class
    card.classList.toggle("crew-card--active");

    // let panel = this.nextElementSibling.classList.remove('crew-card__panel-hidden');

    // let panel = this.nextElementSibling;

    // if (hasClass(panel,'crew-card__panel-hidden') {
    //   .classList.remove('crew-card__panel-hidden');
    // } else {
    //   .classList.add('crew-card__panel-hidden');
    // }

    // this.nextElementSibling.classList.toggle('crew-card__panel-hidden');

    // console.log(panel);
  }

  // Add event listners to UI buttons
  // cardBtn.addEventListener("click", panelAction);
  [...cardBtn].forEach(cardBtn =>
    cardBtn.addEventListener("click", panelAction)
  );
})();
