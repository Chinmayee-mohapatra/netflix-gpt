export const checkValidData = (email, password) => {
  // const isUsernameValid =
  //   /^(?=.{4,32}$)(?![_.-])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$/.test(name);

  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isUsernameValid) return "Invalid Username !!";
  if (!isEmailValid) return "InValid Email !!";
  if (!isPasswordValid) return "InValid Password !!";

  return null;
};
