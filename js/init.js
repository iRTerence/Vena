document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-item")) {
    const src =
      "https://live.staticflickr.com/65535/51655240554_af3631578e_b.jpg";
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("sports-modal")
    );
    myModal.show();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-item2")) {
    const src = "https://i.imgur.com/31n1iYZ.png?1";
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById("data-modal"));
    myModal.show();
  }
});

$(".carousel").carousel();
