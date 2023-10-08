var pnome = ["Fox", "Abyssus", "Apollo", "Atila", "Aze", "Beatriz", "Berry", "Bianca", "Bonie", "Brayan", "Bruce", "Caleb", "Chloe", "Chris", "Dominique", "Elisa", "Greta", "Henrique", "iKz", "Jhon", "João", "Joel", "Leônidas", "Lilian", "Livia", "Louise", "Max", "Maya", "Morgan", "Nivat", "NK", "Olivia", "Phelps", "Rafaela", "Rayan", "Rebs", "Renan", "Scarlett", "Sete", "Teodoro", "Thanato", "Theo", "Tommy", "Vazio", "Vincenzo", "Violet", "Yoshida", "Zeri", "Zuberi", "Nadia", "Lynna", "May", "Olivia"];

var snome = ["Pellegrini", "Lopes", "Chermont", "Ferreira", "Andrade", "Sabino", "Curie", "Nunes", "Becker", "Sanches", "Burns", "Rodrigues", "Lombardi", "Fox", "Hermann", "Clark", "Redfield", "Silva", "Bodelaire", "Levesque", "Washford", "Kobayashi", "Diaz", "Black", "Hall", "Monteiro", "Marinho", "de Freitas", "Martinez", "Reis", "Vanglet", "Schmitt", "Manson", "Bender", "Hayes", "Turner", "Santiago", "Belucci", "Vermel", "Rakku", "Mori", "Khan", "Al-Abadi", "", "" ];




function gerar(){
    var pnomegerado = pnome[Math.floor(Math.random()*pnome.length)];
    var snomegerado = snome[Math.floor(Math.random()*snome.length)];
    console.log(pnomegerado + snomegerado);
    resultado.innerHTML = pnomegerado + "  " + snomegerado;
}
