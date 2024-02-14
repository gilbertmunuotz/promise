async function getData() {
    try {
        // Await the fetch response directly
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // Check for successful response (status code 200-299)
        response.ok ? console.log(await response.json()) : (console.log('error'))
    } catch (error) {
        console.error('Error fetching data:', error); // Use console.error for errors
    }
}

getData();





//OR




async function getData() {
    try {
        // Await the fetch response directly
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Check for successful response (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`); // More meaningful error message
        }

        // Parse the response to JSON and log the data
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error); // Use console.error for errors
    }
}

getData();

