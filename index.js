document.addEventListener("DOMContentLoaded", () => {
    let initialTheme = JSON.parse(localStorage.getItem("PageTheme"));
    if (initialTheme === "DARK") {
        document.body.classList.add("dark-mode");
    }
});
function darkmode() {
    console.log("clicked");
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode")
    var theme;
    if (SetTheme.classList.contains("dark-mode")) {
        console.log("Dark mode");
        theme = "DARK";
        
    } else {
        console.log("Light mode");
        theme = "LIGHT";
    }
    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

window.addEventListener("storage", () => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
    
    console.log(GetTheme);
    if (GetTheme === "DARK") {
        document.body.classList.add("dark-mode");
        
    } else {
        document.body.classList.remove("dark-mode");
    }
});
/////////////////////////////////////////////
document.getElementById('fav').addEventListener('click', function() {
    var myPanel = document.getElementById('favourite');

    if (myPanel.classList.contains('hidden')) {
        myPanel.classList.remove('hidden');
    } else {
        myPanel.classList.add('hidden');
    }
});
//////////////////////////

// function lestTopics(data) {
//     function fetchTopics() {
//         return fetch('https://tap-web-1.herokuapp.com/topics/list')
//             .then(response => response.json())
//     }
//     function reanderTopics(topics) {
//         const cardsContainer = document.getElementById('cards');
//         topics.forEach(card => {
//             const cardElement = document.createElement('div');
//             cardElement.classList.add('card');
            
//             cardElement.innerHTML = `
//                     <div class="card-img">
//                         <img src="img/${card.image}" alt="${card.topic}">
//                     </div>
//                     <div class="card-descreption">
//                         <p>${card.topic}<br>
//                         <span>${card.category}</span>
//                         </p>
//                         <div class="icon">
//                             ${generateStarIcons(card.rating)}
//                         </div>
//                         <p class="author">${card.name}</p>
//                     </div>
//                 `;

//             cardsContainer.appendChild(cardElement);
//             cardElement.addEventListener("click", async () => {
//             const cardId = card.id;
//             window.location.href = `details.html?id=${cardId}`;
//             })
//         });
//     }
//     window.addEventListener('load', async function () {
//         const topics = await fetchTopics();
//         reanderTopics(topics);

//     });
//     function generateStarIcons(rating) {
//         const filledStars = Math.floor(rating);
//         const starIcons = Array(filledStars).fill('<ion-icon name="star"></ion-icon>');
//         if (rating % 1 !== 0) {
//             starIcons.push('<ion-icon name="star-half"></ion-icon>');
//         }
//         const remainingStars = 5 - filledStars - (rating % 1 !== 0 ? 1 : 0);
//         starIcons.push(...Array(remainingStars).fill('<ion-icon name="star-outline"></ion-icon>'));
//         return starIcons.join('');
//     }
// }
// lestTopics();
// ////////////////////////
// //search
// let listCards =[];
// const searchInput = document.getElementById('searchInput');
// const searchResultsContainer = document.getElementById('searchResults');
// searchInput.addEventListener('keyup', async () => {
//     setTimeout(async () => {
//         const valueOfSearch = searchInput.value;
//         const allCardsResponse = await fetch('https://tap-web-1.herokuapp.com/topics/list');
//         const allCards = await allCardsResponse.json();
//         const topics = allCards.filter(item => item.topic.toLowerCase().includes(valueOfSearch.toLowerCase()));
//         lestTopics(topics);
//     }, 300);
// });
let topics = [];
window.addEventListener('load', async function () {
    const allCardsResponse = await fetch('https://tap-web-1.herokuapp.com/topics/list');
    const allCards = await allCardsResponse.json();
    reanderTopics(allCards);
    //search:
searchInput.addEventListener('keyup', () => {
        setTimeout(() => {
            const valueOfSearch = searchInput.value;
             topics = allCards.filter(item => item.topic.toLowerCase().includes(valueOfSearch.toLowerCase()));
            console.log(topics);
            reanderTopics(topics);
            // SortData(topics);
        }, 300);
        
        
    });
});
//sort:
const sortSelect = document.getElementById('sortSelect')
function SortData(topics) {
     const sortCriteria = sortSelect.value;
    console.log(sortCriteria);
    if (sortCriteria === "name") {
        topics.sort((a, b) => a.topic.toLowerCase() > b.topic.toLowerCase() ? 1 : -1);
        console.log(topics);

    } else if (sortCriteria === "author") {
        topics.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    } else if (sortCriteria === "default") {
        topics.sort((a, b) => a.id - b.id);
    }
    reanderTopics(topics);
  }
  sortSelect.addEventListener("change", () => {
    SortData(topics);
  });

function reanderTopics(topics) {
            const cardsContainer = document.getElementById('cards');
            cardsContainer.innerHTML = "";
            topics.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                
                cardElement.innerHTML = `
                        <div class="card-img">
                            <img src="img/${card.image}" alt="${card.topic}">
                        </div>
                        <div class="card-descreption">
                            <p>${card.topic}<br>
                            <span>${card.category}</span>
                            </p>
                            <div class="icon">
                                ${generateStarIcons(card.rating)}
                            </div>
                            <p class="author">${card.name}</p>
                        </div>
                    `;
    
                cardsContainer.appendChild(cardElement);
                cardElement.addEventListener("click", async () => {
                const cardId = card.id;
                window.location.href = `details.html?id=${cardId}`;
                })
            });
        }
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


