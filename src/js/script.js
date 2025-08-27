/*
 * Seleciona todos os botões e personagens
 */

const buttons = document.querySelectorAll(".character-button");
const characters = document.querySelectorAll(".character");

/*
 * Remove a classe 'selected' do botão atualmente selecionado
 */
function unselectCurrentButton() {
  const currentSelectedButton = document.querySelector(".character-button.selected");
  if (currentSelectedButton) {
    currentSelectedButton.classList.remove("selected");
  }
}

/*
 * Remove a classe 'selected' do personagem atualmente selecionado
 */
function unselectCurrentCharacter() {
  const currentSelectedCharacter = document.querySelector(".character.selected");
  if (currentSelectedCharacter) {
    currentSelectedCharacter.classList.remove("selected");
  }
}

/*
 * Adiciona a classe 'selected' ao botão clicado
 */
function selectButton(button) {
  button.classList.add("selected");
}

/*
 * Adiciona a classe 'selected' ao personagem correspondente
 */
function selectCharacter(index) {
  characters[index].classList.add("selected");
}

/*
 * Função que lida com o clique em um botão
 */
function handleButtonClick(button, index) {
  unselectCurrentButton();
  selectButton(button);

  unselectCurrentCharacter();
  selectCharacter(index);
}

/*
 * Adiciona os event listeners a todos os botões
 */
buttons.forEach((button, index) => {
  button.addEventListener("click", () => handleButtonClick(button, index));
});

window.addEventListener("load", () => {
  const descriptions = document.querySelectorAll(".character-description");

  if (window.innerWidth >= 380) {
    // lógica do min-height
    let maxHeight = 0;
    descriptions.forEach(desc => {
      if (desc.scrollHeight > maxHeight) {
        maxHeight = desc.scrollHeight;
      }
    });
    descriptions.forEach(desc => {
      desc.style.minHeight = maxHeight + "px";
    });
  } else {
    // abaixo de 380px: forçar alinhamento fixo no topo
    document.querySelectorAll(".character-info").forEach(info => {
      info.style.justifyContent = "flex-start";
      info.style.paddingTop = "455px";
    });
  }
});