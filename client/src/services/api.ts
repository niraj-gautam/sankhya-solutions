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
        console.log("Data:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch hero slides:", error);
        return [];
    }
}

export async function fetchArticles() {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_STRAPI_API_URL}/api/articles?populate=Image`
        ); // populate=Image to  fetches all related data along with  Image

        if (!response.ok) {
            throw new Error(`Error fetching articles: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        return [];
    }
}

export async function fetchArticleBySlug(slug: string) {
    try {
        const response = await fetch(
            `${
                import.meta.env.VITE_STRAPI_API_URL
            }/api/articles?filters[Slug][$eq]=${slug}&populate=Image`
        );

        if (!response.ok) {
            throw new Error(`Error fetching article: ${response.status}`);
        }

        const data = await response.json();
        return data.data[0]; // Return the first article, assuming only one matches the slug
    } catch (error) {
        throw error; // Re-throw the error to be handled in ArticlePage
    }
}
