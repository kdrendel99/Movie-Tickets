function Ticket(movieName, movieTime, isNew) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.currentPrice = 18;
  this.isNew = isNew;
}

Ticket.prototype.matineePrice = function() {
  if (this.movieTime <= 1500) {
    this.currentPrice = this.currentPrice*.75;
  }
}

Ticket.prototype.newMovie = function() {
  if (this.isNew === true) {
    this.currentPrice = this.currentPrice+2;
  }
}

function finalPrice(userAge,ticket) {
  ticket.matineePrice();
  ticket.newMovie();
  if (userAge >= 65) {
    return ticket.currentPrice*.5;
  }
  else {
    return ticket.currentPrice;
  }
}

const movieList = {
  "1" : ["Shrek", false],
  "2" : ["Always & Forever, Lara Jean", true],
  "3" : ["Grease", false],
  "4" : ["Tenet",true]
}


$(document).ready(function() {
  $("form#tickets").submit(function(event){
    event.preventDefault();
    const movieInput = $("#movie").val();
    const timeSelected = parseInt($("#times").val());
    const userAge = ($("input#age").val());

    let ticket = new Ticket(movieList[movieInput][0],timeSelected,movieList[movieInput][1])

    let ticketCost = finalPrice(userAge,ticket);

    $("#result").show();
    $("#movie-name").text(ticket.movieName);
    $("#movie-time").text(ticket.movieTime);
    $("#movie-price").text(ticketCost);
    // $('#result').text(ticket + "\n");

  });
});