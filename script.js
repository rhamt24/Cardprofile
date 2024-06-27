document.addEventListener('DOMContentLoaded', function() {
    const fetchDataBtn = document.getElementById('fetchDataBtn');
    const jsonContent = document.getElementById('json-content');

    fetchDataBtn.addEventListener('click', function() {
        fetch('isi.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                let html = '<ul>';
                // Assuming isi.json contains an array of items with 'title' and 'content'
                data.forEach(item => {
                    html += `<li>${item.title}: ${item.content}</li>`;
                });
                html += '</ul>';
                jsonContent.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
                jsonContent.textContent = 'Failed to fetch content.';
            });
    });
});
