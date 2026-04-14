
let cart = [];

// Función para seleccionar talla y color (Efecto visual)
document.querySelectorAll('.size span, .color span').forEach(item => {
    item.addEventListener('click', function() {
        // Quitar selección previa en el mismo grupo
        this.parentElement.querySelectorAll('span').forEach(s => s.style.border = "none");
        // Marcar el seleccionado
        this.style.border = "2px solid #ff4500";
        this.dataset.selected = "true";
    });
});

function addToCart(event, name, price) {
    // 1. Evitamos que la página se recargue o se mueva
    event.preventDefault();

    // 2. Buscamos la tarjeta (card) donde se hizo clic
    const card = event.target.closest('.card');

    // 3. Buscamos la talla y color seleccionados DENTRO de esa tarjeta
    const selectedSize = card.querySelector('.size span[style*="solid"]');
    const selectedColor = card.querySelector('.color span[style*="solid"]');

    // Validación: Si no eligió talla o color, avisamos
    if (!selectedSize || !selectedColor) {
        alert("Por favor, selecciona una talla y un color antes de comprar.");
        return;
    }

    // 4. Creamos el objeto del producto
    const product = {
        name: name,
        price: price,
        size: selectedSize.innerText,
        // Aquí tomamos el color (puedes usar un atributo data o el color de fondo)
        color: selectedColor.dataset.color || "Estándar" 
    };

    // 5. Agregamos al carrito y actualizamos
    cart.push(product);
    updateCartUI();
    
    // Opcional: Abrir el carrito automáticamente para que el usuario vea que se agregó
    toggleCart(); 
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');
    
    if(cartCount) cartCount.innerText = cart.length;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => { // Usamos 'index' para saber cuál borrar
        total += item.price;
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        itemDiv.innerHTML = `
            <div style="flex-grow: 1;">
                <strong>${item.name}</strong><br>
                    <small>Talla: ${item.size} | Color: ${item.color}</small>
                        <p style="font-weight: bold;">$${item.price.toLocaleString()}</p>
            </div>
        <button class="btn-eliminar" onclick="removeFromCart(${index})" title="Eliminar producto">
        <i class="fa-solid fa-trash"></i>
        </button>
`;
        
        cartItems.appendChild(itemDiv);
    });

    totalPrice.innerText = total.toLocaleString();
}

// NUEVA FUNCIÓN: Para eliminar productos
function removeFromCart(index) {
    // Eliminamos el elemento del array usando su posición
    cart.splice(index, 1);
    // Actualizamos la vista
    updateCartUI();
}

// NUEVA FUNCIÓN: Para eliminar productos
function removeFromCart(index) {
    // Eliminamos el elemento del array usando su posición
    cart.splice(index, 1);
    // Actualizamos la vista
    updateCartUI();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    
    // Si el modal existe, le ponemos o quitamos la clase 'active'
    if (modal) {
        if (modal.style.display === "block") {
            modal.style.display = "none";
        } else {
            modal.style.display = "block";
            // Forzamos que se vea al frente
            modal.style.zIndex = "10000"; 
        }
    } else {
        console.error("No se encontró el elemento cart-modal");
    }
}