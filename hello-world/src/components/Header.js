import Greet from "./Greet";
import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";
import "./Header.css";
import Counter from "./Counter";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";

const Header = () => {
  return (
    <header className="App-header">
      {/* 1. Passing props to functional component */}
      <div className="section">
        <h3>1. Passing props to functional component</h3>
        <Hello name="Batman" heroName="Bruce" type="functional component" />
        <Hello name="Superman" heroName="Clark" type="functional component" />
      </div>

      {/* 2. Passing props to class component */}
      <div className="section">
        <h3>2. Passing props to class component</h3>
        <Welcome name="Batman" heroName="Bruce" type="Class component" />
        <Welcome name="Superman" heroName="Clark" type="Class component" />
      </div>

      {/* 3. Passing children props to component */}
      <div className="section">
        <h3>3. Passing children props to component</h3>
        <Greet>
          <p>Children prop 1</p>
          <p>Children prop 2</p>
        </Greet>
      </div>

      {/* 4. Using state in class component */}
      <div className="section">
        <h3>4. Using state in class component (Intro)</h3>
        <Message />
      </div>

      {/* 5. State & setState in class in detail */}
      <div className="section">
        <h3>5. Using setState in class component (Advanced)</h3>
        <Counter addValue="2" />
      </div>

      {/* 6. Props & State destructuring */}
      <div className="section">
        <h3>6. Props & State destructuring</h3>
        <Hello name="Batman" heroName="Bruce" type="Functional component" />
        <Welcome name="Batman" heroName="Bruce" type="Class component" />
        <Message />
      </div>

      {/* 7. Event Handling */}
      <div className="section">
        <h3>7. Event Handling</h3>
        <FunctionClick />
        <ClassClick />
      </div>
    </header>
  );
};

export default Header;
