let h3count = document.querySelector('#h3-count')
let decrcount = document.querySelector('#decr-count')
let incrcount = document.querySelector('#incr-count')

let initialcount = 1;

decrcount.addEventListener("click", () => {
    initialcount++;
    h3count.innerHTML = initialcount
})

incrcount.addEventListener("click", () => {
    initialcount--;
    h3count.innerHTML = initialcount
});