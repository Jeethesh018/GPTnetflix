const checkValidation = (email, password, name) => {
  const emailData = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordData =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!emailData) return "Please Enter a valid Email";
  if (!passwordData) return "Please Enter a valid Password";
  if (!name) return "Please Enter a Name";
};
export default checkValidation;
