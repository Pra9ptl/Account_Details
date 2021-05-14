import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../../elements/Checkbox/Checkbox";
import InputFields from "../../elements/InputField/InputField";
import { searchAccountByCode } from "../../redux/Actions/Actions";
import "./BottomView.css";

const BottomView = props => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchCode, setSearchCode] = useState("");
  const searchByCode = useSelector(state => state.searchByCode);
  const dispatch = useDispatch();

  const handleTabChange = val => {
    setActiveTab(val);
    setSearchCode("");
  };

  useEffect(
    () => {
      dispatch(
        searchAccountByCode(
          searchCode,
          activeTab === 1 ? "Company" : activeTab === 2 ? "Person" : null
        )
      );
    },
    [searchCode, activeTab, dispatch]
  );

  return (
    <div className="bottomViewContainer">
      <div className="tabViewBar">
        <div
          className={`tabButton ${activeTab === 0 && "active"}`}
          onClick={() => handleTabChange(0)}
        >
          Main
        </div>
        <div
          className={`tabButton ${activeTab === 1 && "active"}`}
          onClick={() => handleTabChange(1)}
        >
          Company
        </div>
        <div
          className={`tabButton ${activeTab === 2 && "active"}`}
          onClick={() => handleTabChange(2)}
        >
          Person
        </div>
        <div
          className="expandButton"
          onClick={() => {
            props.setExpanded(!props.expanded);
          }}
        >
          <div
            style={{
              transform: props.expanded ? "rotate(135deg)" : "rotate(-45deg)",
            }}
          />
        </div>
      </div>
      {activeTab === 0 &&
        <div className="tabViewContent">
          <div className="formControl">
            <div>Code</div>
            <InputFields
              placeholder="Enter Code"
              fieldValue={searchCode}
              onChange={val => setSearchCode(val)}
            />
          </div>

          <div className="formControl">
            <div>Buyer</div>
            <Checkbox
              id={`buyer${searchCode}`}
              name={`buyer${searchCode}`}
              value={`supplier${searchCode}`}
              checked={
                searchCode
                  ? searchByCode ? searchByCode.is_buyer : false
                  : false
              }
            />
          </div>

          <div className="formControl">
            <div>Supplier</div>
            <Checkbox
              id={`supplier${searchCode}`}
              name={`supplier${searchCode}`}
              value={`supplier${searchCode}`}
              checked={
                searchCode
                  ? searchByCode ? searchByCode.is_supplier : false
                  : false
              }
            />
          </div>
        </div>}
      {activeTab === 1 &&
        <div className="tabViewContent">
          <div className="formControl">
            <div>Code</div>
            <InputFields
              placeholder="Enter Code"
              fieldValue={searchCode}
              onChange={val => setSearchCode(val)}
            />
          </div>

          <div className="formControl">
            <div>Buyer</div>
            <Checkbox
              id={`buyer${searchCode}`}
              name={`buyer${searchCode}`}
              value={`supplier${searchCode}`}
              checked={
                searchCode
                  ? searchByCode ? searchByCode.is_buyer : false
                  : false
              }
            />
          </div>

          <div className="formControl">
            <div>Supplier</div>
            <Checkbox
              id={`supplier${searchCode}`}
              name={`supplier${searchCode}`}
              value={`supplier${searchCode}`}
              checked={
                searchCode
                  ? searchByCode ? searchByCode.is_supplier : false
                  : false
              }
            />
          </div>
        </div>}
      {activeTab === 2 &&
        <div className="tabViewContent">
          <div className="formControl">
            <div>Code</div>
            <InputFields
              placeholder="Enter Code"
              fieldValue={searchCode}
              onChange={val => setSearchCode(val)}
            />
          </div>

          <div className="formControl">
            <div>Buyer</div>
            <Checkbox
              id={`buyer${searchCode}`}
              name={`buyer${searchCode}`}
              value={`supplier${searchCode}`}
              checked={
                searchCode
                  ? searchByCode ? searchByCode.is_buyer : false
                  : false
              }
            />
          </div>

          <div className="formControl">
            <div>Supplier</div>
            <Checkbox
              id={`supplier${searchCode}`}
              name={`supplier${searchCode}`}
              value={`supplier${searchCode}`}
              checked={
                searchCode
                  ? searchByCode ? searchByCode.is_supplier : false
                  : false
              }
            />
          </div>
        </div>}
    </div>
  );
};

export default BottomView;
