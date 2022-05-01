import iconToolTips from './iconToolTips.js';

// --- Hability icons 
const habilityIcons = document.querySelectorAll(".habilidades .hab");

const setHabilitiesToolTips = () => {
  habilityIcons.forEach((hab) => {
    const habName = hab.getAttribute('name')
    hab.setAttribute('data-tooltip', iconToolTips[habName])
  });
}


// --- Jumping frog

const frogBtn = document.querySelector('.frogBtn')
const sapo = document.querySelector('.sapo')

frogBtn.addEventListener('click', () => {
  sapo.classList.add('jump','green')
  setTimeout(() => {
    sapo.classList.remove('jump')
  },400)
  setTimeout(() => {
    sapo.classList.remove('green')
  }, 700)
})

// ----- Projects

const projects = document.querySelectorAll(".project");

// ---- Descricoes

const tryunfoDesc = document.querySelector(".tryunfo-desc");
const pixelartDesc = document.querySelector(".pixelart-desc");
const todolistDesc = document.querySelector(".todolist-desc");
const onlineStoreDesc = document.querySelector(".online-store-desc");
const receitasDaVovoDesc = document.querySelector(".receitas-da-vovo-desc")

const descCloseBtn = document.querySelectorAll(".project-desc__close-btn");
const projectDesc = document.querySelectorAll(".project-desc");

// --- Butões da descrição do projetos

const tryunfoBtn = document.querySelector(".tryunfo-btn");
const pixelArtBtn = document.querySelector(".pixelart-btn");
const todolistBtn = document.querySelector(".todolist-btn");
const onlineStoreBtn = document.querySelector(".online-store-btn");
const receitasDaVovoBtn = document.querySelector(".receitas-da-vovo-btn");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const previousDescActive = document.querySelector(".desc-active");
    if (previousDescActive) previousDescActive.classList.remove("desc-active");
    if (project.classList.contains("tryunfo"))
      tryunfoDesc.classList.add("desc-active");
    if (project.classList.contains("pixelart"))
      pixelartDesc.classList.add("desc-active");
    if (project.classList.contains("todolist"))
      todolistDesc.classList.add("desc-active");
    if (project.classList.contains("online-store"))
      onlineStoreDesc.classList.add("desc-active");
    if(project.classList.contains("receitas-da-vovo"))
      receitasDaVovoDesc.classList.add("desc-active")
  });
});

descCloseBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const descActive = document.querySelector(".desc-active");
    if (descActive) descActive.classList.remove("desc-active");
  });
});

tryunfoBtn.addEventListener("click", () => {
  const url = "https://brunobcb-project-tryunfo.surge.sh/";
  window.open(url);
});

pixelArtBtn.addEventListener("click", () => {
  const url = "./assets/projetos/pixel-art/index.html";
  window.open(url);
});

todolistBtn.addEventListener("click", () => {
  const url = "./assets/projetos/todo-list/index.html";
  window.open(url);
});

onlineStoreBtn.addEventListener("click", () => {
  const url = "https://brunobcb-project-onlinestore.surge.sh/";
  window.open(url);
});

receitasDaVovoBtn.addEventListener("click", () => {
  const url = "https://bruno-g1-receitas-da-vovo.surge.sh/";
  window.open(url);
});



//  ------ Curriculum

const curriculumBtn = document.querySelector(".curriculum-btn");

curriculumBtn.addEventListener("click", () => {});

// ---- Form
const submitButton = document.querySelector("#submit-btn");
const formEmail = document.querySelector("#form-email");

const isFormButtonDisabled = () => {
  const email = formEmail.value;
  console.log(email);
  const emailRegex = /^[\w._]+@[\w]+\.com/;
  const isEmailValid = email.match(emailRegex);
  if (isEmailValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

formEmail.addEventListener("change", isFormButtonDisabled);


window.onload = () => {
  setHabilitiesToolTips();
}