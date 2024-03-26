document.getElementById('subscribe-btn').addEventListener('click', function() {
    document.getElementById('subscription-modal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('subscription-modal').style.display = 'none';
});

// Close modal if outside click
window.onclick = function(event) {
    if (event.target == document.getElementById('subscription-modal')) {
        document.getElementById('subscription-modal').style.display = 'none';
    }
}
