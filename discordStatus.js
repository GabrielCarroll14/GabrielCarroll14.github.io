// discordStatus.js

const BOT_TOKEN = '92Nl9EyVx8d_OZIW1kOf2PPLSNIBKigt';
const USER_ID = '1161553023261225031';

const statusContainer = document.getElementById('discord-status');

fetch(`https://discord.com/api/v10/users/${USER_ID}/presence`, {
    method: 'GET',
    headers: {
        Authorization: `Bot ${BOT_TOKEN}`
    }
})
.then(response => response.json())
.then(data => {
    const status = data.status === 'online' ? 'Online' : 'Offline';
    statusContainer.innerText = `Discord Status: ${status}`;
})
.catch(error => {
    console.error('Error fetching Discord status:', error);
    statusContainer.innerText = 'Unable to fetch Discord status';
});
