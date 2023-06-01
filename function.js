
var basic0_9 = ['zero','one','two','three','four','five','six','seven','eight','nine'];

var basic10_19 = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

var med20_90 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

var dif100_m = ['hundred', 'thousand', 'millon'];

var num;
var response_nm;
var response_tm;
var hrs;
var min;

function number(){

    num = Math.floor(Math.random()*9000);

    document.getElementById("number").value = num;

}

function rs_number(){

    num = document.getElementById("number").value;


    if (num < 10 && num >= 0){

        response_nm = num09(num);

    }else if(num < 20 && num >= 10){

        response_nm = num919(num);
            
    }else if(num < 100 && num >=20 ){

        response_nm = num2099(num);

    }else if (num >= 100 && num <= 999 ){
        response_nm = num100999(num);   

    }else if (num >= 1000 && num <= 999999 ){
        response_nm = num10009999(num);   
    }


    document.getElementById("response-number").value = response_nm;

}

function time(){

    hrs = Math.floor(Math.random()*(13-1)+1);
    min = Math.floor(Math.random()*59);

    if(hrs == 0){
        hrs = 12;
        console.log(hrs)

    }

    document.getElementById("time").value = hrs+ " : " +min;

}

function rs_time(){
    

     if(hrs <= 9 ){
        

        response_tm = num09(hrs) + " : ";

        if(min != 0){
            if (min < 10 && min >= 0){

                response_tm = response_tm + num09(min);
    
        
            }else if(min < 20 && min >= 10){
        
                response_tm = response_tm + num919(min);
                
                    
            }else if(min < 100 && min >=20 ){
        
                response_tm = response_tm + num2099(min);
                console.log(response_tm)
        
            }
        }
        
        

    }else if(hrs >= 10){

        response_tm = num919(hrs) + " : ";

        if(min != 0){
            if (min < 10 && min >= 0){

                response_tm = response_tm + num09(min);
    
        
            }else if(min < 20 && min >= 10){
        
                response_tm = response_tm + num919(min);
                
                    
            }else if(min < 100 && min >=20 ){
        
                response_tm = response_tm + num2099(min);
                console.log(response_tm)
        
            }
        }

    }



    document.getElementById("response-time").value = response_tm;
    var str = cal_min(hrs,min)
    document.getElementById("response-otrtime").value = str;

}


function num09(num){
    var responsenum;

    for(let i = 0; i <= num; i++)
        responsenum = basic0_9[i];
    
    return responsenum;
}

function num919(num){
    let numeration = 0;
    var responsenum;

    for(let i = 10; i <= num; i++){
        responsenum = basic10_19[numeration];
        numeration = numeration+1;   
    }

    return responsenum;
}

function num2099(num){
    var responsenum;
    var numstr = num.toString();
        

        for(let i = 2; i <= 9; i++){
            let i_str = i;
            if(numstr.charAt(0) == i_str.toString()){
                responsenum = med20_90[i-2];
                break;
            }
        }

        for(let i = 0; i <= 9; i++){
            let i_str = i;
            if(numstr.charAt(1) == '0'){
                break;
            } else if(numstr.charAt(1) == i_str.toString() && numstr.charAt(1)!= '0'){
                responsenum = responsenum + ' ' + basic0_9 [i];
                break;
            }
        }

    return responsenum;
}

function num100999(num){
    var responsenum ;
    var numstr = num.toString();

        for(let i = 0; i <= 9; i++){
            let i_str = i;
            if(numstr.charAt(0) == i_str.toString() && numstr.charAt(0) != '0'){
                responsenum = basic0_9[i] + " hundred ";
              
              break;
            }
        }

        var compoundNumber = numstr.charAt(1) + numstr.charAt(2);

        responsenum = responsenum + num2099(parseInt(compoundNumber));
    
    return responsenum;

}

