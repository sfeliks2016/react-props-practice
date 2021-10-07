import React from "react";
import ContactCard from "./ContactCard";
import ContactCard2 from "./ContactCard2";
import Joke from "./Joke";
import jokesData from "./jokeData";
import myProducts from "./myProducts";
import Product from "./Product";
import "./styles.css";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

export default function App() {
  //higer order method - map()

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const myNums = nums.map((e) => {
    return e;
  });
  const doubled = nums.map(function (number) {
    return number * 2;
  });

  console.log(myNums);
  console.log(doubled);

  const myJokes = jokesData.map((joke) => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });

  //console.log(myJokes)

  const productsList = myProducts.map((e) => {
    return (
      <Product
        key={e.id}
        name={e.name}
        price={e.price}
        description={e.description}
      />
    );
  });

  return (
    <div className="contacts">
      <ContactCard
        imgUrl="http://placekitten.com/300/200/"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        imgUrl="http://placekitten.com/400/200"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <ContactCard2
        contact={{
          imgUrl: "http://placekitten.com/300/200",
          name: "Mr. Whiskerson",
          phone: "(212) 555-1234",
          email: "mr.whiskaz@catnap.meow"
        }}
      />
      <hr />
      <Joke
        question="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
      />
      <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
      <h1>data from json file below:</h1>
      {myJokes}
      <h1>data from json file no2 below:</h1>
      {productsList}
    </div>
  );
}
