
let ptag = document.getElementById("ptag")

let count = 0; // Initialize click count

function increaseAndShowCount() 
{
    if(count<7)
    {
        count++; // Increase count by 1
        // Update the content of the <p> tag to show the new count
        if(count == 1)
        {
        ptag.innerText = `I love You !`
        }else if(count == 7){
            ptag.innerText = `I love You Infinity ❤!`
        }else{
            ptag.innerText = `I love You ${count}`
        }
    }
}
