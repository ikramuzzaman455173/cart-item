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