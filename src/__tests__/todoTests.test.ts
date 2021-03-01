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
  beforeEach(async() => {
    await driver.get(todoPage.url);
  });
  // after each test close the window
  afterAll(async() => {
    await driver.quit();
  });
  it("can add a todo", async() => {
    await driver.wait(until.elementLocated(todoPage.todoInput));
    // select the search bar
      // type out a todo and press enter
    await driver.findElement(todoPage.todoInput).sendKeys("Test To-Do\n");
    let myTodos = await driver.findElements(todoPage.todos);
    // filter todos to find the one we just added
    let myTodo = await myTodos.filter(async (todo) => {
      (await (await todo.findElement(todoPage.todoLabel)).getText()) == "Test To-Do";
    });
    // verify that the todo item is now in the list of todos
    expect(myTodo).toBeTruthy();
  });
  it("can remove a todo", async () => {
    // select a todo
    // mark todo compelete
    // verify todo is no longer in todos list
  });
  it("can mark a todo with a star", async () => {
    // select a todo
    // select the star
    // verify the todo is marked with the star
  });
  it("has the right number of todos listed", async () => {
    // count the amount of todos in the todo list
    // verify the count is accurate
  });
});
