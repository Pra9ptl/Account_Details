import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllAccounts } from "../../redux/Actions/Actions";
import BottomView from "../BottomView/BottomView";
import TopView from "../TopView/TopView";
import "./App.css";

function App() {
  const [filterToApply, setFilterToApply] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllAccounts(filterToApply));
    },
    [dispatch, filterToApply]
  );

  return (
    <div className="App">
      <TopView
        setFilterToApply={setFilterToApply}
        filterToApply={filterToApply}
        expanded={expanded}
      />
      <BottomView expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
}

export default App;
