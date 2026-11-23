//Promisification

function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result)) => {
                if (error) return reject(error)
                return resolve(result)
            }
        })
    }
}

// without promise
function loadScript(src,  callback) {
    const script = document.createElement('script')

    script.src = src

    script.onload = () => callback(null, script)
    script.onerror = (err) => callback(err)

    document.head.appendChild(script)
}

const loadScript = promisify(loadScript)

loadScript('test.js', (err, script) => {
    if(err) {
        console.lokg(err)
    } else {
        console.log("Script Loaded")
    }
})
