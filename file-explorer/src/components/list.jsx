import React, { useState } from "react";
import { type } from "../data/mockFileData";

function List({ list = [] }) {
  const [expand, setExpand] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [creationType, setCreationType] = useState("FOLDER");

  const createNew = (event, createType) => {
    event.stopPropagation();
    setIsCreate(true);
    setExpand(true);
    if (createType === type.folder) {
      setCreationType(type.folder);
    } else {
      setCreationType(type.file);
    }
  };

  const onFocusOut = (e, id) => {
    if (e.target.value == "") {
      setIsCreate(false);
      setCreationType("");
    } else {
      if (list.id === id) {
        let obj = {
          name: e.target.value,
          id: list.id + Math.floor(Math.random(0) * 10),
        };

        obj["type"] = creationType === type.folder ? type.folder : type.file;
        if (creationType === type.folder) {
          obj["children"] = [];
        }
        if (list.children) {
          list.children.push(obj);
        } else {
          list.children = [obj];
        }
        setIsCreate(false);
        setCreationType("");
      }
    }
  };

  if (list.type === type.folder) {
    return (
      <div className="folder">
        <p onClick={() => setExpand(!expand)} className="title cursor">
          <div>
            <span>🗂️</span>
            <span>{list.name}</span>
          </div>
          <div>
            <button onClick={(e) => createNew(e, type.folder)}>+ Folder</button>
            <button onClick={(e) => createNew(e, type.file)}>+ File</button>
          </div>
        </p>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {isCreate && (
            <div>
              <span>{creationType === type.folder ? "🗂️" : "📄"}</span>
              <input
                autoFocus
                type="text"
                onBlur={(e) => onFocusOut(e, list.id)}
              />
            </div>
          )}
          {list?.children &&
            list.children?.map((l, i) => {
              return <List key={i} list={l} />;
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <p className="title">
          <span>📄</span>
          <span>{list.name}</span>
        </p>
      </div>
    );
  }
}

export default List;
