//scripting for navigation/ sidebar toggle 
document.querySelector('.menu-button').addEventListener('click', showSidebar)
document.querySelector('.close-btn').addEventListener('click', hideSidebar)

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    console.log("clicked");
    
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Scripting for scrolling on click
document.querySelector('.logo').addEventListener('click', function() {
    scrollToSection(0); 
});
document.querySelector('#home').addEventListener('click', function() {
    scrollToSection(550); 
});

document.querySelector('#btn2').addEventListener('click', function() {
    scrollToSection(1100);  
});

document.querySelector('#btn3').addEventListener('click', function() {
    scrollToSection(1800); 
});

document.querySelector('#btn4').addEventListener('click', function() {
    scrollToSection(2700);  
});

function scrollToSection(topValue) {
    window.scrollTo({
        top: topValue,
        left: 0,
        behavior: "smooth"
    });
    console.log(`Scrolled to ${topValue}px from the top`);
}