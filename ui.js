class UI{
    outputResult=document.getElementById("outputResult");
    outputFirst=document.getElementById("outputFirst");
    outputSecond=document.getElementById("outputSecond");
    resultUI(result){  
        outputResult.value=result;
    }

    textUI(first,second){
        outputFirst.textContent=first;
        outputSecond.textContent=second;
    }

}