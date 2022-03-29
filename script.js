
var firstname =label("label","for","firstname","Firs Name : ");
var br= document.createElement("br");
var finput=inputtype("input","type","text","id","firstname")

var lastname =label("label","for","lastname","Last Name : ");
var linput=inputtype("input","type","text","id","lastname")

var email =label("label","for","email","Email : ");
var einput=inputtype("input","type","email","id","email")

var password =label("label","for","password","Password : ");
var pinput=inputtype("input","type","password","id","password")

var btn = document.createElement("button");
btn.innerHTML="Submit";

document.body.append(firstname,finput);
document.body.append(br.cloneNode());
document.body.append(lastname,linput);
document.body.append(br.cloneNode());
document.body.append(email,einput);
document.body.append(br.cloneNode());
document.body.append(password,pinput);
document.body.append(br.cloneNode());
document.body.append(btn);





function label(elementname,attribute,attrvalue,value) {
    var ele=document.createElement(elementname);
    ele.setAttribute(attribute,value);
    ele.innerHTML=value;
    return ele;
}

function inputtype(elementname,attribute,attrvalue,attr1,attr2) {
    var ele= document.createElement(elementname);
    ele.setAttribute(attribute,attrvalue);
    ele.setAttribute(attr1,attr2);
    return ele;
}

