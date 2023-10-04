function SendMail() {

    var serverID = "service_aa4w9jp";
    var templateID = "template_og6394e";

    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

    emailjs.send(serverID, templateID, params).then(function (res) {
        Swal.fire('Success!', 'Your feedback sent to gmail', 'success');
        document.getElementById("contact-form").reset();
    })
}