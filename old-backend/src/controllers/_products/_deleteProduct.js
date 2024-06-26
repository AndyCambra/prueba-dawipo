const { Product } = require("../../db");

const _deleteProduct = async (name) => {
  const findProduct = await Product.findOne({ where: { name: name } });

  if (!findProduct) {
    throw new Error("That product does not exist");
  } else {
    await Product.destroy({ where: { name: name } });
  }
};

module.exports = {
  _deleteProduct,
};
