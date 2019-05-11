
var total = [];


var inpt1 = document.getElementById('input1');
var output = document.getElementById('output');
var sum = document.getElementById('sum');
var subtract = document.getElementById('subtract');

sum.addEventListener('click', getTotal);
subtract.addEventListener('click', getNeg)



function getTotal() {
        total.push(parseInt(inpt1.value)); 
        output.innerHTML = total.reduce(function(sum1, sum2) {
            return sum1 + sum2;
        });
        if(output.innerHTML > 0) {
            output.style.color = "black"
        }
        
        
        
       
    }

    function getNeg() {
        total.push(parseInt(inpt1.value * -1));
        console.log(total)
        output.innerHTML -= input1.value;
        if(output.innerHTML < 0) {
            output.style.color = "red";
        }
        

        // var sum1 = 0;
        // evt.preventDefault();
        //     total.push(parseInt(inpt1.value * -1)); 
        //     console.log(total)
        //     var newT = total.reduce(function(sum1, sum2) {
        //         return sum1 + sum2;

        // if(output.innerHTML < 0){
        //  output.style.color = "red"
        // };
    // });
    // output.innerHTML = newT;
}
