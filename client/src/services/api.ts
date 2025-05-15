export async function fetchHeroSlides() {
    try {
        const response = await fetch(
            `${
                import.meta.env.VITE_STRAPI_API_URL
            }/api/content/items/heroslide`,
            {
                headers: {
                    "api-key": import.meta.env.VITE_API_KEY,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Hero-Data:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch hero slides:", error);
        return [];
    }
}

export async function fetchArticles() {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_STRAPI_API_URL}/api/content/items/articles`,
            {
                headers: {
                    "api-key": import.meta.env.VITE_API_KEY,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Error fetching articles: ${response.status}`);
        }

        const data = await response.json();
        console.log("Article-Data:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        return [];
    }
}

export async function fetchArticleBySlug(slug: string) {
    try {
        // First, fetch all articles
        const allArticles = await fetchArticles();

        // Find the article with the matching slug
        const article = allArticles.find((article) => article.slug === slug);

        if (!article) {
            throw new Error(`Article with slug "${slug}" not found`);
        }

        // Use the article ID to fetch the specific article details
        const response = await fetch(
            `${import.meta.env.VITE_STRAPI_API_URL}/api/content/item/articles/${
                article._id
            }`,
            {
                headers: {
                    "api-key": import.meta.env.VITE_API_KEY,
                },
            }
        );

        if (!response.ok) {
            throw new Error(
                `Error fetching article details: ${response.status}`
            );
        }

        const articleData = await response.json();
        console.log("Single-Article-Data:", articleData);
        return articleData;
    } catch (error) {
        console.error("Failed to fetch article by slug:", error);
        throw error; // Re-throw the error to be handled in ArticlePage
    }
}
