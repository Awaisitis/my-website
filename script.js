document.addEventListener('DOMContentLoaded', function(){
    
    console.log('Document loaded');
    
    
    let form = document.getElementById('inputForm');


    form.addEventListener('submit', function(event){
                event.preventDefault(); // ⛔ Prevents page reload
        // let area = document.getElementById('quantity');
        let area = parseFloat(document.getElementById('quantity').value);

        let noOfBricks = area* 8.6;
        let cement = 1.46*area/50;
        let sand = 9.66*area;
        console.log(area.value);
        let cementBag = 50;


        document.getElementById('result1').innerText = noOfBricks + " bricks";
        document.getElementById('result2').innerText = cement + " bags of cement";
        document.getElementById('result3').innerText = sand + " kg of sand";



    })

})
