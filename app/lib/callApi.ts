export async function callApi(
  url: string,
  method: string,
  body: Record<string, unknown> | null
) {
  try {
    const response = await fetch(process.env.RAILS_API_DOMAIN + url, {
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.RAILS_API_KEY}`,
    },
    method: method,
      body: body ? JSON.stringify(body) : null,
    });
    return response.json();
  } catch (error) {
    console.error("Failed to call api", error);
    return null;
  }
}