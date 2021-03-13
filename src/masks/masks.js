const masks = {
  cpf(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})([0-9a-zA-Z]{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, '$1')
  },

  cnpj(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  },

  phone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d/, '$1')
  },

  cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d/, '$1')
  },

  pis(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{5})(\d)/, '$1.$2')
      .replace(/(\d{5})\.(\d{2})(\d)/, '$1.$2-$3')
      .replace(/(-\d{1})\d/, '$1')
  }
};

document.querySelectorAll('input').forEach((input) => {
  const field = input.dataset.js;

  input.addEventListener(
    'input',
    (event) => {
      event.target.value = masks[field](event.target.value);
    },
    false
  );
});
