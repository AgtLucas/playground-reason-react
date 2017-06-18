let component = ReasonReact.statelessComponent "App";

let make _ => {
  ...component,
  render: fun () _self => <div> (ReasonReact.stringToElement "This is the app.") </div>
};
