# File Explorer UI

## Problem Statement

Your task is to build a file explorer-type user interface (UI) that mimics the functionality of a typical file explorer application. The UI should display a hierarchical tree structure of folders and files, allowing the user to navigate through the nested folders by expanding and collapsing them.

### Requirements

1. **Folder Structure Display:**

- The file explorer should display a root folder at the top level.
- Each folder should have the ability to expand and collapse, revealing or hiding its contents (subfolders and files).
- Subfolders should be displayed as nested items within their parent folder, allowing for an arbitrary depth of nesting.
- Files should be displayed as leaf nodes within their respective folders.

2. **Add New Folder or File:**

- For each folder in the file explorer, there should be an option (e.g., a button or context menu) to add a new folder or file within that folder.
- When the "Add Folder" option is selected, the user should be prompted to enter a name for the new folder, which will then be added as a subfolder within the current folder.
- When the "Add File" option is selected, the user should be prompted to enter a name for the new file, which will then be added as a file within the current folder.

3. **User Interface:**

- The file explorer UI should be visually appealing and easy to navigate.
- Use appropriate icons or visual cues to distinguish between folders and files.
- Implement suitable user interactions, such as click or hover events, to expand/collapse folders and trigger the "Add Folder/File" options.

4. **Data Structure:**

- Design and implement an appropriate data structure (e.g., a tree or nested object) to represent the file explorer's folder and file hierarchy.
- The data structure should support efficient operations for traversing, adding, and modifying the folder/file structure.

5. **Coding Best Practices:**

- Follow best coding practices, including proper code organization, modularization, and commenting.
- Ensure cross-browser compatibility and responsive design for the UI.
- Implement error handling and input validation where necessary.

6. **Bonus Points (Optional):**

- Allow users to rename or delete existing folders and files.
- Implement drag-and-drop functionality for moving files and folders within the file explorer.
- Add search functionality to quickly locate files or folders by their names.

You can use plain JavaScript, or any modern frontend framework/library of your choice (e.g., React, Vue.js, Angular) to build the file explorer UI. Make sure to provide clear instructions on how to run and test your solution.
