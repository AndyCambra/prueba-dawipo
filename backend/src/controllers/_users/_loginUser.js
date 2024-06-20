const bcrypt = require("bcrypt");
const { User } = require("../../db");

const _loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,    
  };
};

module.exports = {
  _loginUser,
};
