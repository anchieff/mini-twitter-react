import React from 'react';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

const App = () => {
  const data = [
    {label: "Going to learn React", important: true, id: "gsfgsjkfh"},
    {label: "That is so good", important: false, id: "gsfgsjkfe"},
    {label: "I need a break...", important: false, id: "gsfgsjkfn"}
  ];

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
    
  );
}

export default App;