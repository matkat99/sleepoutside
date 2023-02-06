export function newsLetterTemplate(){
  document.querySelector(".news-letter").innerHTML = `<div id="newsletter-signup">
  <h2>Subscribe to Our Newsletter</h2>
  <form>
    <input type="text" placeholder="Name" id="name">
    <input type="email" placeholder="Email" id="email">
    <button type="submit" id="submit-button">Subscribe</button>
  </form>
  <div id="response"></div>
</div>`
}

export function responseToSubmission(event){
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (name && email) {
    document.getElementById("response").innerHTML = "Thank you for subscribing, " + name + "!";
    // Add code here to store the name and email on your server or add them to a mailing list
  } else {
    document.getElementById("response").innerHTML = "Please enter your name and email.";
  }
}
