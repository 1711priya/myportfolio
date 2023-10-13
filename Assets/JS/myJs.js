function download() {
    window.open('https://drive.google.com/file/d/1fdr9o2PaLPCZreh7qgaLlM4KscCx6iYG/view?usp=drive_link')

    // window.open('C:/Users/admin/Downloads/Resume Priyanka.pdf')
}

function formSubmit() {
    console.log("submit form");
    
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("phn").value="";
    document.getElementById("msg").value="";
    document.getElementById('phnerr').innerHTML = "";
    alert("Form submitted");
}


function validate() {
    let name = document.getElementById('fname').value;
    let phone = document.getElementById('phn').value;
    let nameLen = name.length;

    console.log(name);
    console.log("length is: " + nameLen);

    if (name == "" || phone == "") {
        if (name == "") {
            document.getElementById('nameerr').innerHTML = "Please enter valid name";
        } else if (nameLen < 5) {
            document.getElementById('nameerr').innerHTML = "Name should be atleast 5 characters long";
        }
        else if (phone == "") {
            document.getElementById('phnerr').innerHTML = "Please enter valid number";
            document.getElementById('nameerr').innerHTML = "";
        }

    }

}

