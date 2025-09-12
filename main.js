const score = [10,19,2,29,30,11,18,33]

const scoreThan18 = score.filter(function(value,index)
{
    return value > 18;
})
console.log(scoreThan18)
let testOj = {
    "age" : 19,
    "name" : "NguyenMinhLam",
    "NoiSinh" : "BinhThuan"
}
for(let key in testOj)
{
    console.log(key);
}