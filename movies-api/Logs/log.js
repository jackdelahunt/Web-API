
const Log = (req, res, next) => {
    const fs = require('fs');
    fs.appendFileSync("./Logs/logs.txt", JSON.stringify({
        "url": req.url,
        "Method": req.method,
        "Date": new Date().toLocaleString(),
        "Token": req.headers.authorization,
    }) + "\n");
    next();
}

export default Log;