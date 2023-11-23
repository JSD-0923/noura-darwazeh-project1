console.log("hi");
window.addEventListener('load', function() {
    fetch('https://tap-web-1.herokuapp.com/topics/details/2')
        .then(response => response.json())
        .then(data => {
            const detailsContainer = document.getElementById('details');
            const detailsElement = document.createElement('div');
            
            detailsElement.innerHTML = `
            <p class="details-header">${data.category}</p>
            <h2>${data.topic}</h2>
            <div>
            ${generateStarIcons(data.rating)}
            </div>
            <p class="description-paragraph">${data.description}</p>
            <div class="details-card">
                <img src="img/${data.image}">
                <p class="header-detalis-card">${data.topic}
                    <span>by</span>
                    <a id="link">${data.name}</a>
                </p>
                <div class="interested-the-topic">
                    <p class="interested-paragraph">
                    Interested about this topic?
                    </p>
                    <button>Add to Favourites <ion-icon name="heart-outline"></ion-icon>
                    </button>
                    <p class="Unlimited-credits-paragraph">Unlimited Credits</p>
                </div>
            </div>
            
                
            `;
            detailsContainer.appendChild(detailsElement);  
            
            const supTopicContainer = document.getElementById('subTopics');
            const subTopicElement = document.createElement('div');
            
            subTopicElement.innerHTML = `
            <div class="sub-topics">
                <div class="header-sub-topic">
                    <h2>${data.topic} Sup Topics</h2>
                </div>

                <div class="first-sub-topic">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    <p>${data.subtopics[0]}</p>
                </div>

                <div class="second-sub-topic">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>

                    <p>${data.subtopics[1]}</p>
                </div>

                <div class="third-sub-topic">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>

                    <p>${data.subtopics[2]}</p>
                </div>

                <div class="fourth-sub-topic">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>

                    <p>${data.subtopics[3]}</p>
                </div>

                <div class="fifth-sub-topic">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>

                    <p>${data.subtopics[4]}</p>
                </div>

                <div class="sexth-sub-topic">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>

                    <p>${data.subtopics[5]}</p>
                </div>
            </div>
            
            
            `;
            supTopicContainer.appendChild(subTopicElement);  

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
function generateStarIcons(rating) {
    const filledStars = Math.floor(rating);
    const starIcons = Array(filledStars).fill('<ion-icon name="star"></ion-icon>');
    if (rating % 1 !== 0) {
        starIcons.push('<ion-icon name="star-half"></ion-icon>');
    }
    const remainingStars = 5 - filledStars - (rating % 1 !== 0 ? 1 : 0);
    starIcons.push(...Array(remainingStars).fill('<ion-icon name="star-outline"></ion-icon>'));
    return starIcons.join('');
}
