let copyTextButton = document.getElementById('copyTextButton');

copyTextButton.addEventListener('click', function(event) {
    copyText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam aliquid a debitis. Mollitia deleniti deserunt vero ratione soluta provident nihil id expedita quaerat repudiandae, sit, possimus quia laboriosam corporis?')
});

let copyElementButton = document.getElementById('copyElementButton');
let elementToCopy = document.getElementById('elementToCopy');
copyElementButton.addEventListener('click', function(event) {
    copyElement(elementToCopy);
});

let copyElementButton2 = document.getElementById('copyElementButton2');
let elementToCopy2 = document.getElementById('elementToCopy2');
copyElementButton2.addEventListener('click', function(event) {
    copyElement(elementToCopy2);
});
