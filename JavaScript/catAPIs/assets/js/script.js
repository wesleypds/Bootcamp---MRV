const BASE_API = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    const data = await fetch(BASE_API)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    
    
    return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();