$("form.form-top").submit(function(e) {
    e.preventDefault();
    var email = $(".email-top").val();
    if (email.trim().length > 0) {
        submit(email);
    }
});

$("form.form-bottom").submit(function(e) {
    e.preventDefault()
    var email = $(".email-bottom").val()
    if (email.trim().length > 0) {
        submit(email);
    }
});

function submit(email) {
    $.post('https://script.google.com/macros/u/0/s/AKfycbzFvk9t35n_CXW-K-4j-MF6ct-gzStadRrh27cNeQu1UGJbopiO/exec',
        {
            'email': email
        }, function(){
            console.log("success bottom");
        }, 'json');
}