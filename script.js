let btn = document.getElementById('change');

function getRandomColor()
{
    let word = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++)
    {
        color+=word[Math.floor(Math.random()*16)];
    }
    return color;
}

btn.addEventListener("click",function(){
    document.body.style.backgroundColor = getRandomColor();
});