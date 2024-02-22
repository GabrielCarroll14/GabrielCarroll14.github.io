// github.js

// GitHub repository details
const username = 'GabrielCarroll14';
const repo = 'gabrielcarroll14.github.io';

// GitHub API endpoint
const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

// Fetch the latest commit
fetch(apiUrl)
    .then(response => response.json())
    .then(commits => {
        const latestCommit = commits[0];
        const commitMessage = latestCommit.commit.message;
        const commitDetails = `Commit by ${latestCommit.commit.author.name} on ${latestCommit.commit.author.date}`;

        // Update HTML elements with the latest commit information
        document.getElementById('commitMessage').innerText = `Latest Commit Message: ${commitMessage}`;
        document.getElementById('commitDetails').innerText = commitDetails;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
