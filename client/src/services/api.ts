const API_URL = import.meta.env.VITE_STRAPI_API_URL || "http://localhost:1337";

export async function fetchHeroSlides() {
    try {
        const response = await fetch(
            `${API_URL}/api/hero-slides?populate=Image`
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Raw Strapi response:", data);

        return data;
    } catch (error) {
        console.error("Failed to fetch hero slides:", error);
        return [];
    }
}
