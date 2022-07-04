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

// ---- Descriptions

const tryunfoDesc = document.querySelector(".tryunfo-desc");
const pixelartDesc = document.querySelector(".pixelart-desc");
const formSliderDesc = document.querySelector(".form-slider-desc");
const todoListDesc = document.querySelector('.todolist-desc');

const descCloseBtn = document.querySelectorAll(".project-desc__close-btn");

// --- Butões da descrição do projetos

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const previousDescActive = document.querySelector(".desc-active");
    if (previousDescActive) previousDescActive.classList.remove("desc-active");
    if (project.classList.contains("tryunfo"))
      tryunfoDesc.classList.add("desc-active");
    if (project.classList.contains("pixelart"))
      pixelartDesc.classList.add("desc-active");
    if(project.classList.contains("form-slider"))
      formSliderDesc.classList.add("desc-active");
    if(project.classList.contains("todolist"))
      todoListDesc.classList.add("desc-active");  
  });
});

descCloseBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const descActive = document.querySelector(".desc-active");
    if (descActive) descActive.classList.remove("desc-active");
  });
});

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
