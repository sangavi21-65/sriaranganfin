function submitdocument(){
    const forms = document.getElementById('contactpageform').value;    
    const myname = document.getElementById('firstname').value;    
    const required = document.getElementById('emailid').value;
    const contact = document.getElementById('phone').value;
    const mycom = document.getElementById('office').value;
    const choose = document.getElementById('filedoc').value;
    const textarea = document.getElementById('message').value;

    const userinfo ={
        contactpageform:forms,
        firstname:myname,
        email:required,
        phone:contact,
        office:mycom,
        filedoc:choose,
        message:textarea
    };

 localStorage.setItem("userenrty",JSON.stringify(userinfo));

 console.log("Datasaved:", userinfo)
 
 alert("Saved information successfully !!");

}