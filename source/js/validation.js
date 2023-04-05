const form = document.querySelector('.form');

const pristine = new Pristine(form, {
  classTo: 'form',
  errorTextParent: 'form__error',
});

const addValidator = (message, validate) => {
  pristine.addValidator (form.search, validate, message);
};

addValidator(
  'Количество вводимых символов должно быть больше 2',
  (search) => search.length > 2
);
