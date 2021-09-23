import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, green } from '@mui/material/colors';
import { AppMenu } from './components/AppMenu';
import ApplicationsList from './pages/ApplicationsList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ApplicationFormLayout } from './pages/ApplicationFormLayout';
const theme = createTheme({
  palette: {
    primary: teal,
    secondary: green,
  },
});

function App() {
  const isLogged = true;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppMenu>
          <Switch>
            <Route exact path="/">
              {isLogged ? <ApplicationsList /> : <SignIn />}
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/newApplication">
              <ApplicationFormLayout />
            </Route>
          </Switch>
        </AppMenu>
      </Router>
    </ThemeProvider>
  );
}

export default App;
