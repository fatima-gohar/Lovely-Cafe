function showWelcome(){window.alert("Welcome to Lovely Cafe! We hope to see you soon.");}
function showOrderMessage(){window.alert("Thank you for choosing Lovely Cafe! Please visit us to place your order.");}
function sendMessage(event){event.preventDefault();window.alert("Thank you! Your message has been received.");event.target.reset();}