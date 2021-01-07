import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route  exact path="/" component={Home} />
          </Switch>
            
        </BrowserRouter>
    )
}

export default Routes