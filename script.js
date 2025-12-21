let inputs = document.querySelectorAll("input");

inputs.forEach(function(node) {
    node.addEventListener("input", () => {
        if (node.value != '') {
            node.nextElementSibling.classList.add("active");
            node.style.border = '2px solid #e38ddd';
        } else {
            node.nextElementSibling.classList.remove("active");
            node.style.border = '2px solid #e3ade0';
        }
    });
});
