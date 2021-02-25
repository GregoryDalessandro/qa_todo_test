class TodoPage {
}

describe("the todo app", () => {
  // before each test navigate to the main page
  // after each test close the window
  it("can add a todo", () => {
    // select the search bar
      // type out a todo and press enter
    // verify that the todo item is now in the list of todos
  });
  it("can remove a todo", () => {
    // select a todo
    // mark todo compelete
    // verify todo is no longer in todos list
  });
  it("can mark a todo with a star", () => {
    // select a todo
    // select the star
    // verify the todo is marked with the star
  });
  it("has the right number of todos listed", () => {
    // count the amount of todos in the todo list
    // verify the count is accurate
  });
});
