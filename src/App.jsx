import { useState } from 'react';

import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';
import TabButton from './assets/Tapbutton';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
 //header component
function Header() {
  const discription = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {discription} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

//core concept component
function CoreConcept({image, title, description}) {
   return(
    <li>
      <img src={image} alt={title} />
      <h3>{title} </h3>
      <p>{description}</p>
    </li>
   );
}

//react component
function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
}
console.log('app content executing');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept  
        title = {CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        image = {CORE_CONCEPTS[0].image}
        />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/> 
        </ul>
        </section>
        <section id="examples">
          <h2>Exampes</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Porps</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;