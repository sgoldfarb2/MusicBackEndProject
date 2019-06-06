$(function () {

  $('form').submit(function (e) {
    e.preventDefault();

    $.getJSON('api', updateFeedback)

    $.post("/api", {
      name: $("#name").val(),
      email: $("#email").val(),
      textarea: $("#message").val()
    }, updateFeedback)

  })


  function updateFeedback(data) {
    let msg = ""
    data.forEach(value => {
      msg += `<br>`
      msg += `<br>`
      msg += `<h6>${value.textarea}</h6>`
      msg += `<p>${value.name}</p>`
    });

    document.getElementById('comments').innerHTML = msg
  }


})
