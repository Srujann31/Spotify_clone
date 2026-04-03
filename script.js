const songs = [
  {
    title: "No Surprises",
    artist: "Radiohead",
    desc: "Soft and calm alternative vibes."
  },
  {
    title: "505",
    artist: "Arctic Monkeys",
    desc: "Late-night indie rock mood."
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    desc: "One of the biggest pop hits."
  },
  {
    title: "Apocalypse",
    artist: "Cigarettes After Sex",
    desc: "Dreamy and atmospheric sound."
  },
  {
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    desc: "Moody alt-pop classic."
  }
];

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const playBtn = document.getElementById("playBtn");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");

let isPlaying = false;

function renderCards(list) {
  cardsContainer.innerHTML = "";

  list.forEach(song => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-cover"></div>
      <h4>${song.title}</h4>
      <p>${song.artist} • ${song.desc}</p>
    `;

    card.addEventListener("click", () => {
      playerTitle.textContent = song.title;
      playerArtist.textContent = song.artist;
      isPlaying = true;
      playBtn.textContent = "❚❚";
    });

    cardsContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(value) ||
    song.artist.toLowerCase().includes(value)
  );

  renderCards(filtered);
});

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? "❚❚" : "▶";
});

renderCards(songs);