import Greetings from './components/greetings/Greetings';
import IdCard from './components/idCard/IdCard';
import Random from './components/random/Random';
import BoxColor from './components/boxColor/BoxColor';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="components">
        <h1>IdCards Component</h1>
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          firstName="Obrien"
          lastName="Delores"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <hr />

      <div className="components">
        <h1>Greetings Component</h1>
        <Greetings>Español</Greetings>
        <Greetings lang="en">English</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="de">Ludwig</Greetings>
      </div>

      <hr />

      <div className="components">
        <h1>Random Component</h1>
        <Random min={8} max={10} />
      </div>

      <hr />

      <div className="components">
        <h1>BoxColor Component</h1>
        <BoxColor />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={123} g={80} b={0} />
      </div>

      <hr />
    </div>
  );
};

export default App;
