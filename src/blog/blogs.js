// Sample blog data (replace with dynamic data from backend if applicable)
const blogs = [
    {
        title: "How to Improve Your Productivity",
        description: "Learn the best tips to improve your daily productivity.",
        date: "November 20, 2024",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "Web Development Trends in 2024",
        description: "Explore the latest trends in web development.",
        date: "November 18, 2024",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "The Power of Responsive Design",
        description: "Why responsive design is essential for modern websites.",
        date: "November 15, 2024",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "Understanding JavaScript Closures",
        description:
            "A deep dive into JavaScript closures and their use cases.",
        date: "November 10, 2024",
        image: "https://via.placeholder.com/300x200",
    },
    {
        title: "CSS Grid vs Flexbox",
        description: "When to use CSS Grid and when to use Flexbox.",
        date: "November 5, 2024",
        image: "https://via.placeholder.com/300x200",
    },
];

// Dynamically add blogs to the page
const blogContainer = document.querySelector(".blog-container");

blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <div class="blog-card-content">
            <h3 class="blog-card-title">${blog.title}</h3>
            <p class="blog-card-description">${blog.description}</p>
            <p class="blog-card-date">${blog.date}</p>
        </div>
    `;
    blogContainer.appendChild(blogCard);
});
