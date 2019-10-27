var user_list = [
    "ANNICCHIARICO Victoria",
    "CLECH Tom",
    "RIEKER Théo",
    "CLEMENTZ Nathan",
    "JBARA Naïm",
    "MOUGIN Mehdi",
    "ALAMANOVA Madina",
    "BLANGENWITSCH Lucas",
    "RÖDERER Lucas",
    "LUCZAK Justin",
    "LAT Jordan",
    "LIN Joël",
    "CHÂTEL Jérémy",
    "STOECKLIN Florent",
    "ROCFORT Erwan",
    "ZEMB Edouard",
    "WITTNER Déborah",
    "DE OLIVEIRA Allan",
    "BIRLINGER Anaïs",
    "MAERKY Antonin",
    "LINDER Arnaud",
    "FRUHAUF Thibaud",
    "VIDALE Cindy",
    "ALALI Mouafak",
    "BARBIER Damien",
    "BASS Kévin"
];


function random(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        
        var randomIndex = Math.floor(Math.random() * currentIndex);
        console.log(currentIndex)
        currentIndex -= 1;
        console.log(currentIndex)
        

        var temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;
}


function viewRandom() {
    random(user_list);
    document.getElementById("team_one_player_one").innerHTML = user_list[0];
    document.getElementById("team_one_player_two").innerHTML = user_list[1];
    document.getElementById("team_two_player_one").innerHTML = user_list[2];
    document.getElementById("team_two_player_two").innerHTML = user_list[3];
    document.getElementById("team_three_player_one").innerHTML = user_list[4];
    document.getElementById("team_three_player_two").innerHTML = user_list[5];
    document.getElementById("team_four_player_one").innerHTML = user_list[6];
    document.getElementById("team_four_player_two").innerHTML = user_list[7];
    document.getElementById("team_five_player_one").innerHTML = user_list[8];
    document.getElementById("team_five_player_two").innerHTML = user_list[9];
    document.getElementById("team_six_player_one").innerHTML = user_list[10];
    document.getElementById("team_six_player_two").innerHTML = user_list[11];
    document.getElementById("team_seven_player_one").innerHTML = user_list[12];
    document.getElementById("team_seven_player_two").innerHTML = user_list[13];
    document.getElementById("team_eight_player_one").innerHTML = user_list[14];
    document.getElementById("team_eight_player_two").innerHTML = user_list[15];
    document.getElementById("team_nine_player_one").innerHTML = user_list[16];
    document.getElementById("team_nine_player_two").innerHTML = user_list[17];

    document.getElementById("team_ten_player_one").innerHTML = user_list[18];
    document.getElementById("team_ten_player_two").innerHTML = user_list[19];
    document.getElementById("team_eleven_player_one").innerHTML = user_list[20];
    document.getElementById("team_eleven_player_two").innerHTML = user_list[21];
    document.getElementById("team_twelve_player_one").innerHTML = user_list[22];
    document.getElementById("team_twelve_player_two").innerHTML = user_list[23];
    document.getElementById("team_thirteen_player_one").innerHTML = user_list[24];
    document.getElementById("team_thirteen_player_two").innerHTML = user_list[25];


}


document.getElementById("random").addEventListener("click", viewRandom);

