let display = document.getElementById('display');

let buttons = Array.from( document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){   //this is main function to display numbers//
            case 'C':   
                display.innerText = ''; //line 8 and line 9 is used to clear calculation //
                break;   //this break is used to  hidding C //
                 case '←':
                    if(display.innerText){
                        display.innerText = display.innerText.slice(0,-1);

                    }
                    
                    break;
                    case '=':
                        try{
                        display.innerText =eval(display.innerText);}
                        catch{
                            display.innerText='Error!';
                        }
                        break;
            default:
                display.innerText += e.target.innerText; //line 12 is work for adding number and disply on top//
        }

    });
});