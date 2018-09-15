const validate = (values, isActiveStep) => {
  // console.log("this.state", values);
  const errorsData = {};
  // console.log(this.props);

  switch (isActiveStep) {
    case 0:
      if (values.firstName === "") {
        errorsData.firstName = "Не должен быть пустым";
      } else if (values.firstName.length < 3) {
        errorsData.firstName = "Должно быть больше трех символов";
      }

      if (values.lastName === "") {
        errorsData.lastName = "Не должен быть пустым";
      } else if (values.lastName.length < 3) {
        errorsData.lastName = "Должно быть больше трех символов";
      }

      if (values.password === "") {
        errorsData.password = "Не должен быть пустым";
      } else if (values.password.length < 5) {
        errorsData.password = "Должно быть больше пяти символов";
      }

      if (values.repeatPassword !== values.password) {
        errorsData.repeatPassword = "Должен соответствовать паролю";
      } else if (values.repeatPassword.length < 5) {
        errorsData.repeatPassword = "Должно быть больше пяти символов";
      }

      if (values.gender === "") {
        errorsData.gender = "Выберите пол";
      }

      break;

    case 1:
      if (values.email === "") {
        errorsData.email = "Не должен быть пустым";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errorsData.email = "Введите корректно email";
      }

      if (values.mobile === "") {
        errorsData.mobile = `Не должен быть пустым`;
      } else if (
        !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i.test(
          values.mobile
        )
      ) {
        errorsData.mobile =
          "Введите корректно email в формате - (Код оператора) *******";
      }

      if (values.cities === "") {
        errorsData.cities = "Выберите город";
      }
      break;

    case 2:
      break;
  }

  return errorsData;
};

export default validate;
