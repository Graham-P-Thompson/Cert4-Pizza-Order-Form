// Graham Thompson Order_form_application 07/04/2023
/**
 * Application to get the total cost for the quantity of pizzas ordered
 * @version 2.0
 * @author Graham Thompson
 * @param {number} orderTotal Number of pizzas to order
 * @returns {boolean} False to prevent form submission
 */

function checkQuantity(){

    // Set the price of a single pizza when multiple are bought together
    /**@constant {number} onePizza Price for a single pizza ordered */
    const onePizza = 6.45;

    /**@constant {number} twoPizzas Price for a single pizza when two pizzas are ordered */
    const twoPizzas = 12 / 2;

    /**@constant {number} threePizzas Price for a single pizza when three pizzas are ordered */
    const threePizzas = 14 / 3;
    
    let total = 0;

    const orderTotal = parseInt(document.getElementById("quantity").value);

    if (orderTotal <= 0){
        alert("Please enter a number greater than 0");
        return false;
        // used to stop calculation from being performed
    }
    else if (orderTotal === 1){
        total += onePizza;
    }
    else if (orderTotal === 2){
        total += twoPizzas * 2;
    }
    else if (orderTotal === 3){
        total += threePizzas * 3;
    }
    else if (orderTotal > 3){
        let remainder = orderTotal % 3;
        // OrderTotal - remainder will give the quantity of pizzas to be sold at the individual price when 3 are bought together
        let totalPizzasAtPriceForThree = orderTotal - remainder;
        
        // Calculate total price for all pizzas if order is divisable by 3
        total += threePizzas * totalPizzasAtPriceForThree;

        // Check remainder value and calculate correct price for remaining pizzas and add to total
        if (remainder % 2 === 0){
            total += twoPizzas * remainder;
        }
        else{
            total += onePizza * remainder;
        }
    }
    document.getElementById("message").innerHTML = (`The total is $${total.toFixed(2)}`);

return false;
}