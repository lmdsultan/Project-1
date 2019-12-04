let counter = 0
let timeSeconds = 0
let endGame = true
// let pla = {
//     X: 0,
//     O: 0
// }

window.setInterval(function () {
    timeSeconds++
    if (endGame) {
        $("#seconds").text('Duration of the game  ' + timeSeconds + ' Seconds')
    }
}, 1000)
$('.boxs').one('click', function (event) {
    counter++
    if (counter % 2 == 0) {
        $(event.target).text('X')
        $('Audio#xs')[0].play()

    } else {
        $(event.target).text('O')
        $('Audio#xs')[0].play()
    }

    function checkWin() {
        // if statement check winne
        if (($("#0").text() === $("#1").text()) && ($("#0").text() === $("#2").text()) && ($("#0").text() !== "")) {
            $('#0,#1,#2').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: "Congratulations Player  " + $("#0").text() + " WINS",
                timer: 3000
            })

            $(".boxs").off('click');
        } else if (($("#3").text() === $("#4").text()) && ($("#3").text() === $("#5").text()) && ($("#3").text() !== "")) {
            $('#3,#4,#5').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            // let printaz = $('#0').html()
            // pla [printaz]++
            // $(`#${printaz}`).html(`player ${printaz} s ${pla[printaz]}`)
            Swal.fire({
                title: "Congratulations Player  " + $("#3").text() + " WINS",
                timer: 3000
            })
            $(".boxs").off('click');
        } else if (($("#6").text() === $("#7").text()) && ($("#6").text() === $("#8").text()) && ($("#6").text() !== "")) {
            $('#6,#7,#8').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: "Congratulations Player  " + $("#6").text() + " WINS",
                timer: 3000
            })
            $(".boxs").off('click');
        } else if (($("#0").text() === $("#3").text()) && ($("#0").text() === $("#6").text()) && ($("#0").text() !== "")) {
            $('#0,#3,#6').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: "Congratulations Player  " + $("#0").text() + " WINS",
                timer: 3000
            })
            $(".boxs").off('click');
        } else if (($("#1").text() === $("#4").text()) && ($("#1").text() === $("#7").text()) && ($("#1").text() !== "")) {
            $('#1,#4,#7').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: "Congratulations Player  " + $("#1").text() + " WINS",
                timer: 3000
            })
            $(".boxs").off('click');
        } else if (($("#2").text() === $("#5").text()) && ($("#2").text() === $("#8").text()) && ($("#2").text() !== "")) {
            $('#2,#5,#8').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: "Congratulations Player  " + $("#2").text() + " WINS",
                timer: 3000
            })
            $(".boxs").off('click');
        } else if (($("#0").text() === $("#4").text()) && ($("#0").text() === $("#8").text()) && ($("#0").text() !== "")) {
            $('#0,#4,#8').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: "Congratulations Player  " + $("#0").text() + " WINS",
                timer: 3000
            })
            $(".boxs").off('click');
        } else if (($("#2").text() === $("#4").text()) && ($("#2").text() === $("#6").text()) && ($("#2").text() !== "")) {
            $('#2,#4,#6').css('background', '#CDCDB8')
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: "Congratulations Player  " + $("#2").text() + " WINS",
                timer: 3000
            })
            $(".boxs").off('click');
        }
        // Tie statement  
        else if (counter == 9) {
            $('Audio#wi')[0].play()
            endGame = false
            Swal.fire({
                title: ("Game is Tie"),
                timer: 3000
            })
        }
    }
    checkWin()
})
// rest func 
$("#rest").click(function () {
    location.reload(true);
})