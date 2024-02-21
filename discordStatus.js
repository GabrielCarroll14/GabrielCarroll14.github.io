// discordStatus.js

document.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_BOT_TOKEN' with the actual bot token
    const BOT_TOKEN = 'fAUeGRk_mthylwVIAkYfzO1TrwKlQC2L';
  
    // Replace 'YOUR_USER_ID' with your Discord user ID
    const USER_ID = '1161553023261225031';
  
    // Replace 'statusContainer' with the ID of the HTML element where you want to display the status
    const statusContainer = document.getElementById('statusContainer');
  
    // Fetch user information
    fetch(`https://discord.com/api/v10/users/${USER_ID}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bot ${BOT_TOKEN}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      const status = data?.presence?.status || 'offline';
      statusContainer.innerText = `Discord Status: ${status}`;
    })
    .catch(error => console.error('Error fetching Discord status:', error));
  });
  