function num10009999(num){
    var responsenum;
    var numstr = num.toString();

        if(numstr.length == 4){

            for(let i = 0; i <= 9; i++){
                let i_str = i;
                if(numstr.charAt(0) == i_str.toString() && numstr.charAt(0) != '0'){
                    responsenum = basic0_9[i] + " thousand ";
                  
                  break;
                }
            }

        var compoundNumber = numstr.charAt(1)+numstr.charAt(2) + numstr.charAt(3)
        
        if(compoundNumber != '000'){

            let numth = parseInt(compoundNumber)


            if (numth < 10 && numth >= 0){

                responsenum = responsenum + ' ' + num09(numth);
        
            }else if(numth < 20 && numth >= 10){
        
                responsenum = responsenum + ' ' +  num919(numth);
                    
            }else if(numth < 100 && numth >=20 ){
        
                responsenum = responsenum + ' ' +  num2099(numth);
        
            }
            else if (numth >= 100 && numth <= 999 ){
                responsenum = responsenum + ' ' +  num100999(numth);   
        
            }

        }

        }
        /*else if(numstr.length == 5){

            var compoundNumber = numstr.charAt(0)+numstr.charAt(1)
            let numth = parseInt(compoundNumber)


            if(numth < 20 && numth >= 10){
        
                responsenum = responsenum + ' ' +  num919(numth) + " thousand ";
                    
            }else if(numth < 100 && numth >=20 ){
                
                console.log(num2099(numth))
                responsenum = responsenum + ' ' +  num2099(numth) + " thousand ";
        
            }

            

            compoundNumber = numstr.charAt(2)+numstr.charAt(3) + numstr.charAt(4)
        
            if(compoundNumber != '000'){

            let numth = parseInt(compoundNumber)


            if (numth < 10 && numth >= 0){

                responsenum = responsenum + ' ' + num09(numth);
        
            }else if(numth < 20 && numth >= 10){
        
                responsenum = responsenum + ' ' +  num919(numth);
                    
            }else if(numth < 100 && numth >=20 ){
        
                responsenum = responsenum + ' ' +  num2099(numth);
        
            }
            else if (numth >= 100 && numth <= 999 ){
                responsenum = responsenum + ' ' +  num100999(numth);   
        
            }

        }
            
        }
        else if(numstr.length == 6){
            
        }
*/
        
    
    return responsenum;

}

function cal_min(nm_hrs,nm_min){
    var response;
     
    if(nm_hrs < 10 ){
        console.log(10)

        if(nm_min == 0){

            response = num09(nm_hrs) + ' o clock';
    
        }else if(nm_min == 15){
    
            response = 'its a quarter after' + num09(nm_hrs);
            
    
        }else if(nm_min <=29 && nm_min >= 1 && nm_min != 15){
            if(nm_min <=9 && nm_min >= 1){

                response =  num09(nm_min) + ' after '+ num09(nm_hrs);

            }
            if(nm_min <=19 && nm_min >= 10){

                response =  num919(nm_min) + ' after '+ num09(nm_hrs);

            }
            if(nm_min <=29 && nm_min >= 20){

                response =  num2099(nm_min) + ' after '+ num09(nm_hrs); 

            }
    
       
    
        }else if(nm_min == 30){
    
            response = num09(nm_hrs) + ' thirty';
    
        }else if(nm_min <=59 && nm_min >= 31 && nm_min != 45){
    
            let res = 60 - nm_min;
            let hres = nm_hrs+1;

            console.log(res)
            console.log(hres)
            if(hres == 10)
            response =  num020(res) + ' to '+ ' ten ';
            else
            response =  num020(res) + ' to '+ num09(hres);

            console.log(hres)
    
        }else if(nm_min == 45){
            let hres = nm_hrs + 1;
            
            if(hres == 9)
                response = 'its a quarter to' + ' nine ';
            else    
                response = 'its a quarter to' + num09(hres);
            
            
    
        }
        
        

    }else if(nm_hrs > 9){

        console.log(11)

       
        if(nm_min == 0){
    
            response = num919(nm_hrs) + ' o clock';
            console.log('aqui')
    
        }else if(nm_min == 15){
    
            response = 'its a quarter after' + num919(nm_hrs);
            
    
        }else if(nm_min <=29 && nm_min >= 1 && nm_min != 15){
            if(nm_min <=9 && nm_min >= 1){

                response =  num09(nm_min) + ' after '+ num919(nm_hrs);

            }
            if(nm_min <=19 && nm_min >= 10){

                response =  num919(nm_min) + ' after '+ num919(nm_hrs);

            }
            if(nm_min <=29 && nm_min >= 20){

                response =  num2099(nm_min) + ' after '+ num919(nm_hrs); 

            }
    
    
        }else if(nm_min == 30){
    
            response = num919(nm_hrs) + ' thirty';
    
        }else if(nm_min <=59 && nm_min >= 31 && nm_min != 45){
    
            let res = 60 - nm_min;

            console.log(res)

            if(num919(nm_hrs+1) == '13' )
            response =  num020(res) + ' to '+ ' one' ;

            else
            response =  num020(res) + ' to '+ num919(nm_hrs+1) ;

    
        }else if(nm_min == 45){

            if(num919(nm_hrs+1) == '13' )
                response =  num2099(res) + 'its a quarter to '+ ' one' ;

            else    
                response = 'its a quarter to' + num919(nm_hrs+1);
            console.log(num09(nm_hrs+1))
            
    
       }


}
    

    return response;

}

function num020(num){
    var response

    if(num < 10)
        response =  num09(num);
    else if (num < 20)
        response =  num919(num);
    else 
        response =  num2099(num);

    
            
    return response
}