const data = [
    { "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ipeQbFseUM_GzxwMoQj45w9HtAnu4eu5w&s", "title": "Mountain landscape with sunset", "category": "nature" },
    { "image_url": "https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg", "title": "Holding a tree in a ball - Ecology concept", "category": "nature" },
    { "image_url": "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg", "title": "Abstract Autumn Leaf Vein Pattern", "category": "nature" },
    { "image_url": "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg", "title": "AI-generated Hawk", "category": "nature" },
    { "image_url": "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp", "title": "Abstract AI Artwork", "category": "nature" },
    { "image_url": "https://cdn.esawebb.org/archives/images/screen/weic2425a.jpg", "title": "Space Nebula", "category": "nature" },
    { "image_url": "https://images.pexels.com/photos/289998/pexels-photo-289998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "title": "Snow-covered Trees in Winter", "category": "nature" },
    { "image_url": "https://cdn.pixabay.com/photo/2022/05/23/11/26/tree-7215935_1280.jpg", "title": "Beautiful Tree Landscape", "category": "nature" },
    { "image_url": "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg", "title": "Nature Scene with Sky and Grass", "category": "nature" },
    { "image_url": "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VyZW5pdHl8ZW58MHx8MHx8fDA%3D", "title": "Serenity in Nature", "category": "nature" },
    { "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&s", "title": "Tree in a Forest", "category": "nature" }
];

function generatePhotos() {
    const imageCount = parseInt(document.getElementById("numbering").value); 
    const imagesContainer = document.getElementById("imagescontainer"); 
    const button = document.getElementById("btn");

    button.style.backgroundColor = "green";

    if (isNaN(imageCount) || imageCount <= 0 || imageCount > data.length) {
        alert("Please enter a valid number between 1 and " + data.length);
    }

    imagesContainer.innerHTML = "";

    const shuffledData = [...data].sort(() => 0.5 - Math.random());
    const selectedPhotos = shuffledData.slice(0, imageCount);


    selectedPhotos.forEach(photo => {
        const imageCard = document.createElement("div");
        imageCard.className = "image-card";
        imageCard.innerHTML = `
            <img src="${photo.image_url}" alt="${photo.title}">
            <h4>${photo.title}</h4>
            <p>${photo.category}</p>
        `;
        imagesContainer.appendChild(imageCard);
    });
}


document.getElementById("btn").addEventListener("click", generatePhotos);