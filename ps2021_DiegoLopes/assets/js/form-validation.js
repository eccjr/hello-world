var xmlHttp;
var agradecimento;
if(window.XMLHttpRequest){
  xmlHttp=new XMLHttpRequest;
}
else{
  xmlHttp=new ActiveXObjext("Microsoft.XMLHTTP")
}

xmlHttp.open('GET','https://raw.githubusercontent.com/deigo-lps/hello-world/master/flexbox/success.txt');
xmlHttp.send();

xmlHttp.onreadystatechange=function(){
  if(xmlHttp.readyState==4&&xmlHttp.status==200)
    agradecimento=xmlHttp.responseText.split('\n')[parseInt(Math.random()*4)];
}

const form=document.getElementById("get_started_form");
const name=document.getElementById("input_name");
const phone=document.getElementById("input_number");
const email=document.getElementById("input_email");
const zip=document.getElementById("input_zip");

VMasker(phone).maskPattern("(99) 99999-9999");
VMasker(zip).maskPattern("99.999-999");

const regPhone=/^[(][0-9]{2}[)] [0-9]{5}[-]([0-9]{4}|[0-9]{3})$/;
const regEmail=/^([a-z0-9.-_]+)([@])([a-z]+)([.])([a-z]+)$/;
const regZip=/^[0-9]{2}[.][0-9]{3}[-][0-9]{3}$/;
form.addEventListener("submit",function(){
  event.preventDefault();
  if(regPhone.test(phone.value)&&regEmail.test(email.value)&&regZip.test(zip.value))
    alert(agradecimento+' '+name.value+"!");
  else {
    alert("Preencha os campos corretamente.")
  }
})
