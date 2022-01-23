var SRow=null;
let Submit = document.querySelector(".btn-danger");
Submit.addEventListener("click", flow);

function flow(){
    append();
    eraseData();
}

function append(){
    let firstName = document.querySelector("#first-name");
    let lastName = document.querySelector("#last-name");
    let address = document.querySelector("#address");
    let pincode = document.querySelector("#pincode");
    let state = document.querySelector("#state");
    let country = document.querySelector("#country");

    var ele1 = document.getElementsByClassName('radio');
    let radio="";      
    
    if(ele1[0].checked){
        radio=document.querySelector("#male").innerHTML;
    }
    if(ele1[1].checked){
        radio=document.querySelector("#female").innerHTML;
    } 
    

    var ele2 = document.getElementsByClassName('check');
    let check="" ;            

    if(ele2[0].checked)
        check+=document.querySelector("#apple-1").innerHTML+" ";
    if(ele2[1].checked)
        check+=document.querySelector("#mango-1").innerHTML+" ";
    if(ele2[2].checked)
        check+=document.querySelector("#grape-1").innerHTML+" ";
    if(ele2[3].checked)
        check+=document.querySelector("#cherry-1").innerHTML+" ";
    if(ele2[4].checked)
        check+=document.querySelector("#guava-1").innerHTML+" ";
    
    var tableBody = document.querySelector(".table-body");
    var tableRow = "";
     
    if(SRow==null){
        var tableRow =`<tr>
        <td>${firstName.value}</td>
        <td>${lastName.value}</td>
        <td>${address.value}</td>
        <td>${pincode.value}</td>
        <td>${state.value}</td>
        <td>${country.value}</td>
        <td>${radio}</td>
        <td>${check}</td>
        </tr>`
        SRow=1;
    }
    else{
        var tableRow = `<tr>
        <td>${firstName.value}</td>
        <td>${lastName.value}</td>
        <td>${address.value}</td>
        <td>${pincode.value}</td>
        <td>${state.value}</td>
        <td>${country.value}</td>
        <td>${radio}</td>
        <td>${check}</td>
        </tr>`
    }

    tableBody.innerHTML += tableRow;
}

function eraseData(){
    document.querySelector("#first-name").value = "";
    document.querySelector("#last-name").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#pincode").value = "";
    document.querySelector("#state").value = "";
    document.querySelector("#country").value = "";
}
