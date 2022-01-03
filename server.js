const express = require('express');
const fs = requried('fs');

const app = express();


app.get('/video',(req, res) => {
    const range = req.headers.range;
    const videoPath = './videoSt.mp4';
    const videoSize = fs.statSync(videoPath).size;

    const chunksize = 1 * 1e+6;
    const start = Number(range.replace(/\D/g, ''));
    const end = math.min(start + chunksize, videoSize -1);

    const contentLength = end - start +1;

    const header = {
                "Content-Range": 'bytes ${start} - $(end)/${videoSize}',
                "Accept-Ranges": "bytes",
                "Content-Length":contentLength,
                "Content-Type":"video/videoSt.mp4"
    }
    res.writeHead(206, headers);

    const stream = fs.createReadStream(videoPath, {start, end})
    stream.pipe(res);
});

app.listen('3000');