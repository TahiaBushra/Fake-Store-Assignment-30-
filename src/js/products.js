import { renderData, renderLoading, renderError } from "./render";

export default async function fetchProducts(url) {
    try {
        renderLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        renderData(data);
    } catch (error) {
        renderError(error.message);
    } finally { renderLoading(false); }
}

