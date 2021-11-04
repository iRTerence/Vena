document.addEventListener("click", function (e) {
  console.log(e.target);
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
