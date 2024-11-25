import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Page404 from "../pages/Page404";
import UserList from "../components/UserList";

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/users" component={UserList} />
        <Route path="*" component={Page404} />
        
      </Switch>
  );
}
