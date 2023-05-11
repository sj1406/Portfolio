(function ($) {
    "use strict"

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    })

    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true,
            onComplete: function(self) { self.cursor.remove(); }
           
        });
    }
})(jQuery);


function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_z3m8ymj";
    const templateID = "template_tabjx3n";


    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent successfully")
            }
        )
        .catch((err) => console.log(err));
}


$(document).ready(function() {
    $('#portfolio-flters li').click(function() {
        var filter = $(this).attr('data-filter');

        $('#portfolio-flters li').removeClass('active');
        $(this).addClass('active');

        if (filter == '*') {
            $('.portfolio-item').show();
        } else {
            $('.portfolio-item').not(filter).hide();
            $('.portfolio-item').filter(filter).show();
        }
    });
});
