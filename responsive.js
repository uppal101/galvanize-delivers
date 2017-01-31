let sum = 0;
let subtotal_amount = document.getElementById('subtotal_amount');
let tax_td = document.getElementById('tax_amount');
let tax_amount = 0;
let total_td = document.getElementById('total_amount');
let total_amount = 0;




// create responsive add button that appears on the table
burger_button.addEventListener('click', function(){
  let tr = order_list.insertRow(1);
  let item = tr.insertCell();
  item.innerHTML ='Royale with Cheese';
  let price = tr.insertCell();
  price.innerHTML='$8.99'
  sum += 8.99;
  subtotal_amount.innerHTML = `$${sum.toFixed(2)}`;
  tax_amount = sum * .15;
  tax_td.innerHTML = `$${tax_amount.toFixed(2)}`;
  total_amount = (sum + tax_amount);
  total_td.innerHTML =`$${total_amount.toFixed(2)}`;
})

ice_cream_sandwich_button.addEventListener('click', function(){
  let tr = order_list.insertRow(1);
  let item = tr.insertCell();
  item.innerHTML = 'Ice Cream Biscuits';
  let price = tr.insertCell();
  price.innerHTML = '$7.99';
  sum += 7.99;
  subtotal_amount.innerHTML = `$${sum.toFixed(2)}`;
  tax_amount = sum * .15;
  tax_td.innerHTML = `$${tax_amount.toFixed(2)}`;
  total_amount = (sum + tax_amount);
  total_td.innerHTML = `$${total_amount.toFixed(2)}`;
})

ribs_button.addEventListener('click',function(){
  let tr = order_list.insertRow(1);
  let item = tr.insertCell();
  item.innerHTML ='Smoked Swine';
  let price = tr.insertCell();
  price.innerHTML ='$14.99';
  sum += 14.99;
  subtotal_amount.innerHTML = `$${sum.toFixed(2)}`;
  tax_amount = sum * .15;
  tax_td.innerHTML = `$${tax_amount.toFixed(2)}`;
  total_amount = (sum + tax_amount);
  total_td.innerHTML = `$${total_amount.toFixed(2)}`;
})

pizza_button.addEventListener('click', function(){
  let tr = order_list.insertRow(1);
  let item = tr.insertCell();
  item.innerHTML = 'Arugula pie';
  let price = tr.insertCell();
  price.innerHTML = '$11.99';
  sum += 11.99;
  subtotal_amount.innerHTML = `$${sum.toFixed(2)}`;
  tax_amount = sum * .15;
  tax_td.innerHTML = `$${tax_amount.toFixed(2)}`
  total_amount = (sum + tax_amount);
  total_td.innerHTML = `$${total_amount.toFixed(2)}`;
})


//toast message
let orderButton = document.getElementById('download-button');

 function validation(){
  if(name =="" || phone == "" || address == ""){
      alert('please fill in all fields');
      return false;
  } else {
  alert("Thank you for your order");
  return true;
  }
};
