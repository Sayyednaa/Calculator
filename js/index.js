let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
         
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        // else if (buttonText='Back'){
        //     // screenValue  =screenValue-1
        //     screen.value=screenValue
        //     // console.log(buttonText)

        // }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

