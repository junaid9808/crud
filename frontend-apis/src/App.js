import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./table/table";
import Login from "./login/login";
import QuizRecord from "./quiz/QuizRecord";
import SecondQuiz from "./quiz/SecondQuiz";
import StartQuiz from "./quiz/StartQuiz";
import Page from "./pages/Page";
import ReactDraganddrop from "./OverviewFlow";
import OverviewFlow from "./OverviewFlow";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<SecondQuiz />} />
    //     <Route path="/start-quiz/:data" element={<StartQuiz />} />
    //   </Routes>
    // </Router>
    //<Page />
    <OverviewFlow />
  );
}

export default App;
