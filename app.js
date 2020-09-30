$(document).ready(function () {
    var myFriends = ["Beyonce", "Mariah Carey", "Solange", "Rihanna"];
    var somePlace = [
        "Whole foods",
        "my Moms house",
        "the library",
        "Walmart",
        "Target",
        "the mall",
        "school",
        "the movies",
        "a place that doesnt exist",
        "Beyonces house",
        "some obscure place",
        "I have run out of locations, just know it was epic",
    ];
    var weapons = [
        "gun",
        "knife",
        "wallet",
        "Frebreeze",
        "something random",
        "twitter",
        "her stans",
        "vagnism",
        "an ipad",
        "opression",
        "Covid 19",
        "Ariana Grande",
        "a phone",
        "this coding assignment",
        "random things on my desk",
        "all but one thing",
        "Cholula brand hot suace",
        "an iced coffee",
        "my 2016 honda civic",
        "racism",
    ];

    for (var i = 1; i < 101; i++) {
        var $h3 = $("<h3></h3>");
        var $h3Txt = "Accusation" + " " + [i];

        $($h3).append($h3Txt);

        $h3.on("click", accusation(i));
        $("body").append($h3);
    }
    function accusation(i) {
        return function () {
            var f = myFriends[i % 5];
            var l = somePlace[i % 10];
            var w = weapons[i % 20];
            alert(
                "Accusation" +
                " " +
                i +
                ": I accuse" +
                " " +
                f +
                ", with the weapon" +
                " " +
                w +
                " " +
                "at" +
                " " +
                l +
                "!"
            );
        };
    }
});
