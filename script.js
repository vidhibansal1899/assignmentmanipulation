// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');
    const sortPriceBtn = document.getElementById('sort-price');
    const sortRatingBtn = document.getElementById('sort-rating');

    let products = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const rating = parseFloat(document.getElementById('product-rating').value);

        products.push({ name, price, rating });
        form.reset();
        updateGraphs();
    });

    sortPriceBtn.addEventListener('click', () => {
        products.sort((a, b) => b.price - a.price);
        updateGraphs();
    });

    sortRatingBtn.addEventListener('click', () => {
        products.sort((a, b) => b.rating - a.rating);
        updateGraphs();
    });

    function updateGraphs() {
        priceGraph.innerHTML = '';
        ratingGraph.innerHTML = '';

        products.forEach(product => {
            const priceBar = document.createElement('div');
            priceBar.className = 'bar';
            priceBar.style.width = `${product.price * 10}px`;
            priceBar.style.backgroundColor = '#007bff';
            priceBar.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            priceGraph.appendChild(priceBar);

            const ratingBar = document.createElement('div');
            ratingBar.className = 'bar';
            ratingBar.style.width = `${product.rating * 20}px`;
            ratingBar.style.backgroundColor = '#28a745';
            ratingBar.textContent = `${product.name} - ${product.rating.toFixed(1)}`;
            ratingGraph.appendChild(ratingBar);
        });
    }
});
