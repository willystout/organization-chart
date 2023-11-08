function fetchDataFromAPI() {
            const dataContainer = document.getElementById('data-container');

            // Replace this with the URL of the API you want to consume
            const apiUrl = 'https://organization-chart-8n3.pages.dev/';

            // Make a GET request to the API
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    
                    return response.json();
                })
                .then(data => {
                    // Process and display the data
                    dataContainer.innerHTML = JSON.stringify(data, null, 2);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    dataContainer.innerHTML = 'Error fetching data from the API.';
                });
        }

        // Call the function to fetch and display data when the page loads
        fetchDataFromAPI();


