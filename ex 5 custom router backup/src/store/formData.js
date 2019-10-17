import {observable, computed, action} from 'mobx';

class FormData {
  @observable data = getFormData();

  @action change(name, value) {
    let field = this.data[name];
    field.value = value;
    field.valid = field.validator(field.value);
  }
}

export default new FormData();

function getFormData() {
  return {
    name: {
      label: 'Name',
      value: '',
      validator: val => /^[aA-zZ ]{2,}$/.test(val),
      errorText: 'Латинские символы, не менее двух',
      valid: null
    },
    email: {
      label: 'Email',
      value: '',
      validator: val => /^.+@.+$/.test(val),
      errorText: 'Собака',
      valid: null
    },
    phone: {
      label: 'Phone',
      value: '',
      validator: val => /^[0-9]{7,15}$/.test(val),
      errorText: 'От 7 до 15 цифр',
      valid: null
    }
  };
}
