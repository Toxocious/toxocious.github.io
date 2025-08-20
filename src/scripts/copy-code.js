function addCopyButtons() {
    document.querySelectorAll('pre').forEach((codeBlock) => {
        if (codeBlock.parentNode.classList.contains('code-block-wrapper')) {
            return;
        }

        const container = document.createElement('div');
        container.className = 'relative code-block-wrapper';

        const button = document.createElement('button');
        button.className =
            'absolute top-2 right-2 p-1.5 text-xs text-white bg-neutral-700 rounded-md hover:bg-neutral-600';
        button.textContent = 'Copy';

        const code = codeBlock.querySelector('code').innerText;

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });

        codeBlock.parentNode.replaceChild(container, codeBlock);
        container.appendChild(codeBlock);
        container.appendChild(button);
    });
}

addCopyButtons();

document.addEventListener('astro:after-swap', addCopyButtons);
