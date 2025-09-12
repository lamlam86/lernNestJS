const bt = document.getElementById("bt1")
const name1 = document.getElementById("name")
function handleclick()
{
    console.log(name1.value)
    document.getElementById("mess").innerHTML = name1.value
    localStorage.setItem("1",name1.value)
}
bt.addEventListener("click",handleclick)