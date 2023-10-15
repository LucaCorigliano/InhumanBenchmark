// Find container
target = document.querySelector(".letters");
// Find ReactEventHandler
let reactEventHandler = null;
const targetName = "__reactEvent";
for (varName in target) {
    if (varName.substring(0, targetName.length) == targetName) {
        reactEventHandler = target[varName];
    }
}
// SMASH
let evDown = null;
let el = null;
while (true) {
    el = document.querySelector(".current")
    if (!el) break;
    evDown = new KeyboardEvent("keydown", { bubbles: false, cancelable: true, key: el.innerText });
    reactEventHandler.onKeyDown(evDown)
}