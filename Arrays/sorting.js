const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: 3,
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: 3,
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "Take Highway 33 East to Driggs...",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: 7,
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Coffee Pot Rapids",
    distance: 2.2,
    tags: ["Easy"],
    description: "Beautiful hike along the Henry's Fork to a set of rapids.",
    directions: "Take Highway 20 north to Island Park...",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: 3.4,
    tags: ["Moderate", "View"],
    description: "A steep climb to one of the largest volcanic tuff cones in the world.",
    directions: "Take Highway 33 West out of Rexburg...",
    trailhead: [43.78555, -111.98996]
  }
];

// Function to filter and sort the hike list
function searchList(list, query) {
  function searchCallback(item) {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.find(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }

  const filtered = list.filter(searchCallback);
  const sorted = filtered.sort((a, b) => a.distance - b.distance);
  return sorted;
}

// Display hikes on the page
function displayHikes(hikes) {
  const hikeList = document.getElementById('hikeList');
  hikeList.innerHTML = ''; // Clear old results
  hikes.forEach(hike => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${hike.name}</strong> - ${hike.distance} miles<br>${hike.description}`;
    hikeList.appendChild(li);
  });
}

// Event listener for search input
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  displayHikes(hikes); // Show all on load

  input.addEventListener('input', () => {
    const query = input.value.trim();
    const results = searchList(hikes, query);
    displayHikes(results);
  });
});
