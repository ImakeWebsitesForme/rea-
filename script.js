const videos = [
    {
        title: "Sample Video 1",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        likes: 100,
        comments: ["Great video!", "Loved it!", "Awesome!"]
    },
    {
        title: "Sample Video 2",
        url: "https://www.w3schools.com/html/movie.mp4",
        likes: 150,
        comments: ["Amazing content!", "Nice edit!", "Hilarious!"]
    },
    {
        title: "Sample Video 3",
        url: "https://www.w3schools.com/html/horse.mp4",
        likes: 200,
        comments: ["So cool!", "This is awesome!", "I want more!"]
    }
];

// Function to display the videos on the page
window.onload = function() {
    const videoFeed = document.getElementById("videoFeed");

    videos.forEach((video, index) => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `
            <video id="video${index}" controls autoplay>
                <source src="${video.url}" type="video/mp4">
            </video>
            <div class="video-info">
                <h3>${video.title}</h3>
            </div>
        `;
        videoFeed.appendChild(videoCard);
    });
}

// Autoplay the next video when the user scrolls
let currentVideoIndex = 0;
const videosLength = videos.length;

window.onscroll = function() {
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach((video, index) => {
        if (isInViewport(video)) {
            video.play();
            currentVideoIndex = index;
        } else {
            video.pause();
        }
    });
}

// Helper function to check if an element is in the viewport
function isInViewport(video) {
    const rect = video.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Like button functionality
function likeVideo() {
    videos[currentVideoIndex].likes += 1;
    alert("Liked! Total Likes: " + videos[currentVideoIndex].likes);
}

// Comment button functionality
function addComment() {
    document.getElementById("commentModal").style.display = "flex";
}

function submitComment() {
    const commentText = document.getElementById("commentText").value;
    if (commentText) {
        videos[currentVideoIndex].comments.push(commentText);
        alert("Comment added: " + commentText);
        closeCommentModal();
    }
}

function closeCommentModal() {
    document.getElementById("commentModal").style.display = "none";
}

// Share button functionality
function shareVideo() {
    alert("Share functionality is not implemented yet!");
}
