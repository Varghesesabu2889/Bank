//create account - register a new account
function register(){

    //1.fetch the values from the html
    uname=registerr_name.value;
    accno=registerr_acno.value;
    pswd=registerr_pwd.value;

console.log(accno,uname,pswd);

//2. create acno details object
accdetails={
    accno,
    uname,
    pswd,
    balance:0
}

//3 check if accno is already present in the
if(accno in localStorage){
    alert("Account already exists");
}
//to set details in local storage
else{
    localStorage.setItem(accno,JSON.stringify(accdetails));
alert("registration successful")
window.location= "./login.html";
}
}

 



//login


function login() {
    //1. fetch the details 
    acno=register_acno.value;
    pswd=register_pwd.value;
    console.log(acno,pswd);
   
   
   
    //2.check if the accno is present in local storage
   
    if(acno in localStorage)
    {
       accnodetails=JSON.parse(localStorage.getItem(acno));
       if(pswd==accnodetails.pswd)
       {
           alert("login successfully")
           window.location= "./website.html";
       }
       else{
           alert("wrong password");
       }
   }
       else{
           alert("account not found");
       }
    }

//deposit
    let amnt =0;
    let withd=0;
    let total_balance=0;
    
    function deposit(){
        amnt = deposit_amnt.value;
        acno = deposit_acno.value;
        amnt = Math.floor(amnt);

        if(acno in localStorage){
            accnodetails=JSON.parse(localStorage.getItem(acno))
if(acno==accnodetails.acno && amnt <=0 ){
    alert("please enter a valid amount");
}
else{
accnodetails.balance += amnt;
localStorage.setItem(acno,JSON.stringify(accnodetails));
alert("Your amount is added sucessfully")
document.getElementById("balance").innerHTML=`<div style="color:chartreuse;"font weight:500px> ${amnt} is added to your account</div>`  
}
        }
        else{
            alert("Incorrect account no")
        }
    
    }
// withdraw
function withdraww(){
    withdraw = withdraw_amnt.value;
    acno = withdraw_acno.value;
    withdraw = Math.floor(withdraw);
    if(acno in localStorage){
        accnodetails=JSON.parse(localStorage.getItem(acno))
        if(acno==accnodetails.acno && accnodetails.balance <=0 ){
            alert("please enter a valid amount");
            }
            else{
                if(withdraw > accnodetails.balance){
                    alert("insufficient balance");
                    }
                    else{
                        accnodetails.balance -= withdraw;
                        localStorage.setItem(acno,JSON.stringify(accnodetails));
                            alert("Your amount is withdrawn sucessfully")
     document.getElementById("a").innerHTML=`<div style="color:yellow";"font weight:500px"> Your current balance is ${accnodetails.balance}</div>`  

                            }
                            }
                            }
                            else{
                                alert("Incorrect account no")
                                }
                                }

function logout(){
    window.location="./index.html";
    
}

                                


function lg(){
    window.location="./login.html"
}






