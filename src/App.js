import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://img.khan.co.kr/news/2020/07/21/l_2020072101002491400195811.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Samgyepsal",
    image:
      "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    rating: 3.5,
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://i.imgur.com/D2T8R2T.jpg",
    rating: 3.8,
  },
  {
    id: 5,
    name: "Kimbab",
    image:
      "https://d1hk7gw6lgygff.cloudfront.net/uploads/recipe/image_file/5970/2.%E1%84%89%E1%85%A9%E1%84%89%E1%85%A9%E1%84%92%E1%85%AA%E1%86%BC_%E1%84%87%E1%85%A1%E1%86%B8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%87%E1%85%A1%E1%86%B8_A.jpg",
    rating: 2.5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
