const abc = "abcdef2ghi3j1klmn4opqr5tuvwx6yz";
let txtSub;
        let rndChar = "";
        while (rndChar.length < 5) {
            rndChar += abc[Math.floor(Math.random() * abc.length)];
        }
document.getElementById("randomValue").textContent = rndChar;

document.getElementById("btnSub").onclick = function(){
    txtSub = document.getElementById("textBox").value;
    if(txtSub==rndChar){
        window.location.replace("http://127.0.0.1:5500/pages/transition.html");;
    }
    else{
        window.alert("It DOESN'T WORKS");
        console.log('hi');
        location.reload();
    }
}



