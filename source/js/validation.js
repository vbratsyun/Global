const form = document.querySelector('.form');

const pristine = new Pristine(form, {
  classTo: 'form__search',
  errorTextParent: 'form__search',
});

const addValidator = (message, validate) => {
  pristine.addValidator (form.search, validate, message);
};

addValidator(
  'The number of characters entered must be more than 4',
  (search) => search.length > 4,
);

addValidator(
  'The number of characters entered must be less than 12',
  (search) => search.length < 12,
);

addValidator(
  'The following characters are not allowed !@#$%^&*()',
  (search) => !/[!@#$%^&*()]+/.test(search),
);

const onFormSubmit = (event) => {
  const isValid = pristine.validate();
  if (!isValid) {
    event.preventDefault();
  }
}

form.addEventListener('submit', onFormSubmit);