// @ts-check
/**
 * Select text from given element
 * 
 * @export
 * @param {HTMLInputElement & HTMLSelectElement & HTMLElement} element 
 * @returns { string } selectedText
 */
export function select(element: HTMLInputElement & HTMLSelectElement & HTMLElement): string {
    var selectedText;
    
    if (element.nodeName === 'SELECT') {
        element.focus();
        selectedText = element.value;
    } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    } else {

        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}