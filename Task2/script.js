
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Hello, welcome to my page!');
});


document.getElementById('profile-pic').addEventListener('mouseover', function() {
    document.body.style.backgroundImage = "url('./image.jpg')";
});

document.getElementById('profile-pic').addEventListener('mouseout', function() {
    document.body.style.backgroundImage = '';
});
