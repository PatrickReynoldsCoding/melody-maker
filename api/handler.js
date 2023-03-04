const browserify = require("browserify");
const { send } = require("micro");
const { join } = require("path");

module.exports = async (req, res) => {
  const { input } = req.query;
  const result = await myNodeFunction(input);

  const bundle = await new Promise((resolve, reject) => {
    const b = browserify();
    b.add(join(__dirname, "..", "client.js"));
    b.bundle((err, buf) => {
      if (err) return reject(err);
      resolve(buf);
    });
  });

  send(
    res,
    200,
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <h1>Result:</h1>
        <p>${result}</p>
        <script>${bundle.toString()}</script>
      </body>
    </html>
  `
  );
};
