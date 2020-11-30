import React from "react";
import PresCard from "./PresCard";
import Intro from "./Intro";
import Team from "./Team";
import presRecipies from "../../public/images/cock_presCard.jpg";
import presLab from "../../public/images/presLab.png";
import PresWorld from "./PresWorld";
import PresBoxes from "./PresBoxes";

const presList = [
  {
    title: "Recipes",
    descMain: `If you ever wanted to impress your friends and family, you're on the right place. On this section, you will know all about the cocktails and how to prepare them like a Cocktail Master.`,
    imgRight: true,
    cardTitle: "Discover our cocktails",
    descCard: `We have selected for you a list of the finest and the most popular cocktails to discover. You will also be able to search through a large variety of cocktail by using our Search bar tool.`,
    button: "Discover now",
    img: presRecipies,
    id: 1,
    path: "/Recipes",
  },
  {
    title: "Lab cocktail",
    descMain: `Welcome to the Lab Cocktail, a Virtual Cocktail Bar
    where you will learn how to prepare your own cocktail and become a Cocktail Master. You will just have to follow the instructions and we will guide you through this unique experience.`,
    imgRight: false,
    cardTitle: "About the lab cocktail",
    descCard: `Our team has concocted for you a delicious game where you will play the role of a Cocktail specialist and you will attempt to prepare a Cocktail of your choice and won the Cocktail Master prize.`,
    button: "Let's play !",
    img: presLab,
    id: 2,
    path: "/Lab",
  },
];

function Home() {
  return (
    <div className="margin">
      <Intro />
      <Team />
      {presList.map((el) => (
        <PresCard
          title={el.title}
          descMain={el.descMain}
          imgRight={el.imgRight}
          cardTitle={el.cardTitle}
          descCard={el.descCard}
          button={el.button}
          img={el.img}
          key={el.id}
          path={el.path}
        />
      ))}
      <PresWorld />
      <PresBoxes />
    </div>
  );
}
export default Home;
