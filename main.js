document.addEventListener("DOMContentLoaded", () => {
  const background = "./img/background.png";

  document.body.style.backgroundImage = `url('${background}')`;

  const selectGlavno = document.getElementById("glavno-jelo");
  const selectPice = document.getElementById("pice");
  const selectGrickalice = document.getElementById("grickalice");

  const verifyButton = document.getElementById("verify");

  verifyButton.addEventListener("click", () => {
    verifyOrder() ? alert("super") : alert("ne bas");
  });

  function verifyOrder() {
    if (selectGlavno.value !== "glavno-hot-dog.png") {
      return false;
    }

    if (selectPice.value !== "piće-limunada.png") {
      return false;
    }

    if (selectGrickalice.value !== "grickalice-kokice.png") {
      return false;
    }

    return true;
  }
});
