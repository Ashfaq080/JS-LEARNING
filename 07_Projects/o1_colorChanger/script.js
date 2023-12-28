const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function  (button) {
    // console.log(button);
    button.addEventListener('click', function (ele) {
        console.log(ele);
        console.log(ele.target);

        switch (ele.target.id) {
            case 'grey':
                body.style.backgroundColor = ele.target.id
                
                break;
            case 'white':
                body.style.backgroundColor = ele.target.id
                
                break;
            case 'blue':
                body.style.backgroundColor = ele.target.id
                
                break;
            case 'yellow':
                body.style.backgroundColor = ele.target.id
                break;
        
            default:
                body.style.backgroundColor = 'black',
                body.style.color = 'white'
                break;
        }
    })
})