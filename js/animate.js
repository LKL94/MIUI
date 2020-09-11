function animate(el, target, fn) {
    clearInterval(el.flag)
    el.flag = setInterval(function() {
        var step = (target - el.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (el.offsetLeft == target) {
            clearInterval(el.flag)
            if (fn) {
                fn()
            }
        }
        el.style.left = el.offsetLeft + step + 'px'
    }, 30)
}