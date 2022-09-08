// write your code here
fetch("http://localhost:3000/ramens")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((ramen) => {
      renderRamen(ramen);
    })
  );

const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const ramenImage = document.querySelector(".detail-image");
const h2Name = document.querySelector(".name");
const h3Restaurant = document.querySelector(".restaurant");
const ramenRating = document.querySelector("#rating-display");
const ramenComment = document.querySelector("#comment-display");

const ramenForm = document.querySelector("#new-ramen");

function renderRamen(ramen) {
  const img = document.createElement("img");
  img.src = ramen.image;
  ramenMenu.append(img);

  img.addEventListener("click", () => {
    ramenImage.src = ramen.image;
    h2Name.textContent = ramen.name;
    h3Restaurant.textContent = ramen.restaurant;
    ramenRating.textContent = ramen.rating;
    ramenComment.textContent = ramen.comment;
  });
}

function addNewRamen() {
  ramenForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newRamen = {
      name: e.target.name.value,
      restaurant: e.target.restaurant.value,
      image: e.target.image.value,
      rating: e.target.rating.value,
      comment: e.target["new-comment"].value,
    };

    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRamen),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    renderRamen(newRamen);
  });
}

addNewRamen();
