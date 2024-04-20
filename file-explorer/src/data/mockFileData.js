export const type = {
  folder: "FOLDER",
  file: "FILE",
};

export const mockFileData = {
  name: "root",
  id: "1",
  type: type.folder,
  children: [
    {
      name: "chat-app",
      id: "2",
      type: type.folder,
      children: [
        {
          name: "src",
          id:"5",
          type: type.folder,
          children: [
            {
              name: "App.js",
              type: type.file,
            },
            {
              name: "index.js",
              type: type.file,
            },
            {
              name: "xyz.js",
              type: type.file,
            },
          ],
        },
        {
          name: "empty-folder",
          id: "6",
          type: type.folder,
        },
      ],
    },
    {
      name: "dark-light-app",
      id:"3",
      type: type.folder,
      children: [
        {
          name: "src",
          id:"7",
          type: type.folder,
          children: [
            {
              name: "App.js",
              type: type.file,
            },
            {
              name: "index.js",
              type: type.file,
            },
            {
              name: "xyz.js",
              type: type.file,
            },
          ],
        },
      ],
    },
    {
      name: "portfolio-app",
      id:"4",
      type: type.folder,
      children: [
        {
          name: "src",
          id:"8",
          type: type.folder,
          children: [
            {
              name: "App.js",
              type: type.file,
            },
            {
              name: "index.js",
              type: type.file,
            },
            {
              name: "xyz.js",
              type: type.file,
            },
          ],
        },
        {
          name: "app",
          id: "9",
          type: type.folder,
          children: [
            {
              name: "App.js",
              type: type.file,
            },
            {
              name: "index.js",
              type: type.file,
            },
            {
              name: "xyz.js",
              type: type.file,
            },
          ],
        },
      ],
    },
  ],
};
