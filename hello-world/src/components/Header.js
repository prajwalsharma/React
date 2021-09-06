import Greet from "./Greet";
import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";
import "./Header.css";
import Counter from "./Counter";
import FunctionClick from "./FunctionClick";
import ClassClick from "./ClassClick";
import EventBind from "./EventBind";
import ParentComponent from "./ParentComponent";
import UserGreeting from "./UserGreeting";
import NameList from "./NameList";
import Stylesheet from "./Stylesheet";
import Form from "./Form";
import FragmentDemo from "./FragmentDemo";
import PureComp from "./PureComp";
import ParentComp from "./ParentComp";
import MemoComp from "./MemoComp";
import RefsDemo from "./RefsDemo";
import FocusInput from "./FocusInput";
import FRParentInput from "./FRParentInput";
import PortalDemo from "./PortalDemo";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";
import PostList from "./PostList";
import PostForm from "./PostForm";

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

      {/* 8. Binding Event Handlers */}
      <div className="section">
        <h3>8. Binding Event Handlers</h3>
        <EventBind />
      </div>

      {/* 9. Passing methods as props */}
      <div className="section">
        <h3>9. Passing methods as props</h3>
        <ParentComponent />
      </div>

      {/* 10. Conditional Rendering */}
      <div className="section">
        <h3>10. Conditional Rendering</h3>
        <UserGreeting />
      </div>

      {/* 11. List Rendering */}
      <div className="section">
        <h3>11. List Rendering</h3>
        <NameList />
      </div>

      {/* 12. Styling & CSS */}
      <div className="section">
        <h3>12. Styling & CSS</h3>
        <Stylesheet stylename="primary" />
      </div>

      {/* 13. Form Handling (Basics) */}
      <div className="section">
        <h3>13. Form Handling (Basics)</h3>
        <Form />
      </div>

      {/* 14. React Framgments */}
      <div className="section">
        <h3>14. React Framgments</h3>
        <FragmentDemo />
      </div>

      {/* 15. Pure Components (Class Components) */}
      <div className="section">
        <h3>15. Pure Components (Class Components only)</h3>
        <ParentComp />
      </div>

      {/* 16. Memo Components (Pure Component for Functional Components) */}
      <div className="section">
        <h3>16. Memo Components (Pure Component for Functional Components)</h3>
        <ParentComp />
      </div>

      {/* 17. Refs */}
      <div className="section">
        <h3>17. Refs</h3>
        <RefsDemo />
      </div>

      {/* 18. Refs with Class components */}
      <div className="section">
        <h3>18. Refs with Class components</h3>
        <FocusInput />
      </div>

      {/* 19. Forwarding Refs */}
      <div className="section">
        <h3>19. Forwarding Refs in Functional Components</h3>
        <FRParentInput />
      </div>

      {/* 20. Portals */}
      <div className="section">
        <h3>20. Portals (Render component outside 'root' element)</h3>
        <p>See the floating button -{">"}</p>
        <PortalDemo />
      </div>

      {/* 21. Error Boudary */}
      <div className="section">
        <h3>21. Error Boundary</h3>
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>

      {/* 22. Higher Order Component (HOC) */}
      <div className="section">
        <h3>22. Higher Order Component (HOC) - To reduce code duplicality</h3>
        <ClickCounter name="Batman" />
        <HoverCounter name="Superman" />
      </div>

      {/* 23. Render Props */}
      <div className="section">
        <h3>23. Render Props</h3>
        <p>To Do</p>
      </div>

      {/* 24. Context API */}
      <div className="section">
        <h3>24. Context API</h3>
        <UserProvider value="Prajwal">
          <ComponentC />
        </UserProvider>
      </div>

      {/* 25. HTTP, Axios & React - GET */}
      <div className="section">
        <h3>25. HTTP, Axios & React - GET</h3>
        <PostList />
      </div>

      {/* 26. HTTP, Axios & React - POST */}
      <div className="section">
        <h3>26. HTTP, Axios & React - POST</h3>
        <PostForm />
      </div>
    </header>
  );
};

export default Header;
