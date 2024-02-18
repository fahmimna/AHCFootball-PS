// Nama-nama tim sepak bola
var teams = ["Liverpool", "Man-City", "PSG", "Man-United", "Arsenal", "Tottenham", "Barcelona", "Munchen", "Real-Madrid", "Atletico", "Napoli", "Dortmun", "Chelsea", "Lever Cuisen"];

// Nama-nama player
var coaches = ["Fahmi", "Anas", "Ataka", "Makmal", "Syauqi", "Aniq", "Malik", "Huda", "Rifky", "Rizky", "Jawahir", "Arum", "Wafa", "Prigel"];

// Fungsi untuk mengacak elemen-elemen dalam array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Mengacak nama-nama tim dan pelatihnya
function shuffleTeamsAndCoaches(teams, coaches) {
  var shuffledTeams = shuffleArray(teams.slice()); // Salin array tim untuk diacak
  var shuffledCoaches = shuffleArray(coaches.slice()); // Salin array pelatih untuk diacak
  var result = {};

  // Menghubungkan setiap tim dengan pelatihnya
  for (var i = 0; i < shuffledTeams.length; i++) {
    result[shuffledTeams[i]] = shuffledCoaches[i];
  }

  return result;
}

// Mengacak pertandingan antar tim
function shuffleMatches(teams) {
  var shuffledTeams = shuffleArray(teams.slice()); // Salin array tim untuk diacak
  var matches = [];

  // Membuat pertandingan antara tim-tim yang sudah diacak
  for (var i = 0; i < shuffledTeams.length; i += 2) {
    if (i + 1 < shuffledTeams.length) {
      matches.push([shuffledTeams[i], shuffledTeams[i + 1]]);
    }
  }

  return matches;
}

// Memanggil fungsi untuk mengacak tim dan pelatihnya
var shuffledTeamsAndCoaches = shuffleTeamsAndCoaches(teams, coaches);

// Menampilkan hasil pengacakan tim dan pelatihnya
console.log("Hasil pengacakan tim dan pelatih:");
for (var team in shuffledTeamsAndCoaches) {
  console.log("Club: " + team + ", Player: " + shuffledTeamsAndCoaches[team]);
}

// Memanggil fungsi untuk mengacak pertandingan
var shuffledMatches = shuffleMatches(teams);

// Menampilkan hasil pengacakan pertandingan
console.log("\nHasil pengacakan pertandingan:");
for (var i = 0; i < shuffledMatches.length; i++) {
  console.log("Pertandingan " + (i + 1) + ": " + shuffledMatches[i][0] + " vs " + shuffledMatches[i][1]);
}
