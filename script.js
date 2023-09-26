document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;

    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = `
        <h2>Order Summary</h2>
        <p>Name: ${name}</p>
        <p>Food: ${food}</p>
        <p>Quantity: ${quantity}</p>
    `;
});
