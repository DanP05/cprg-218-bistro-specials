shake.addEventListener("click",function(){
    console.log("Daniel Pena");
    let response = Math.random();
    console.log(response);
    response = Math.floor(Math.random()*11);
    console.log(response);
});

if(response==0){
    document.getElementById('output').innerHTML ="Yes indeed";
}
if(response==1){
    output.innerHTML ="Reply hazy";
}
if(response==3){
    output.innerHTML ="Very doubtful";
}