let btn = document.getElementById("btn");
btn.onclick = function () {
    document.body.classList.toggle("dark-mode");
}
document.querySelector('.first-topic').addEventListener("click", function() {
    window.location.href = "details.html";
});

// favourite button
document.getElementById('fav').addEventListener('click', function () {
    var myPanel = document.getElementById('favourite');

    if (myPanel.classList.contains('my-favourite')) {
        myPanel.classList.remove('my-favourite');
        myPanel.style.width = "100%";
        myPanel.style.backgroundColor = "var(--bg_default)";
        myPanel.style.position = "fixed";
        myPanel.style.left = "0";
        myPanel.style.bottom = "0";
        console.log('remove');
    }
    else {
        myPanel.classList.add('my-favourite');
        myPanel.style.width = "100%";
        myPanel.style.backgroundColor = "var(--bg_default)";  
        myPanel.style.position = "fixed";
        myPanel.style.left = "0";
        myPanel.style.bottom = "0";
        console.log('add');

    }

})