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
function scrollUp() {
    // Get the first item in the container
    let container = document.getElementById("shopping-cart-container");

    container.scrollTo({ top:0,behavior: 'smooth' })

    // Hide the top button
    document.getElementById("upArro").style.display = "none";

    // Show the bottom button
    document.getElementById("downArro").style.display = "block";

}



function scrollBottom() {
    // Get the last item in the container
    let container = document.getElementById("shopping-cart-container");
    let lastItem = container.lastElementChild;

    // Scroll to the last item
    lastItem.scrollIntoView({behavior: "smooth"});

    // Hide the bottom button
    document.getElementById("downArro").style.display = "none";

    // Show the top button
    document.getElementById("upArro").style.display = "block";

}

