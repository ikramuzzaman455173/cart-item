function increament(incre, pri, tot,itm,bg){
    var count = document.getElementById(incre);
    var price = document.getElementById(pri);
    var total = document.getElementById(tot);
    var item = document.getElementById(itm);
    var sebg = document.getElementById(bg);


     // for increament
    if(count.value>=0){
        count.value++;
        var result = parseFloat(price.innerHTML)+ parseFloat(total.innerHTML);
         result = result.toFixed(2);
        total.innerHTML = result;


        sebg.style.background="#FCD8CC";

        var result2 = 1 + parseInt(item.innerHTML);
        item.innerHTML = result2;
    }
}

// for minus
function decreament(decre,pri,tot,itm,bg){
    var count = document.getElementById(decre);
    var price = document.getElementById(pri);
    var total = document.getElementById(tot);
    var item = document.getElementById(itm);
    var sebg = document.getElementById(bg);

    if(count.value<=0){
        sebg.style.background="#FCD8CC";
        count.value=0;
        alert("items number cann't negative");

    }
    else{
        count.value--;
        var result = parseFloat(total.innerHTML) - parseFloat(price.innerHTML);
        result = result.toFixed(2);
        total.innerHTML = result;

        var result2 = parseInt(item.innerHTML) - 1 ;
        item.innerHTML = result2;
    }
}


// Product Item Scroll Effect Add

// const cartContainer = document.querySelector('.shopping-cart-container');

// // Get the "down" and "up" button elements
// const downBtn = document.querySelector('#down-btn');
// const upBtn = document.querySelector('#up-btn');

// // Define the amount to scroll per click (adjust this value as needed)
// const scrollAmount = 100;

// // Add a click event listener to the "down" button
// downBtn.addEventListener('click', () => {
//   // Scroll down by the defined amount
//   cartContainer.scrollBy(0, scrollAmount);

//   // Hide the last item in the cart
//   const lastItem = cartContainer.lastElementChild;
//   lastItem.style.display = 'none';
// });

// // Add a click event listener to the "up" button
// upBtn.addEventListener('click', () => {
//   // Scroll up by the defined amount
//   cartContainer.scrollBy(0, -scrollAmount);

//   // Hide the first item in the cart
//   const firstItem = cartContainer.firstElementChild;
//   firstItem.style.display = 'none';
// });


function scrollBottom() {
    // // Get the last item in the container
    // let container = document.getElementById("shopping-cart-container");
    // let lastItem = container.lastElementChild;

    // // Scroll to the last item
    // lastItem.scrollIntoView({behavior: "smooth"});

    // // Hide the bottom button
    // document.getElementById("bottomBtn").style.display = "none";

    // // Show the top button
    // document.getElementById("topBtn").style.display = "block";
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
        });
}

function scrollUp() {
    // // Get the first item in the container
    // let container = document.getElementById("shopping-cart-container");
    // let firstItem = container.firstElementChild;
    // window.scrollTo({ behavior: 'smooth' })

    // // Scroll to the first item
    // firstItem.scrollIntoView({behavior: "smooth"});

    // // Hide the top button
    // document.getElementById("topBtn").style.display = "none";

    // // Show the bottom button
    // document.getElementById("bottomBtn").style.display = "block";
    // // window.scrollTo({ top: 0, behavior: 'smooth' })
    // // document.documentElement.scrollTop = 0;
    // // document.body.scrollTop = 0;


    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
        });

}

