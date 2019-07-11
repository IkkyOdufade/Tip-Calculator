
calculateTip =()=>{
    console.log("im tired")
    let billAmt=Number(document.getElementById("billAmt").value);
    let serQuality=Number(document.getElementById("serQuality").value);
    let noPeople=Number(document.getElementById("noPeople").value);

    console.log(billAmt)
    console.log(serQuality)
    console.log(noPeople)
if (billAmt===""||serQuality===0){
window.alert(`You have to enter a value`)
return; }

if(noPeople===""|| noPeople<=1){
    noPeople===1;
    document.getElementById("each").style.display="none";
}else{
    document.getElementById("each").style.display="block";
}

let total = (billAmt*serQuality)/noPeople;
console.log(total)
total=Math.round(total*100/100)
total=total.toFixed(2);

document.getElementById("totalTip").style.display="block";
document.getElementById("tipAmt").innerHTML=total;

}
document.getElementById("totalTip").style.display= "none";
document.getElementById("tipAmt").style.display= "none";

document.getElementById("button").addEventListener('click',(e)=>{
    e.preventDefault()
})





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Iqmah's Tip Calculator</title>
</head>
<body>
    <div id="container">
    <form>
        <div id="calculator">
    <h1>Tip Calculator</h1>
<label>How much was your bill?
    <br>$<input type="number"  id="billAmt" required>
</label><br>
<label id="rateSer" required>
   How was your service? 
<br><select type="number">
    <option disabled selected value="0">Choose a value</option>
    <option  value="0.1">10% &#8211 Poor</option>
    <option  value="0.2">20% &#8211 Fair</option>
    <option  value="0.3">30% &#8211 Good</option>
    <option  value="0.4">40% &#8211 Excellent</option>
</select>
</label><br>
<label id="noPeople">How many people are paying for the bill? 
    <input type="number"> 
</label><br>

<button id="button" type="submit">Calculate </button>

<sup id="tip">$<span>0.00</span></sup>
</form>
</div> <!--end of calculator-->
</div> <!--end of the container-->

<script>
calculateTip=()=>{
    let billAmount = document.getElementById("billAmt").value;
    let serQuality = document.getElementById("rateSer").value;
    let totalPeople = document.getElementById("noPeople").value;

    if(billAmount==0||serQuality==0){
        window.alert("Please enter a value!!")
        return;
    }
    if(noPeople==0||noPeople<=1){
        noPeople==1
    }
    let total = (billAmount*serQuality)/totalPeople;
    total = Math.round(total*100/100)
    total=total.toFixed(2)

    document.getElementById("tip").style.display="block"

}
document.getElementById("tip").style.display="none";


document.getElementById("button").addEventListener ("click", (e)=>{
e.preventDefault()
calculateTip()
})
// <!----end of calculateTip--->


</script>
</body>

</html>