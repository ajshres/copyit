// @ts-check

import { select } from './select';

/**
 * 
 * 
 * @export
 * @param { string } textSelection 
 * @returns { boolean } succeeded
 */
export function copyText ( textSelection ) {
    // validate string
    var element = document.createElement("textarea");
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.innerHTML = textSelection;

    document.body.appendChild(element);
    element.select();
    let succeeded = true;
    // Copy command execute
    try {
        succeeded = document.execCommand('copy');
    } catch (err) {
        succeeded = false;
    }
    document.body.removeChild(element);

    return succeeded;
}


/**
 *
 *
 * @export
 * @param {HTMLInputElement & HTMLSelectElement & HTMLElement} element
 * @returns
 */
export function copyElement (element) {
    let succeeded = true;
    select(element);
    try {
        succeeded = document.execCommand('copy');
    } catch (err) {
        succeeded = false;
    }
    return succeeded;
}