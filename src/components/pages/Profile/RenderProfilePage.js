import React, { useEffect } from 'react';
import { Navbar, GoalProgressBar } from '../../common/index';
import { Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import {
  setEditing,
  getUser,
  setUserName,
  setUserEmail,
  setUserPhone,
  setUserPassword,
  getBudgetAction,
} from '../../../actionCreators/mainActions.js';

import '../../../styles/App.scss';

const RenderProfilePage = props => {
  const { authService } = props;
  const getEmail = () => {
    return JSON.parse(localStorage.getItem('okta-token-storage')).idToken.claims
      .email;
  };
  const getName = () => {
    return JSON.parse(localStorage.getItem('okta-token-storage')).idToken.claims
      .name;
  };

  const dispatch = useDispatch();
  const isEditing = useSelector(state => state.user.isEditing);
  const user = useSelector(state => state.user);

  const passwordContainer = isEditing ? 'passwords' : 'passwords isNotActive';
  const userInfoContainer = isEditing
    ? 'userInfoContainer isNotActive'
    : 'userInfoContainer';
  const userInfoEditingContainer = isEditing
    ? 'userInfoEditingContainer'
    : 'userInfoEditingContainer isNotActive';
  const editButton = isEditing ? 'editButton isNotActive' : 'editButton';
  const logOutButton = isEditing ? 'logOutButton isNotActive' : 'logOutButton';
  const saveButton = isEditing ? 'saveButton' : 'saveButton isNotActive';

  let password = '';
  let confirmedPassword = '';

  const futureBudget = useSelector(state => state.futureBudget);
  const currentMonthlySpending = useSelector(
    state => state.currentMonthlySpending
  );

  const passwordCheck = () => {
    if (password === confirmedPassword) {
      dispatch(setUserPassword(confirmedPassword));
      dispatch(setEditing());
    } else {
      alert("passwords don't match");
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBudgetAction());
  }, []);

  const [darkMode] = React.useState(getMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <div
      className={
        darkMode ? 'pageContainer dark-mode' : 'pageContainer light-mode'
      }
    >
      <div className="navContainer">
        <Navbar myAccount={true} />
      </div>

      <div className="contentContainer">
        <div className="profile">
          <img
            className="profileAvatar"
            src="https://thumbs.dreamstime.com/z/cute-monster-face-square-avatar-vector-stock-cute-monster-face-square-avatar-114650081.jpg"
            alt="avatar"
          />
          <div className={userInfoContainer}>
            <h2 className="userInfo">{getName()}</h2>
            <h4 className="userInfo">{getEmail()}</h4>
            <h4 className="userInfo">{user.phone}</h4>
          </div>
          <div className={userInfoEditingContainer}>
            <Input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={e => dispatch(setUserName(e.target.value))}
            />
            <Input
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={e => dispatch(setUserEmail(e.target.value))}
            />
            <Input
              type="text"
              placeholder="Phone Number"
              value={user.phone}
              onChange={e => dispatch(setUserPhone(e.target.value))}
            />
          </div>
          <div className={passwordContainer}>
            <Input
              type="password"
              placeholder="Password"
              onChange={e => {
                password = e.target.value;
              }}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              onChange={e => {
                confirmedPassword = e.target.value;
              }}
            />
          </div>
          <button className={editButton} onClick={() => dispatch(setEditing())}>
            Edit
          </button>
          <button className={logOutButton} onClick={() => authService.logout()}>
            Log Out
          </button>
          <button className={saveButton} onClick={() => passwordCheck()}>
            Save
          </button>
        </div>
      </div>

      <div className="progressBarContainer">
        <GoalProgressBar
          categoryGoals={futureBudget}
          categoryCurrent={currentMonthlySpending}
        />
      </div>
    </div>
  );
};

export default RenderProfilePage;
