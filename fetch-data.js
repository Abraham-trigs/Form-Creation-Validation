
// 1. Initialize the Async Function:
async function fetchUserData() {
    // 2. Define the API URL:
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element:
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch Data Using try-catch:
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 5. Clear the Loading Message:
        dataContainer.innerHTML = '';

        // 6. Create and Append User List:
        const userList = document.createElement('ul');
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = user.name; 
            userList.appendChild(userItem); 
        });

        // Append the <ul>  container
        dataContainer.appendChild(userList);
    } catch (error) {
        // 7. Error Handling:
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'; // Display error message
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded:
document.addEventListener('DOMContentLoaded', fetchUserData);
