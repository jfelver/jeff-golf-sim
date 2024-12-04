// Define the navbar HTML as a string
const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="top-level-checklist.html">Setup Guide</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="equipment-prices.html">Equipment Prices</a>
                </li>
            </ul>
        </div>
    </nav>
`;

// Insert the navbar HTML into the page
document.getElementById('navbar-container').innerHTML = navbarHTML;

