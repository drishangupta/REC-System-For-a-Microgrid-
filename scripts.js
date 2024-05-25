document.getElementById("menu-icon").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    } else {
        navLinks.classList.add("show");
    }
});

window.addEventListener("scroll", function() {
    var hero = document.getElementById("hero");
    var offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});

document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#how-it-works').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("connectButton").addEventListener("click", async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to Metamask');
        } catch (error) {
            console.error('User rejected the request.');
        }
    } else {
        alert('Metamask is not installed. Please install it to use this feature.');
    }
});
