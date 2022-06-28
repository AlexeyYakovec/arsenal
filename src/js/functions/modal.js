// video popup
const btns = document.querySelectorAll(".btn");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");

// form popup
const btnForm = document.querySelectorAll(".form-btn");
const formOverlay = document.querySelector(".form-overlay");
const close = document.querySelector(".close");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});
modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

btnForm.forEach((item) => {
  item.addEventListener("click", () => {
    formOverlay.style.display = "flex";
    formOverlay.classList.add("fixed-block");
    disableScroll();
  });

  close.addEventListener("click", () => {
    formOverlay.style.display = "none";
  });
});
