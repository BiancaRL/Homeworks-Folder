function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        return Promise.reject(error);
      });
  }
  
  function displayError() {
    const resultFrame = document.getElementById("resultFrame");
    resultFrame.innerHTML = "<p>Please complete properly the fields!</p>";
    resultFrame.style.display = "block";
  }
  
  function getCharacter() {
    const characterId = document.getElementById("characterId").value;
    if (!characterId.trim()) {
      displayError();
    } else {
      const url = `https://rickandmortyapi.com/api/character/${characterId}`;
      fetchData(url)
        .then((data) => {
          displayCharacters([data]);
        })
        .catch((error) => {
          console.error("Error fetching character data:", error);
          displayError();
        });
    }
  }
  
  function getLocation() {
    const locationId = document.getElementById("locationId").value;
    if (!locationId.trim()) {
      displayError();
    } else {
      const url = `https://rickandmortyapi.com/api/location/${locationId}`;
      fetchData(url)
        .then((data) => {
          displayLocations([data]);
        })
        .catch((error) => {
          console.error("Error fetching location data:", error);
          displayError();
        });
    }
  }
  
  function getEpisode() {
    const episodeId = document.getElementById("episodeId").value;
    if (!episodeId.trim()) {
      displayError();
    } else {
      const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;
      fetchData(url)
        .then((data) => {
          displayEpisodes([data]);
        })
        .catch((error) => {
          console.error("Error fetching episode data:", error);
          displayError();
        });
    }
  }
  
  function getAllCharacters() {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url)
      .then((data) => {
        displayCharacters(data.results);
      })
      .catch((error) => {
        console.error("Error fetching all characters:", error);
        displayError();
      });
  }
  
  function getAllLocations() {
    const url = "https://rickandmortyapi.com/api/location/";
    fetchData(url)
      .then((data) => {
        displayLocations(data.results);
      })
      .catch((error) => {
        console.error("Error fetching all locations:", error);
        displayError();
      });
  }
  
  function getAllEpisodes() {
    const url = "https://rickandmortyapi.com/api/episode/";
    fetchData(url)
      .then((data) => {
        displayEpisodes(data.results);
      })
      .catch((error) => {
        console.error("Error fetching all episodes:", error);
        displayError();
      });
  }
  
  function displayCharacters(characters) {
    const resultFrame = document.getElementById("resultFrame");
    resultFrame.style.display = "block";
    resultFrame.innerHTML =
      "<h2>Character Details:</h2><ul>" +
      formatCharacterListWithButtons(characters) +
      "</ul>";
  }
  
  function displayLocations(locations) {
    const resultFrame = document.getElementById("resultFrame");
    resultFrame.style.display = "block";
    resultFrame.innerHTML =
      "<h2>Location Details:</h2><ul>" +
      formatLocationListWithButtons(locations) +
      "</ul>";
  }
  
  function displayEpisodes(episodes) {
    const resultFrame = document.getElementById("resultFrame");
    resultFrame.style.display = "block";
    resultFrame.innerHTML =
      "<h2>Episode Details:</h2><ul>" +
      formatEpisodeListWithButtons(episodes) +
      "</ul>";
  }
  
  function formatCharacterListWithButtons(characters) {
    let formattedList = "";
    characters.forEach((character) => {
      const { id, name, status, species, gender } = character;
      formattedList += `
        <li id="character-${id}">
          <span>Name:</span> ${name}<br>
          <span>Status:</span> ${status}<br>
          <span>Species:</span> ${species}<br>
          <span>Gender:</span> ${gender}<br>
          <button onclick="deleteCharacter(${id})">Delete</button>
          <button onclick="editCharacter(${id})">Edit</button>
        </li>
        <hr>
      `;
    });
    return formattedList;
  }
  
  function formatLocationListWithButtons(locations) {
    let formattedList = "";
    locations.forEach((location) => {
      const { id, name, type, dimension } = location;
      formattedList += `
        <li id="location-${id}">
          <span>Name:</span> ${name}<br>
          <span>Type:</span> ${type}<br>
          <span>Dimension:</span> ${dimension}<br>
          <button onclick="deleteLocation(${id})">Delete</button>
          <button onclick="editLocation(${id})">Edit</button>
        </li>
        <hr>
      `;
    });
    return formattedList;
  }
  
  function formatEpisodeListWithButtons(episodes) {
    let formattedList = "";
    episodes.forEach((episode) => {
      const { id, name, air_date, episode: episodeCode } = episode;
      formattedList += `
        <li id="episode-${id}">
          <span>Name:</span> ${name}<br>
          <span>Air Date:</span> ${air_date}<br>
          <span>Episode:</span> ${episodeCode}<br>
          <button onclick="deleteEpisode(${id})">Delete</button>
          <button onclick="editEpisode(${id})">Edit</button>
        </li>
        <hr>
      `;
    });
    return formattedList;
  }
  
  function editCharacter(characterId) {
    const characterElement = document.getElementById(`character-${characterId}`);
    if (characterElement) {
      characterElement.innerHTML = `
      <form id="editCharacterForm-${characterId}" onsubmit="saveEditedCharacter(event, ${characterId})">
        <input type="text" id="editCharacterName-${characterId}" placeholder="Enter Name">
        <input type="text" id="editCharacterStatus-${characterId}" placeholder="Enter Status">
        <input type="text" id="editCharacterSpecies-${characterId}" placeholder="Enter Species">
        <input type="text" id="editCharacterGender-${characterId}" placeholder="Enter Gender">
        <button type="submit">Save</button>
      </form>
    `;
    }
  }
  
  function editLocation(locationId) {
    const locationElement = document.getElementById(`location-${locationId}`);
    if (locationElement) {
      locationElement.innerHTML = `
      <form id="editLocationForm-${locationId}" onsubmit="saveEditedLocation(event, ${locationId})">
        <input type="text" id="editLocationName-${locationId}" placeholder="Enter Name">
        <input type="text" id="editLocationType-${locationId}" placeholder="Enter Type">
        <input type="text" id="editLocationDimension-${locationId}" placeholder="Enter Dimension">
        <button type="submit">Save</button>
      </form>
    `;
    }
  }
  
  function editEpisode(episodeId) {
    const episodeElement = document.getElementById(`episode-${episodeId}`);
    if (episodeElement) {
      episodeElement.innerHTML = `
      <form id="editEpisodeForm-${episodeId}" onsubmit="saveEditedEpisode(event, ${episodeId})">
        <input type="text" id="editEpisodeName-${episodeId}" placeholder="Enter Name">
        <input type="text" id="editEpisodeAirDate-${episodeId}" placeholder="Enter Air Date">
        <input type="text" id="editEpisodeCode-${episodeId}" placeholder="Enter Episode Code">
        <button type="submit">Save</button>
      </form>
    `;
    }
  }
  
  function saveEditedCharacter(event, characterId) {
    event.preventDefault();
  
    const editedCharacter = {
      name: document.getElementById(`editCharacterName-${characterId}`).value,
      status: document.getElementById(`editCharacterStatus-${characterId}`).value,
      species: document.getElementById(`editCharacterSpecies-${characterId}`)
        .value,
      gender: document.getElementById(`editCharacterGender-${characterId}`).value,
    };
  
    const characterElement = document.getElementById(`character-${characterId}`);
    if (characterElement) {
      displayEditedCharacter(editedCharacter, characterId);
    }
  }
  
  function displayEditedCharacter(character, characterId) {
    const characterElement = document.getElementById(`character-${characterId}`);
    if (characterElement) {
      const formattedCharacter = `
      <span>Name:</span> ${character.name}<br>
      <span>Status:</span> ${character.status}<br>
      <span>Species:</span> ${character.species}<br>
      <span>Gender:</span> ${character.gender}<br>
      <button onclick="deleteCharacter(${characterId})">Delete</button>
      <button onclick="editCharacter(${characterId})">Edit</button>
    `;
  
      characterElement.innerHTML = formattedCharacter;
    }
  }
  
  function saveEditedLocation(event, locationId) {
    event.preventDefault();
  
    const editedLocation = {
      name: document.getElementById(`editLocationName-${locationId}`).value,
      type: document.getElementById(`editLocationType-${locationId}`).value,
      dimension: document.getElementById(`editLocationDimension-${locationId}`)
        .value,
    };
  
    displayEditedLocation(editedLocation, locationId);
  }
  
  function displayEditedLocation(location, locationId) {
    const locationElement = document.getElementById(`location-${locationId}`);
    if (locationElement) {
      const formattedLocation = `
      <span>Name:</span> ${location.name}<br>
      <span>Type:</span> ${location.type}<br>
      <span>Dimension:</span> ${location.dimension}<br>
      <button onclick="deleteLocation(${locationId})">Delete</button>
      <button onclick="editLocation(${locationId})">Edit</button>
    `;
  
      locationElement.innerHTML = formattedLocation;
    }
  }
  
  function saveEditedEpisode(event, episodeId) {
    event.preventDefault();
  
    const editedEpisode = {
      name: document.getElementById(`editEpisodeName-${episodeId}`).value,
      air_date: document.getElementById(`editEpisodeAirDate-${episodeId}`).value,
      episode: document.getElementById(`editEpisodeCode-${episodeId}`).value,
    };
  
    displayEditedEpisode(editedEpisode, episodeId);
  }
  
  function displayEditedEpisode(episode, episodeId) {
    const episodeElement = document.getElementById(`episode-${episodeId}`);
    if (episodeElement) {
      const formattedEpisode = `
      <span>Name:</span> ${episode.name}<br>
      <span>Air Date:</span> ${episode.air_date}<br>
      <span>Episode:</span> ${episode.episode}<br>
      <button onclick="deleteEpisode(${episodeId})">Delete</button>
      <button onclick="editEpisode(${episodeId})">Edit</button>
    `;
  
      episodeElement.innerHTML = formattedEpisode;
    }
  }
  
  function deleteCharacter(characterId) {
    const characterElement = document.getElementById(`character-${characterId}`);
    if (characterElement) {
      characterElement.remove();
    }
  }
  
  function deleteLocation(locationId) {
    const locationElement = document.getElementById(`location-${locationId}`);
    if (locationElement) {
      locationElement.remove();
    }
  }
  
  function deleteEpisode(episodeId) {
    const episodeElement = document.getElementById(`episode-${episodeId}`);
    if (episodeElement) {
      episodeElement.remove();
    }
  }
  
  function addNewCharacter() {
    const newCharacter = {
      name: document.getElementById("newCharacterName").value,
      status: document.getElementById("newCharacterStatus").value,
      species: document.getElementById("newCharacterSpecies").value,
      gender: document.getElementById("newCharacterGender").value,
    };
  
    if (!validateNewCharacter(newCharacter)) {
      displayError();
      return;
    }
  
    clearErrorMessage();
    const characterId = Date.now();
    displayNewCharacter(characterId, newCharacter);
    clearNewCharacterInputs();
  }
  
  function clearErrorMessage() {
    const resultFrame = document.getElementById("resultFrame");
    resultFrame.innerHTML = "";
  }
  function validateNewCharacter(character) {
    return (
      character.name.trim() !== "" &&
      character.status.trim() !== "" &&
      character.species.trim() !== "" &&
      character.gender.trim() !== ""
    );
  }
  
  function clearNewCharacterInputs() {
    document.getElementById("newCharacterName").value = "";
    document.getElementById("newCharacterStatus").value = "";
    document.getElementById("newCharacterSpecies").value = "";
    document.getElementById("newCharacterGender").value = "";
  }
  
  function displayNewCharacter(characterId, character) {
    const resultFrame = document.getElementById("resultFrame");
    resultFrame.style.display = "block";
  
    const formattedCharacter = `
    <h2>New Character Details:</h2>
      <ul id="character-${characterId}">
        <span>Name:</span> ${character.name}<br>
        <span>Status:</span> ${character.status}<br>
        <span>Species:</span> ${character.species}<br>
        <span>Gender:</span> ${character.gender}<br>
        <button onclick="deleteCharacter(${characterId})">Delete</button>
        <button onclick="editCharacter(${characterId})">Edit</button>
      </ul>
    <hr>
  `;
  
    resultFrame.innerHTML += formattedCharacter;
  }