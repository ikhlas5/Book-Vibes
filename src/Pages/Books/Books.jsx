// import React from 'react';

import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ListedRead from "../../Componets/ListedBook/ListedRead";
import ListedWisList from "../../Componets/ListedBook/ListedWisList";

const Books = () => {
    const[sortingType, setSortingType] = useState("");
    return (
        <div className="container mx-auto my-3">
      <div className="flex justify-center my-3">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by: {sortingType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedRead sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWisList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
    );
};

export default Books;