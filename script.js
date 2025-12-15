let matieres = [];

function ajouterMatiere() {
  const nom = document.getElementById("matiere").value;
  if (!nom) return;

  matieres.push(nom);
  afficherMatieres();
  document.getElementById("matiere").value = "";
}

function afficherMatieres() {
  const ul = document.getElementById("liste-matieres");
  const select = document.getElementById("matiere-select");
  ul.innerHTML = "";
  select.innerHTML = "";

  matieres.forEach(m => {
    ul.innerHTML += `<li>${m}</li>`;
    select.innerHTML += `<option>${m}</option>`;
  });
}

async function ajouterNote() {
  const eleve = document.getElementById("eleve").value;
  const matiere = document.getElementById("matiere-select").value;
  const note = document.getElementById("note").value;

  await addDoc(collection(db, "notes"), {
    eleve, matiere, note
  });

  chargerNotes();
}

async function chargerNotes() {
  const tbody = document.getElementById("table-notes");
  tbody.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "notes"));
  querySnapshot.forEach(doc => {
    const n = doc.data();
    tbody.innerHTML += `
      <tr>
        <td>${n.eleve}</td>
        <td>${n.matiere}</td>
        <td>${n.note}</td>
      </tr>
    `;
  });
}

chargerNotes();
