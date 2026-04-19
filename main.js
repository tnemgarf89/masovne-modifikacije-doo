document.addEventListener("DOMContentLoaded", () => {
  const background = "./img/background.png";

  document.body.style.backgroundImage = `url('${background}')`;

  // Options
  const selectGlavno = document.getElementById("glavno-jelo");
  const selectPice = document.getElementById("pice");
  const selectGrickalice = document.getElementById("grickalice");

  // Image containers
  const imgGlavno = document.getElementById("img-glavno");
  const imgPice = document.getElementById("img-pice");
  const imgGrickalice = document.getElementById("img-grickalice");

  // Verify button
  const verifyButton = document.getElementById("verify");

  verifyButton.addEventListener("click", () => {
    verifyOrder()
      ? alert("Uspeli smo da pronađemo vašu porudžbinu. Kod vaše nove isporuke je 738.")
      : alert("Ne možemo da pronađemo ovu porudžbinu u našoj bazi. Molimo, pokušajte ponovo.");
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

  selectGlavno.addEventListener("change", () => {
    imgGlavno.src = "./img/" + selectGlavno.value;
  });

  selectPice.addEventListener("change", () => {
    imgPice.src = "./img/" + selectPice.value;
  });

  selectGrickalice.addEventListener("change", () => {
    imgGrickalice.src = "./img/" + selectGrickalice.value;
  });
});
