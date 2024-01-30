
$('#registered').validate({
    rules: {
        name : {
            required: true,
            minlength: 4,
            maxlength: 15
        },
        phone:  {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        email:  "required",
        zip:  {
            required: true,
            minlength: 6,
            maxlength: 6
        },
        city: "required",
        address: {
            required: true,
            minlength: 8,
            maxlength: 30
        }
    },
    messages: {
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        contact:  "Please enter mobile number",
        zip: {
            required: "Enter zip code"
        },
        city: "Enter your city name",
        address: {
            required: "Enter full address...",
          }
      }
});
  

console.log('okk');