import React from "react";
import "./Style/Home.scss";
import PresCard from "./PresCard";
import Intro from "./Intro";
import Team from "./Team";
import presRecipies from "../../public/images/cock_presCard.jpg";
import presLab from "../../public/images/presLab.png";
import PresWorld from "./PresWorld";

const presList = [
  {
    title: "Recipes",
    descMain: `Deserunt ad ea fugiat officia consectetur exercitation excepteur dolore
    excepteur cillum labore quis. Excepteur est sit voluptate laboris. Laborum
    commodo laborum voluptate eiusmod officia sunt. Nisi anim deserunt dolore
    magna reprehenderit commodo Lorem cupidatat mollit esse non. Esse velit
    ipsum anim ad deserunt elit. Officia exercitation aliquip et mollit
    consectetur ipsum aute ullamco non voluptate reprehenderit quis. Consequat
    do voluptate eiusmod commodo aliquip exercitation pariatur veniam sint
    nisi cillum anim deserunt.`,
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
    descMain: "",
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
    </div>
  );
}
export default Home;
