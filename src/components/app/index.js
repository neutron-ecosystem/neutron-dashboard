import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import './App.css';

class App extends Component {
  render() {
    return (
      <Paper className="App" zDepth={3}>
        <List>
          <ListItem primaryText="Context" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Runtime context" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Remote neutrons" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Lamda functions" leftIcon={<ContentSend />} />
          <ListItem primaryText="Fucntions log" leftIcon={<ContentInbox />} />
       </List>
     </Paper>
    );
  }
}

export default App;
