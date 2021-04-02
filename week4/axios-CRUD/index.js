const instance = axios.create({
  baseURL: "https://ih-crud-api.herokuapp.com",
});

function getCharacters() {
  instance.get("/characters").then((charactersFromAPI) => {
    console.log(charactersFromAPI);
    let charactersHTML = "";
    charactersFromAPI.data.forEach((character) => {
      charactersHTML += `
        <li>
            id(${character.id}) ${character.name} <button onclick=updateCharacter(${character.id})>Update</button> <button onclick=deleteCharacter(${character.id})>Delete</button>
        </li>
        <hr>
        `;
    });
    document.getElementById("characters").innerHTML = charactersHTML;
  });
}

function updateCharacter(id) {
  instance.get(`/characters/${id}`).then((characterFromAPI) => {
    const { id, name, occupation, debt, weapon } = characterFromAPI.data;
    document.getElementsByName("id")[0].value = id;
    document.getElementsByName("name")[1].value = name;
    document.getElementsByName("occupation")[1].value = occupation;
    document.getElementsByName("debt")[1].value = debt;
    document.getElementsByName("weapon")[1].value = weapon;
    document.getElementById("update-characters").style.display = "block";
  });
  document.getElementById("update-form-div").style.display = "block";
}

function deleteCharacter(id) {
  instance.delete(`/characters/${id}`).then((deletedCharResponse) => {
    console.log(deletedCharResponse);
    getCharacters();
  });
}

window.addEventListener("load", () => {
  getCharacters();
  document
    .getElementById("create-new-character")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementsByName("name")[0].value;
      const occupation = document.getElementsByName("occupation")[0].value;
      const debt = document.getElementsByName("debt")[0].value;
      const weapon = document.getElementsByName("weapon")[0].value;
      instance
        .post("/characters", { name, occupation, debt, weapon })
        .then(() => {
          getCharacters();
        });
    });
  document
    .getElementById("update-character")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const id = document.getElementsByName("id")[0].value;
      const name = document.getElementsByName("name")[1].value;
      const occupation = document.getElementsByName("occupation")[1].value;
      const debt = document.getElementsByName("debt")[1].value;
      const weapon = document.getElementsByName("weapon")[1].value;
      instance
        .put(`/characters/${id}`, { name, occupation, debt, weapon })
        .then(() => {
          getCharacters();
        });
    });
});
