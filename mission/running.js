const apples = 5;
const oranges = 3;
let total = apples + oranges;
console.log("total:", total);




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mission Statement</title>
  <link rel="stylesheet" href="index.css" />
  <script src="mission.js" defer></script>
</head>
<body>
  <!-- Theme selector dropdown -->
  <select id="theme">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>

  <div class="container">
    <h1 class="title">MISSION STATEMENT</h1>
    <h2 class="subtitle">BRIGHAM YOUNG UNIVERSITY–IDAHO</h2>
    <div class="underline"></div>

    <p class="intro">
      Brigham Young University–Idaho was founded and is supported and guided by The Church of Jesus Christ of Latter-day Saints. Its mission is to develop disciples of Jesus Christ who are leaders in their homes, the Church, and their communities.
    </p>

    <p class="italic">The university does this by:</p>
    
    <ol>
      <li>
        Building testimonies of the restored gospel of Jesus Christ and fostering its principles in a wholesome academic, cultural, and social environment.
      </li>
      <li>
        Providing a high-quality education that prepares students of diverse interests and abilities for lifelong learning and employment.
      </li>
      <li>
        Serving as many students as possible within resource constraints.
      </li>
      <li>
        Delivering education that is affordable for students and the Church.
      </li>
    </ol>

    <!-- Logo image (use correct path) -->
    <div class="logo">
      <img id="logo" src="/mission/byui-logo_blue.webp" alt="BYU-Idaho Logo" />
    </div>
  </div>
</body>
</html>




const themeSelector = document.querySelector('#theme');
const body = document.querySelector('body');
const logo = document.querySelector('#logo');

function changeTheme() {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_blue.webp'; // make sure you have this image
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; // make sure you have this image
  }
}

themeSelector.addEventListener('change', changeTheme);




body {
  font-family: "Georgia", serif;
  background: #fff;
  padding: 40px;
  margin: 0;
}

.container {
  max-width: 700px;
  margin: auto;
  padding: 40px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.title {
  text-align: center;
  font-size: 24px;
  letter-spacing: 10px;
  margin-bottom: 0;
  font-weight: bold;
}

.subtitle {
  text-align: center;
  color: #0077c8;
  font-size: 16px;
  letter-spacing: 3px;
  margin-top: 10;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
}

.underline {
  width: 500px;
  height: 1px;
  background-color: #d9d9d9;
  margin: 0 auto 30px auto;
}

.intro {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.6;
}

.italic {
  font-style: italic;
  margin-top: 20px;
  margin-bottom: 10px;
}

ol {
  margin-left: 20px;
  font-size: 16px;
  line-height: 1.6;
}

.logo {
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.logo img {
  max-width: 40%;    /* limits the image width to 80% of its container */
  height: auto;      /* keeps the aspect ratio */
  display: block;    /* removes inline spacing */
  margin: 0 auto;    /* centers the image horizontally */
}


.byu {
  font-size: 28px;
  color: #003366;
}

.idaho {
  font-size: 20px;
  color: #7ca1d4;
}


.dark {
  background-color: #333;
  color: #ffffff;
}

.dark .container {
  background-color: #444;
  border-color: #555;
}

.dark .subtitle {
  color: #7AC9FF; 

.dark .byu,
.dark .idaho {
  color: #cccccc; 
}
