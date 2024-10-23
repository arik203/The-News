const baseUrl = 'https://openapi.programming-hero.com/api/news/category/';
let currentCategory = '01'; // Default category

const loadNews = () => {
    const url = `${baseUrl}${currentCategory}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data));
}

const displayNews = (data) => {
    const newsContainer = document.getElementById('NewsContainer');
    newsContainer.innerHTML = ''; // Clear previous news
    for (const news of data) {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
            <div class="row g-3">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="Loading...">
                    <br><br>
                </div>
                <div class="col">
                    <h5 class="card-title">${news.title}</h5>
                    <br>
                    <p class="news-details">${news.details}</p>
                    <p class="news-published_date">${news.author.name} <img src="eye.svg"> ${news.total_view}</p>
                </div>
            </div>
        `;
        newsContainer.appendChild(newsDiv);
    }
};

const changeCategory = (category) => {
    currentCategory = category; // Update current category
    loadNews(); // Reload news for the new category
};

// Load initial news
loadNews();
