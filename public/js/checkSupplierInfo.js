// checkSupplierInfo.js (frontend)
const protocol = window.location.protocol; // e.g., 'http:' or 'https:'
const host = window.location.host; // e.g., 'yourapp.herokuapp.com'

async function checkSupplierInfo() {
  try {
    const response = await fetch(`${protocol}//${host}/api/v1/suppliers`);
    const suppliers = await response.json();

    if (suppliers.length === 0) {
      const item = document.createElement("div");
      item.classList.add("item1");
      item.textContent = "There is no supplier input yet";
      document.body.appendChild(item);
    } else {
      suppliers.forEach((supplier) => {
        const item = document.createElement("ul");
        item.classList.add("item");

        const name = document.createElement("li");
        name.textContent = supplier.name;

        const code = document.createElement("li");
        code.textContent = supplier.customerCode.join(", ");

        const deliveryTerm = document.createElement("li");
        deliveryTerm.textContent = supplier.deliveryTerm.join(", ");

        const paymentTerm = document.createElement("li");
        paymentTerm.textContent = supplier.paymentTerm.join(", ");

        const pic = document.createElement("li");
        pic.textContent = supplier.pic;

        const productDes = document.createElement("li");
        productDes.textContent = supplier.productDes.join(", ");

        item.appendChild(name);
        item.appendChild(code);
        item.appendChild(deliveryTerm);
        item.appendChild(paymentTerm);
        item.appendChild(pic);
        item.appendChild(productDes);

        document.body.appendChild(item);
      });
    }
  } catch (error) {
    console.error("Error fetching suppliers:", error);
  }
}

// Call the function
checkSupplierInfo();
