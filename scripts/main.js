$(function () {
    // let boxs = Array.from(document.querySelectorAll(".boxs"))
    // let winner = ""
    // let rowAndColumn = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let counter = 0
    let timeSeconds = 0

    window.setInterval(function() {
        timeSeconds++;
        $("#seconds").text(timeSeconds)}, 1000);


    $('.boxs').one('click', function (event) {
        counter++
        if (counter % 2 == 0) {
            $(event.target).text('X')
        } else {
            $(event.target).text('O')
        }
        
        function checkWin() {
            if (($("#0").text() === $("#1").text()) && ($("#0").text() === $("#2").text()) && ($("#0").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#0").text() + " WINS"
                })
                $(".boxs").off('click');
            } else if (($("#3").text() === $("#4").text()) && ($("#3").text() === $("#5").text()) && ($("#3").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#3").text() + " WINS"
                })
                $(".boxs").off('click');
            } else if (($("#6").text() === $("#7").text()) && ($("#6").text() === $("#8").text()) && ($("#6").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#6").text() + " WINS"
                })
                $(".boxs").off('click');
            } else if (($("#0").text() === $("#3").text()) && ($("#0").text() === $("#6").text()) && ($("#0").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#0").text() + " WINS" + $("#0,#3,#6").css('background', '#0D6DC4')
                })
                $(".boxs").off('click');
            } else if (($("#1").text() === $("#4").text()) && ($("#1").text() === $("#7").text()) && ($("#1").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#1").text() + " WINS"
                })
                $(".boxs").off('click');
            } else if (($("#2").text() === $("#5").text()) && ($("#2").text() === $("#8").text()) && ($("#2").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#2").text() + " WINS"
                })
                $(".boxs").off('click');
            } else if (($("#0").text() === $("#4").text()) && ($("#0").text() === $("#8").text()) && ($("#0").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#0").text() + " WINS"
                })
                $(".boxs").off('click');
            } else if (($("#2").text() === $("#4").text()) && ($("#2").text() === $("#6").text()) && ($("#2").text() !== "")) {
                Swal.fire({
                    title: "congratulations  " + $("#2").text() + " WINS"
                })
                $(".boxs").off('click');
            } else if (counter == 9) {
                Swal.fire({
                    title: ("Game is Tie")
                })

            }
        }
        checkWin()
    })
    $("#rest").click(function () {
        location.reload(true);
    });

})