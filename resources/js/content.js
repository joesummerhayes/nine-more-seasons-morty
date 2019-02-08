
$(".canvas").on('click', function(){
    $("h1").fadeIn(1000);
});


var num = Math.floor(Math.random() * 400);

$.ajax(`https://rickandmortyapi.com/api/character/${num}` , {
    dataType: "json",
    method: "GET",
    success: function(response) {
        $("#randomImage").prepend(`<img id="theImg" src="${response.image}" />`);
        $("#contestant1").prepend(response.name);
    },
    error: function(r, e, m) {
        alert(m);
    }
});

var num2 = Math.floor(Math.random() * 400);

$.ajax(`https://rickandmortyapi.com/api/character/${num2}` , {
    dataType: "json",
    method: "GET",
    success: function(response) {
        $("#randomImage2").prepend(`<img id="theImg" src="${response.image}" />`);
        $("#contestant2").append(response.name);
        console.log(response.name)
    },
    error: function(r, e, m) {
        alert(m);
    }
});


// idea how to acccess more characters... make the api call to https://rickandmortyapi.com/api/character/2 but then use the
// random number generator before making the call so that it changes based on it 