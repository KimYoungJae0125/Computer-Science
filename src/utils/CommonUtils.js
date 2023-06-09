const isMobile = () => {
    const mobileRegex = [
        /Android/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ]

    return mobileRegex.some(mobile => window.navigator.userAgent.match(mobile));
};

export {isMobile}