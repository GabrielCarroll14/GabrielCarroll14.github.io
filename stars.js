
document.addEventListener('DOMContentLoaded', function () {
    const repoOwner = 'gabrielcarroll14';
    const repoName = 'GabrielCarroll14.github.io';

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`)
        .then(response => response.json())
        .then(data => {
            console.log('GitHub API Response:', data);

            const starsCount = data.stargazers_count;
            if (starsCount !== undefined) {
                document.getElementById('starsCount').innerText = `⭐ This sites stars: ${starsCount}`;
            } else {
                console.error('Stars count not found in the GitHub API response.');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
