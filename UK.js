function scrollToFirstDiv() {
    var targetDiv = document.getElementById("First-Div");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("home").style.color = "Yellow"
    document.getElementById("info").style.color = "grey"
    document.getElementById("projects").style.color = "grey"
}
  function scrollToSecondDiv() {
    var targetDiv = document.getElementById("Second-Div");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("home").style.color = "grey"
    document.getElementById("info").style.color = "yellow"
    document.getElementById("projects").style.color = "grey"
}
  function scrollToThirdDiv() {
    var targetDiv = document.getElementById("Third-Div");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("home").style.color = "grey"
    document.getElementById("info").style.color = "grey"
    document.getElementById("projects").style.color = "yellow"
}  


window.addEventListener('scroll', function () {
    
    const firstDiv = document.getElementById('First-Div');
    const secondDiv = document.getElementById('Second-Div');
    const thirdDiv = document.getElementById('Third-Div');
    const homeButton = document.getElementById('home');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition === 0 || (scrollPosition >= firstDiv.offsetTop && scrollPosition < secondDiv.offsetTop)) {
      homeButton.style.color = "yellow";
    } else {
      homeButton.style.color = "grey";
    }
  
    if (scrollPosition >= firstDiv.offsetTop && scrollPosition < secondDiv.offsetTop) {
      document.getElementById("info").style.color = "grey";
      document.getElementById("projects").style.color = "grey";
    } else if (scrollPosition >= secondDiv.offsetTop && scrollPosition < thirdDiv.offsetTop) {
      document.getElementById("info").style.color = "yellow";
      document.getElementById("projects").style.color = "grey";
    } else if (scrollPosition >= thirdDiv.offsetTop) {
      document.getElementById("info").style.color = "grey";
      document.getElementById("projects").style.color = "yellow";
    }
  });

  window.onload = function() {
    const homeButton = document.getElementById('home');
    homeButton.style.color = "yellow";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  
   