/**
 * Created by jkala on 22-Apr-16.
 */
var price;
var quantity;
var total;

price = 10;
quantity = 14;
total = price*quantity;
var el = document.getElementById('cost');
el.textContent = '$' + total;
