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
    descMain: `We have selected for you a list of the finest and the most popular cocktails. By clicking on each Cocktail card, you will discover all the information related to the cocktail: what ingredients are needed and how to prepare it. `,
    imgRight: true,
    cardTitle: "Discover our cocktails",
    descCard: `Sint ullamco culpa nisi amet enim ut deserunt irure occaecat Lorem
    dolore eiusmod tempor. Ea adipisicing nostrud proident adipisicing eu
    occaecat tempor elit mollit tempor mollit occaecat. Occaecat enim
    adipisicing ex eiusmod nisi nisi`,
    button: "Discover now",
    img: presRecipies,
    id: 1,
    path: "/Recipes",
  },
  {
    title: "Lab cocktail",
    descMain: `Deserunt ad ea fugiat officia consectetur exercitation excepteur dolore
    excepteur cillum labore quis. Excepteur est sit voluptate laboris. Laborum
    commodo laborum voluptate eiusmod officia sunt. Nisi anim deserunt dolore
    magna.`,
    imgRight: false,
    cardTitle: "About the lab cocktail",
    descCard: `Sint ullamco culpa nisi amet enim ut deserunt irure occaecat Lorem
    dolore eiusmod tempor. Ea adipisicing nostrud proident adipisicing eu
    occaecat tempor elit mollit tempor mollit occaecat. Occaecat enim
    adipisicing ex eiusmod nisi nisi`,
    button: "Shake it !",
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
