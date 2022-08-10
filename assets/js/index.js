const emailReceiver = "farisafdhilfawwaz3.5.11@gmail.com";

function getData() {
    // DOM = document object model
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!name) {
        alert("nama tidak boleh kosong");
    }
    if (!email) {
        alert("email tidak boleh kosong");
    }
    if (!phone) {
        alert("phone tidak boleh kosong");
    }
    if (!message) {
        alert("message tidak boleh kosong");
    }

    const a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}, ${subject}, ${message}, this my phone number ${phone}`
    a.click()


    // let getData = {
    //     name: name,
    //     email: email,
    //     phoneNumber: phone,
    //     subject: subject,
    //     message: message,
    // };

}


// let btn = document.getElementById("btn-alert")
// btn.click()

// function showAlert() {
//     alert("Please, fill in your data!")   }