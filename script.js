const form = document.getElementById('my-form');
const apelidoInput = document.getElementById('apelido');
const nomeInput = document.getElementById('nome');
const dataNascimentoInput = document.getElementById('data-nascimento');
const sexoSelect = document.getElementById('sexo');
const observacaoTextarea = document.getElementById('observacao');

form.addEventListener('submit', (event) => {
  let hasErrors = false;

  if (apelidoInput.value.trim() === '') {
    apelidoInput.classList.add('error');
    hasErrors = true;
  } else {
    apelidoInput.classList.remove('error');
    apelidoInput.classList.add('success');
  }

  if (nomeInput.value.trim() === '') {
    nomeInput.classList.add('error');
    hasErrors = true;
  } else {
    nomeInput.classList.remove('error');
    nomeInput.classList.add('success');
  }

  if (dataNascimentoInput.value.trim() === '') {
    dataNascimentoInput.classList.add('error');
    hasErrors = true;
  } else {
    dataNascimentoInput.classList.remove('error');
    dataNascimentoInput.classList.add('success');
  }

  if (sexoSelect.value === '') {
    sexoSelect.classList.add('error');
    hasErrors = true;
  } else {
    sexoSelect.classList.remove('error');
    sexoSelect.classList.add('success');
  }

  if (hasErrors) {
    event.preventDefault();
    const errorMsg = document.createElement('p');
    errorMsg.classList.add('error-msg');
    errorMsg.textContent = 'Por favor, preencha todos os campos.';
    form.appendChild(errorMsg);
  }
});
