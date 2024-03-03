let subscriptions = [
  {
    name: "Channel 1",
    description: "Description of Channel 1",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 2",
    description: "Description of Channel 2",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 3",
    description: "Description of Channel 3",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 4",
    description: "Description of Channel 4",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 5",
    description: "Description of Channel 5",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 6",
    description: "Description of Channel 6",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 7",
    description: "Description of Channel 7",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 8",
    description: "Description of Channel 8",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 9",
    description: "Description of Channel 9",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },

  {
    name: "Channel 10",
    description: "Description of Channel 10",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 11",
    description: "Description of Channel 11",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 12",
    description: "Description of Channel 12",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 13",
    description: "Description of Channel 13",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 14",
    description: "Description of Channel 14",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 15",
    description: "Description of Channel 15",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },

  {
    name: "Channel 16",
    description: "Description of Channel 16",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 17",
    description: "Description of Channel 17",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 18",
    description: "Description of Channel 18",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 19",
    description: "Description of Channel 19",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
  {
    name: "Channel 20",
    description: "Description of Channel 20",
    imageUrl: "https://via.placeholder.com/300",
    ownerImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    subscribed: false,
  },
];

function createSubscriptionCard(channel) {
  const card = document.createElement("div");
  card.classList.add("col");
  card.innerHTML = `
            <div class="card" data-channel="${channel.name}">
                <img src="${channel.imageUrl}" class="card-img-top" alt="${channel.name}" />
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <img src="${channel.ownerImage}" class="channel-image" alt="Owner" />
                        <div>
                            <h5 class="card-title">${channel.name}</h5>
                            <p class="card-text">${channel.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
  return card;
}

function displayChannelDetails(channelName) {
  const channel = subscriptions.find(
    (subscription) => subscription.name === channelName
  );
  if (channel) {
    $("#modalChannelName").text(channel.name);
    $("#modalChannelDescription").text(channel.description);
    $("#modalSubscribeButton").text(
      channel.subscribed ? "Unsubscribe" : "Subscribe"
    );
    $("#modalSubscribeButton")
      .off("click")
      .on("click", function () {
        toggleSubscription(channel.name);
        $(this).text(channel.subscribed ? "Unsubscribe" : "Subscribe");
      });
    $("#channelModal").modal("show");
  }
}

function toggleSubscription(channelName) {
  const index = subscriptions.findIndex(
    (subscription) => subscription.name === channelName
  );
  if (index !== -1) {
    subscriptions[index].subscribed = !subscriptions[index].subscribed;
  }
}

const subscriptionContainer = document.getElementById("subscription-container");
subscriptions.forEach((channel) => {
  const card = createSubscriptionCard(channel);
  card.addEventListener("click", () => displayChannelDetails(channel.name));
  subscriptionContainer.appendChild(card);
});
