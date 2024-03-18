// Create a proxy for the window.location object
const locationProxy = new Proxy(window.location, {
    get(target, prop) {
        // Intercept the "href" property
        if (prop === 'href') {
            // Modify the URL to open Google
            return 'https://www.google.com';
        }
        // Return other properties as-is
        return target[prop];
    },
    set(target, prop, value) {
        // Prevent setting the "href" property
        if (prop === 'href') {
            console.error("Cannot set 'href' directly.");
            return false;
        }
        // Allow other property assignments
        target[prop] = value;
        return true;
    },
});

// Replace the original location object with our proxy
window.location = locationProxy;
