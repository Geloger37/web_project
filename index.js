function get_rank() {
    
}

$(document).ready(() => {
	$("#navbarDropdown").hide()
    $("#form-repair").hide()
    $("#student-form-singup").hide()
    $("#boss-form-singup").hide()
    
})

$("#settings").click(() => {
    
})

$("#enter").click(() => {
    $.post("auth.php",
           {
               login : $.trim($("input[id='inputEmail']").val()),
                pass : $.trim($("input[type='password']").val())
           },
           (data, status) => {
               if(data != 0) {
                   $("#form-signin").hide()
                   $("#form-repair").hide()
                   $("#student-form-singup").hide()
                   $("#boss-form-singup").hide()
               }
           }
    )
})

$("#repair").click(() => {
    $("#form-repair").show()
    $("#form-signin").hide()
    $("#form-buttons").hide()
    $("#student-form-singup").hide()
    $("#boss-form-singup").hide()
})

$("#student").click(() => {
    $("#navbarDropdown").hide()
    $("#form-repair").hide()
    $("#form-signin").hide()
    $("#form-buttons").hide()
    $("#boss-form-singup").hide()
    $("#student-form-singup").show()
})

$("#boss").click(() => {
    $("#navbarDropdown").hide()
    $("#form-repair").hide()
    $("#form-signin").hide()
    $("#form-buttons").hide()
    $("#boss-form-singup").hide()
    $("#student-form-singup").show()
})

$("#student_signup").click(() => {
    $.post("signup_user.php",
           {
               login : $.trim($("input[id='inputEmail']").val()),
                pass : $.trim($("input[type='password']").val())
           },
           (data, status) => {
               $("#form-signin").show()
           }
    )
    $("#navbarDropdown").hide()
    $("#form-repair").hide()
    $("#form-signin").hide()
    $("#form-buttons").hide()
    $("#boss-form-singup").hide()
    $("#student-form-singup").show()
})


$("#boss_signup").click(() => {
    $.post("boss_signup.php",
           {
               login : $.trim($("input[id='inputEmail']").val()),
                pass : $.trim($("input[type='password']").val())
           },
           (data, status) => {
               $("#form-signin").show()
           }
    )
    $("#navbarDropdown").hide()
    $("#form-repair").hide()
    $("#form-signin").hide()
    $("#form-buttons").hide()
    $("#boss-form-singup").hide()
    $("#student-form-singup").show()
})
