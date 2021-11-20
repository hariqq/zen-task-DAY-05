 function removeDuplicates(new_array){  
        var collect = [];  
        for(var value of new_array){  
            if(collect.indexOf(value) === -1){  
                collect.push(value);  
            }  
        }  
        return collect;  
    }  
    var colors = ["green","black","black"];  
    console.log(removeDuplicates(colors));