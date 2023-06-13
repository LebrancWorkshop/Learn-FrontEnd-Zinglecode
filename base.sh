mkdir "$1" &&
cd "$1" &&
touch index.html &&
touch style.css &&
touch index.js &&
echo "<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>"$1"</title>
</head>
<body>
  <script src="./index.js"></script>
</body>
</html>
" > index.html &&
cd .. &&
echo "/Users/poomyimyuean/Desktop/Poomkun/Hub/Code/Course/Youtube/Zinglecode/FrontEnd/"$1"/index.html" | pbcopy

