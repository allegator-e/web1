$(function () {
    $('#send').on('click', function (event) {
        xyr()
        if(checkX(x, y, r)){
            $.ajax({
                type: "GET",
                url: "answer.php",
                data: {x: x, y: y, r: r},
                success: function (answer) {
                    $('.result').append(answer);
                }
            })
        }
        event.preventDefault()
    })
    $('#clear').on('click', function (event) {
            $.ajax({
                success: function () {
                    $('.result_php').remove();
                }
            })
        event.preventDefault()
    })
    $('.x_in').on('input', function (){
        xyr()
        checkX(x, y, r)
    })
    $('.y_in').on('input', function (){
        xyr()
        checkX(x, y, r)
    })
    $('.r_in').on('input', function (){
        xyr()
        checkX(x, y, r)
    })
})

function xyr(){
    x = $('.x_in').val()
    y = $('.y_in').val()
    r = $('input[name=r]:checked').val()
}

function checkX(x, y, r) {
    if (!x) {
        showError('<br>Вы не ввели X')
        setPoint(0,0, 1)
        return false
    } else if (x < -3 || x > 5) {
        showError('<br>X не принадлежит [-3:5]')
        setPoint(0,0, 1)
        return false
    } else if (isNaN(x)) {
        showError('<br>X должен быть числом')
        setPoint(0, 0, 1)
        return false
    } else {
        $('.exception').html('')
        setPoint(x, y, r)
        return true
    }
}
function showError(message) {
    $('.exception').css({'color': 'black', 'font-size': 'medium'}).html(message)
}
function setPoint(x, y, r) {
    $('#point').attr("cx", (x * 120 / r + 200))
        .attr("cy", (y * -120 / r + 200));
}