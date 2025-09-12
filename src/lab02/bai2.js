function tinhTrunBinh(toan,anh,van)
{
    let tb = (toan+anh+van)/3;
    return tb;
}
function xeploai(diemtb)
{
    if(diemtb >= 9){
       return "Xuat sac";
    }
    else if(diemtb>=8)
    {
        return "Gioi";
    }
    else if(diemtb>=7)
    {
        return "Kha";
    }
    else
    {
        return "Trung binh";
    }
}
let mytb = tinhTrunBinh(9,9,9);
console.log(mytb);
console.log(xeploai(mytb));