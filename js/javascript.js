const contentDiv = document.getElementById('rt-header');
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        contentDiv.innerHTML = data
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });
