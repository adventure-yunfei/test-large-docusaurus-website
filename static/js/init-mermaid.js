(function () {
    mermaid.initialize({ startOnLoad:false });

    var start = performance.now();
    var timer = undefined;
    function initMermaid() {
        function _initMermaid() {
            var mermaidSelector = '.language-mermaid:not(.processed)';
            const nodes = document.querySelectorAll(mermaidSelector);
            if (nodes.length) {
                nodes.forEach(node => {
                    node.innerHTML = node.innerText;
                    node.classList.add('processed');
                });

                mermaid.initialize({
                    theme: 'forest'
                });
                mermaid.init(undefined, nodes);
            }
        }

        start = performance.now();
        if (timer !== undefined) {
            start = performance.now();
        } else {
            timer = setInterval(() => {
                _initMermaid();
                if (performance.now() - start > 10000) {
                    clearInterval(timer);
                    timer = undefined;
                }
            }, 50);
        }
    }

    window.addEventListener('load', initMermaid);
    window.addEventListener('popstate', initMermaid);
    var pushState = history.pushState;
    var replaceState = history.replaceState;
    history.pushState = function () {
        initMermaid();
        pushState.apply(history, arguments);
    };
    history.replaceState = function () {
        initMermaid();
        replaceState.apply(history, arguments);
    };
})();
