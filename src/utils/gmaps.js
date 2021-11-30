const API_KEY = 'AIzaSyBdiBVNNeFkWx9qtGJNkFVdgkSyvojDrNQ'
const CALLBACK_NAME = 'gmpasCallback'

let initialized = !!window.google;
let resolveInintPromise;
let rejectInitPromise;

const initPromise = new Promise((resolve, reject) => {
    resolveInintPromise = resolve;
    rejectInitPromise = reject;
})

export default function init() {
    if (initialized) return initPromise;

    initialized = true;

    window[CALLBACK_NAME] = () => resolveInintPromise(window.google);
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`
    script.onerror = rejectInitPromise;
    document.querySelector('head').appendChild(script);

    return initPromise;
}