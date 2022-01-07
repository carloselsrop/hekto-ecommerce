import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // Hooks
  const history = useHistory();

  // State
  const [user, setUser] = useState();

  // Effects
  useEffect(() => {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      const users = fetchUsers();
      const user = users.find(user => user.email === JSON.parse(loggedUser).email);
      setUser(user);
    }
  }, []);

  // Methods
  const registerUser = ({ name, email, password }) => {
    const newUser = {
      name,
      email,
      password,
      phone: '',
      country: '',
      address: '',
      zip: '',
    };
    let users = fetchUsers();
    users.push(newUser);
    setUsers(users);
    history.push('/login');
  };
  const fetchUsers = () => {
    const rawUsers = localStorage.getItem('users');
    if (rawUsers) {
      return JSON.parse(rawUsers);
    } else {
      localStorage.setItem('users', JSON.stringify([]));
      return [];
    }
  };
  const setUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };
  const loginUser = ({ email, password }) => {
    const users = fetchUsers();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('loggedUser', JSON.stringify({ email }))
      setUser(user);
      history.push('/');
    }
  };
  const logOut = () => {
    localStorage.removeItem('loggedUser');
    setUser(null);
    history.push('/login');
  };
  const updateUser = (user) => {
    const users = fetchUsers();
    const index = users.findIndex(u => u.email === user.email);
    users[index] = user;
    setUsers(users);
    localStorage.setItem('loggedUser', JSON.stringify(user.email));
    localStorage.setItem('users', JSON.stringify(users));
  };
  const isLogged = localStorage.getItem('loggedUser') ? true : false;

  // Provider
  return (
    <AuthContext.Provider value={{
      registerUser,
      logOut,
      loginUser,
      isLogged,
      user,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };