let clickedCard = null;

function onCardClick(e) {
  const target = e.currentTarget;

  if (target === clickedCard || target.className.includes("done")) return;

  target.className = target.className.replace("color-hidden", "").trim();
  target.className += " done";

  console.log(target.getAttribute("data-color"));
  //Clicking
  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    if (
      clickedCard.getAttribute("data-color") !==
      target.getAttribute("data-color")
    ) {
      console.log("Cards are not equal");
      setTimeout(() => {
        clickedCard.className =
          clickedCard.className.replace("done", "").trim() + " color-hidden";
        target.className =
          target.className.replace("done", "").trim() + " color-hidden";
        clickedCard = null;
      }, 500);
    } else {
      clickedCard = null;
    }
  }
}
