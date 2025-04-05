const Supplier = require("../../models/supplierModel");

async function checkSupplierInfo() {
  const suppliers = await Supplier.find();

  // Check if suppliers array is empty
  if (suppliers.length === 0) {
    const item = document.createElement("div");
    item.classList.add("item1");
    item.textContent = "There is no supplier input yet";
    document.body.appendChild(item); // Append the message to the body or a specific container
  } else {
    suppliers.forEach((supplier) => {
      // Corrected the parameters of forEach
      const item = document.createElement("ul");
      item.classList.add("item");

      // Create list items for each supplier property
      const name = document.createElement("li");
      name.textContent = supplier.name;

      const code = document.createElement("li");
      code.textContent = supplier.customerCode;

      const deliveryTerm = document.createElement("li");
      deliveryTerm.textContent = supplier.deliveryTerm.join(", "); // Assuming this is an array

      const paymentTerm = document.createElement("li");
      paymentTerm.textContent = supplier.paymentTerm.join(", "); // Assuming this is an array

      const pic = document.createElement("li");
      pic.textContent = supplier.pic;

      const productDes = document.createElement("li");
      productDes.textContent = supplier.productDes;

      // Append list items to the unordered list
      item.appendChild(name);
      item.appendChild(code);
      item.appendChild(deliveryTerm);
      item.appendChild(paymentTerm);
      item.appendChild(pic);
      item.appendChild(productDes);

      // Append the unordered list to the body or a specific container
      document.body.appendChild(item);
    });
  }
}

checkSupplierInfo();
