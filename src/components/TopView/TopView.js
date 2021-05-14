import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputFields from "../../elements/InputField/InputField";
import { searchAccount } from "../../redux/Actions/Actions";
import "./TopView.css";

const TopView = props => {
  const [isLeftViewVisible, setIsLeftViewVisible] = useState(true);
  const [searchData, setSearchData] = useState("");
  const accounts = useSelector(state => state.accounts);
  const dispatch = useDispatch();

  const handleApplyFilter = filter => {
    props.setFilterToApply(filter);
  };

  useEffect(
    () => {
      dispatch(searchAccount(searchData));
    },
    [searchData, dispatch]
  );

  return (
    <div className="topViewContainer" style={{flex: props.expanded ? 'unset' : .8}}>
      <h3>Accounts</h3>
      <div>
        {isLeftViewVisible
          ? <div className="leftContainer">
              <div
                className="closeButton"
                onClick={() => {
                  setIsLeftViewVisible(!isLeftViewVisible);
                }}
              >
                <div />
              </div>
              <div
                className="filterButton"
                onClick={() => handleApplyFilter(1)}
                style={{
                  backgroundColor:
                    props.filterToApply === 1 ? "#6E99CA" : "white",
                  color: props.filterToApply === 1 ? "white" : "black",
                }}
              >
                Company
              </div>
              <div
                className="filterButton"
                onClick={() => handleApplyFilter(2)}
                style={{
                  backgroundColor:
                    props.filterToApply === 2 ? "#6E99CA" : "white",
                  color: props.filterToApply === 2 ? "white" : "black",
                }}
              >
                Person
              </div>
              <div
                className="filterButton"
                onClick={() => handleApplyFilter(0)}
              >
                Clear Filter
              </div>
            </div>
          : <div
              className="expandLeftViewButton"
              onClick={() => {
                setIsLeftViewVisible(!isLeftViewVisible);
              }}
            >
              <div />
            </div>}
        <div className="rightContainer">
          <div>
            <InputFields
              placeholder="Enter Serach Text..."
              filedValue={searchData}
              onChange={val => setSearchData(val)}
              width="500px"
            />
          </div>

          {accounts &&
            <table className="tableView">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((acc, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {acc.code}
                      </td>
                      <td>
                        {acc.type_detail.is === "Person"
                          ? `${acc.type_detail.firstname} ${acc.type_detail
                              .lastname}`
                          : acc.type_detail.name}
                      </td>
                      <td>
                        {acc.type_detail.phonenumber}
                      </td>
                      <td>
                        {acc.type_detail.email}
                      </td>
                      <td>
                        <a
                          href={`https://www.${acc.type_detail.website}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {acc.type_detail.website}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>}
        </div>
      </div>
    </div>
  );
};

export default TopView;
