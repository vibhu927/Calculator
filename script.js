
var display=document.getElementById('enter');
var buttons=Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e)=>{
       switch(e.target.innerText){
        case 'OFF':
            display.value=''
            document.getElementById('enter').style.backgroundColor='black'
            e.target.innerText="ON"
            break
        case "ON":
            document.getElementById('enter').style.backgroundColor='#626262'
            e.target.innerText="OFF"
            break
        case 'AC':
            display.value=''
            break
        case "=":
            display.value=eval(display.value)
            break
        
        default:
            display.value += e.target.innerText

       }
      });
});


console.log("click hogya")
        