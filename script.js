function productHandler(product, isIncrease){
    const productInput = document.getElementById(product +'-count');
    const productCount = parseInt(productInput.value);

    let productNewCount = 0;
    if(isIncrease === true){
        productNewCount = productCount + 1;
    }
    else if(isIncrease === false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;

    let productTotal = 0;
    if(product === 'phone'){
        productTotal = productNewCount * 1219;
    }
    else if(product === 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product +'-total').innerText ='$' + productTotal;
    calculatePrice();
};

function calculatePrice(){
    const phoneInput= document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

    const subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('sub-total').innerText ='$' + subTotal;
    const tax = Math.round(subTotal * .1);
    document.getElementById('tax-amount').innerText ='$' + tax;
    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText ='$' + grandTotal; 
};