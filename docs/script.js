function addProduct() {
    let name = document.getElementById("productName").value;
    let qty = document.getElementById("quantity").value;
    let minQty = document.getElementById("minQuantity").value;

    if (name === "" || qty === "" || minQty === "") {
        alert("Please fill all fields");
        return;
    }

    let statusText;
    let statusClass;

    if (qty < minQty) {
        statusText = "Low Stock ⚠️";
        statusClass = "low";
    } else {
        statusText = "In Stock ✅";
        statusClass = "ok";
    }

    let table = document.getElementById("inventoryTable");

    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = qty;
    row.insertCell(2).innerText = minQty;

    let statusCell = row.insertCell(3);
    statusCell.innerText = statusText;
    statusCell.className = statusClass;

    // Clear inputs
    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("minQuantity").value = "";
}
