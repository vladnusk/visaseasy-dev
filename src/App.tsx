import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, green } from '@mui/material/colors';
import { AppMenu } from './components/AppMenu';
import ApplicationsList from './pages/ApplicationsList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ApplicationFormLayout } from './pages/ApplicationFormLayout';
import FAQ from './pages/FAQ';

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
        <Switch>
          <Route exact path="/">
            {isLogged ? (
              <Redirect from="/" to="/dashboard" />
            ) : (
              <Redirect from="/" to="/signin" />
            )}
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <AppMenu>
            <>
              <Route path="/dashboard">
                <ApplicationsList />
              </Route>
              <Route path="/newApplication">
                <ApplicationFormLayout />
              </Route>
              <Route path="/faq">
                <FAQ />
              </Route>
            </>
          </AppMenu>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
