
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function() {
        let productId = this.getAttribute('data-product-id');
        // Lógica para agregar el producto al carrito
        console.log("Producto añadido al carrito: " + productId);
    });
});
