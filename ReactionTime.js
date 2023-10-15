// https://stackoverflow.com/a/70404535
function onClassChange(element, callback) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class'
            ) {
                callback(mutation.target);
            }
        });
    });
    observer.observe(element, { attributes: true });
    return observer.disconnect;
}
function smash() {
    // Find container
    target = document.querySelector(".view-splash");
    // Find ReactEventHandler
    let reactEventHandler = null;
    const targetName = "__reactEvent";
    for (varName in target) {
        if (varName.substring(0, targetName.length) == targetName) {
            reactEventHandler = target[varName];
        }
    }
    // Observe class change
    onClassChange(target, function (e) {
        // Trigger click at right time
        if (target.classList.contains("view-go") || target.classList.contains("view-result")) {
            reactEventHandler.onMouseDown()
        }
    })
    // Start game
    reactEventHandler.onMouseDown()
}
smash();
