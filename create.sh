pnpm create vite@latest "$1" --template vanilla &&
cd "$1" &&
pnpm install &&
rm counter.js &&
rm index.html &&
rm main.js &&
rm style.css &&
touch index.html &&

echo "<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />
    <link rel=\"stylesheet\" href=\"./style.css\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Vite App</title>
  </head>
  <body>
  </body>
</html>
" > index.html &&

cat index.html &&
touch style.css &&

echo "html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
" > style.css &&

touch main.js &&

pnpm run dev --port "$2"
