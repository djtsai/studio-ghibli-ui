export default function getIdFromUrl(url) {
    const urlArray = url.split('/')

    return urlArray[urlArray.length - 1]
}
