document.addEventListener("DOMContentLoaded", function() {
  // Extract the path from the URL
  const path = window.location.pathname.substring(1);

  // Make a request to your API using the path
  const apiUrl = "https://your-api-endpoint.com/api/" + path;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Redirect the user to the returned URL
      window.location.href = data.redirectUrl;
    })
    .catch(error => {
      console.error("Error fetching data from API:", error);
      // Optionally, you can handle errors here
    });
});
