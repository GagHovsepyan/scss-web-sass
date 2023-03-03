$(document).ready(function(){

    $({ '.sec2-div1': 0 }).animate({ counter: 2223}, {
        duration: 2000,
        easing: 'linear',
        step: function() {
            $('.sec2-div1').text(Math.ceil(this.counter))
        }
    })

    $({  '.sec2-div1': 0 }).animate({ counter: 3334 }, {
        duration: 2200,
        easing: 'linear',
        step: function() {
            $('.sec2-div2').text(Math.ceil(this.counter))
        }
    })



    $({  '.sec2-div1': 0 }).animate({ counter: 4445 }, {
        duration: 2220,
        easing: 'linear',
        step: function() {
            $('.sec2-div3').text(Math.ceil(this.counter))
        }
    })


    $({  '.sec2-div1': 0 }).animate({ counter: 5556 }, {
        duration: 2222,
        easing: 'linear',
        step: function() {
            $('.sec2-div4').text(Math.ceil(this.counter))
        }
    })
})

   