import { isFunctionExpression } from "typescript";
import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver
} from "selenium-webdriver";

const chromedriver = require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

class TodoPage {
  driver: WebDriver;
  url: string = "https://devmountain.github.io/qa_todos/";
  todoInput: By = By.className("new-todo");
  todos: By = By.className("todo-list");
  todo: By = By.className("todo");
  todoLabel: By = By.xpath("//label");
  todoStar: By = By.className("star");
  starred: By = By.className("starred");
  todoComplete: By = By.className("toggle");
  clearCompletedButton: By = By.className("clear-completed");
  todoCount: By = By.className("todo-count");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }
}

const todoPage = new TodoPage(driver);


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
