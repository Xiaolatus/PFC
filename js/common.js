// Sélecteurs communs
const modal       = document.getElementById("modal");
const modalTitle  = document.getElementById("modal-title");
const modalProjet = document.getElementById("modal-projet");
const modalLogo   = document.getElementById("modal-logo");
const modalSections = document.getElementById("modal-sections");

// Fabrique le HTML des sections à partir de ac.contenu
function buildSections(ac) {
  const map = [
    ["Contexte & Réalisation", ac.contenu?.contexte],
    ["Contribution personnelle", ac.contenu?.contribution],
    ["Lien avec l’AC", ac.contenu?.lien],
    ["Niveau atteint & progression", ac.contenu?.progression],
    ["Complémentarité avec les compétences métiers", ac.contenu?.metier],
  ];

  let html = map
    .filter(([, val]) => !!val)
    .map(([label, val]) => `<h3>${label}</h3><p>${val}</p>`)
    .join("");

  // --- Section images ---
  const imgs = ac.contenu?.images;
  if (Array.isArray(imgs) && imgs.length) {
    const gallery = imgs.map(item => {
      if (typeof item === "string") {
        return `<figure class="modal-image">
                  <img src="${item}" alt="">
                </figure>`;
      } else if (item && typeof item === "object") {
        const { src, alt = "", legend = "" } = item;
        return `<figure class="modal-image">
                  <img src="${src}" alt="${alt}">
                  ${legend ? `<figcaption>${legend}</figcaption>` : ""}
                </figure>`;
      }
      return "";
    }).join("");

    html += `<h3>Illustrations</h3><div class="modal-images">${gallery}</div>`;
  }

  // --- Section liens ---
  if (Array.isArray(ac.contenu?.liens) && ac.contenu.liens.length) {
    const links = ac.contenu.liens
      .map(l => `<li><a href="${l.url}" target="_blank">${l.label}</a></li>`)
      .join("");
    html += `<h3>Ressources externes</h3><ul class="modal-links">${links}</ul>`;
  }

  return html;
}



// Écouteur global (ouvre/ferme la modale)
document.addEventListener("click", (e) => {
  const link = e.target.closest(".card-link");
  if (link && link.dataset.ac) {
    e.preventDefault();
    const ac = acData.find(x => x.id === link.dataset.ac);
    if (!ac) return;

    // Titre + projet
    modalTitle.textContent  = ac.titre || "";
    modalProjet.textContent = ac.projet || "";

    // Logo (optionnel)
    if (ac.logo) {
      modalLogo.src = ac.logo;
      modalLogo.style.display = "block";
    } else {
      modalLogo.removeAttribute("src");
      modalLogo.style.display = "none";
    }

    // Sections
    modalSections.innerHTML = buildSections(ac);

    // Ouvrir
    modal.hidden = false;
  }

  if (e.target.matches("[data-close]")) {
    modal.hidden = true;
  }
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.hidden = true;
});
