

/* Declaring variables on large screens*/
let open = document.getElementById("open");
let close = document.getElementById("close");
let sidebar = document.getElementById("sidebar");
let container = document.getElementById("container");
let qty = document.getElementById('qty');
let incrementbtn = document.getElementById("inc");
let decrementbtn = document.getElementById("dec");
let add = document.getElementById("add");
let cartqty = document.getElementById("cart-count");
let qtyHeader = document.getElementById("qty-header");
let totalPrice = document.getElementById("total");
let checkout = document.getElementById("checkout");
let deleteCart = document.getElementById("delete");
let cartIcon = document.getElementById("cart-icon");

/* Declaring variables on small screens*/
let sideBarCounter = document.getElementById("mobile-counter");
let mobileQtyHeader = document.getElementById("mobile-qty-header");
let mobileTotalPrice = document.getElementById("mobile-total");
let mobilecheckout = document.getElementById("check");
let mobiledeleteCart = document.getElementById("mobile-delete");
let mobileCartIcon = document.getElementById("mobile-cart-icon");

let productPrice = 125;

let i = 0

        incrementbtn.addEventListener("click",function(){
            qty.value = ++i
        });

        decrementbtn.addEventListener("click" , function(){
                qty.value = --i

                if(qty.value < 0){
                    alert('You cannot add item to cart')
                    qty.value = 0
                }
        });

        add.addEventListener("click" , function(){
            cartqty.innerText = qty.value;
            qtyHeader.innerHTML = qty.value;
            mobileQtyHeader.innerHTML = qty.value;
            sideBarCounter.innerHTML = qty.value;
            let total = productPrice * qty.value;
            totalPrice.innerHTML = '$'+total;
            mobileTotalPrice.innerHTML = '$'+total;
            
            if(qty.value > 0){
                checkout.classList.remove("empty");
                mobilecheckout.classList.remove("empty");
            }
           
        });

        deleteCart.addEventListener("click", function(){
            checkout.classList.add("empty"); 
            qty.value = 0;
            cartqty.innerText = qty.value;
        })

        mobiledeleteCart.addEventListener("click", function(){
            mobilecheckout.classList.add("empty");
            qty.value = 0;
            sideBarCounter.innerHTML = qty.value;
        })
        cartIcon.addEventListener("click", function(){
            checkout.classList.toggle("visible");
        })

        mobileCartIcon.addEventListener("click", function(){
            mobilecheckout.classList.toggle("visible-checkout");
        })


        if (window.innerWidth< 769){
            container.classList.remove("container");
        }






function openn(){
        sidebar.classList.add("open");
}

function closee(){
    sidebar.classList.remove("open")
}

window.addEventListener("resize", function() {
    if (window.innerWidth < 769) container.classList.toggle("container");
  });


  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }