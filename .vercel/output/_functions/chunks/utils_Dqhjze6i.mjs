import edjsHTML from 'editorjs-html';

function removeHTMLTags(str) {
  const regex = /<\/?[^>]+(>|$)/g;
  return str.replace(regex, "");
}
function JSONConvertToHTML(JSONStringParameter) {
  const JSONString = JSON.stringify({
    blocks: JSON.parse(JSONStringParameter)
  });
  const edjsParser = edjsHTML();
  const parsedJSON = JSON.parse(JSONString);
  const html = edjsParser.parse(parsedJSON);
  return html;
}
function makeWordsClickable(html, words) {
  words.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    html = html.replace(regex, `<a href="/services/${word}">${word}</a>`);
  });
  return html;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function optimizeImageUrl(url, height = 100, format = "webp") {
  const baseUrl = url.substring(0, url.lastIndexOf("/"));
  const imageId = url.substring(url.lastIndexOf("/") + 1);
  const optimizedUrl = `${baseUrl}/transform/height=${height},format=${format}/${imageId}`;
  return optimizedUrl;
}
function getRandomElements(arr, count) {
  let shuffled = arr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
function getAPIPath() {
  let siteIs = "https://smm-admin-panel.vercel.app/";
  return siteIs;
}

export { JSONConvertToHTML as J, getRandomElements as a, getAPIPath as g, makeWordsClickable as m, optimizeImageUrl as o, removeHTMLTags as r, shuffleArray as s };
