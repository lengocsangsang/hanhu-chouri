const supplierName = document.getElementById("supplier-name-input");

const customerCode = document.getElementById("customer-code-input");

const productDes = document.getElementById("product-des-input");

const supplierAddress = document.getElementById("supplier-address-input");

const supplierPic = document.getElementById("supplier-pic-input");

const SupplierPayment = document.getElementById("supplier-payment-input");

const SupplierDelivery = document.getElementById("supplier-delivery-input");

const protocol = window.location.protocol; // e.g., 'http:' or 'https:'
const host = window.location.host; // e.g., 'yourapp.herokuapp.com'

document
  .querySelector(".submit-button") // Assuming this class is assigned to the button
  .addEventListener("click", async function (e) {
    e.preventDefault(); // Prevent the default button action

    // Ensure input elements are correctly selected

    const supplierData = {
      name: supplierName.value,
      customerCode: [customerCode.value], // Assuming this is an array
      productDes: productDes.value,
      deliveryTerm: [SupplierDelivery.value], // Assuming this is an array
      pic: supplierPic.value,
      paymentTerm: [SupplierPayment.value], // Assuming this is an array
      address: supplierAddress.value,
    };

    console.log("createSupplierDoc.js - supplierData:", supplierData); // Log supplier data for debugging

    try {
      const response = await axios.post(
        `${protocol}//${host}/supplier/api/v1/supplierdoccreate`,
        supplierData
      );
      alert("Supplier created successfully!"); // Notify the user
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error creating supplier:", error.response);
    }
  });
