// @ts-check
(function () {

    /**
     * 
     * 
     * @param { string } textSelection 
     * @returns { boolean } succeeded
     */
    function copyText(textSelection) {
        // validate string
        var element = document.createElement("textarea");
        element.style.position = "absolute";
        element.style.left = "-9999px";
        element.innerHTML = textSelection;

        document.body.appendChild(element);
        element.select();
        var succeeded = true;
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
     * @param {HTMLInputElement & HTMLSelectElement & HTMLElement} element
     * @returns
     */
    function copyElement(element) {
        var succeeded = true;
        select(element);
        try {
            succeeded = document.execCommand('copy');
        } catch (err) {
            succeeded = false;
        }
        return succeeded;
    }

    function select(element) {
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
    if(window["copyit"]) {
        throw 'Copy it is already been taken as variable'
    } else {
        window["copyit"] = {
            copyText:copyText,
            copyElement:copyElement,
            select:select
        }
    }
})();