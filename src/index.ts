import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event: FetchEvent) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    return new Response("Страница не найдена", { status: 404 });
  }
}
