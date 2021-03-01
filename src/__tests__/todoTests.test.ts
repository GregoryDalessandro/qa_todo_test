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
  todos: By = By.css("li.todo");
  todoLabel: By = By.css("label");
  todoComplete: By = By.css("input");
  todoStar: By = By.className("star");
  starBanner: By = By.className("starred");
  todoCount: By = By.className("todo-count");
  clearCompletedButton: By = By.css("button.clear-completed");

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
    // select the search bar and add a todo
    await driver.wait(until.elementLocated(todoPage.todoInput));
    await driver.findElement(todoPage.todoInput).sendKeys("Test To-Do\n");
    // verify that the todo item is now in the list of todos
    // let myTodos = await driver.findElements(todoPage.todos);
    // let myTodo = await myTodos.filter(async (todo) => {
    //   (await (await todo.findElement(todoPage.todoLabel)).getText()) == "Test To-Do";
    // });
    // expect(myTodo).toBeTruthy();
  });
  it("can remove a todo", async () => {
    let myTodos = await driver.findElements(todoPage.todos);
    // select a todo
    await myTodos
    .filter(async (todo) => {
      (await (await todo.findElement(todoPage.todoLabel)).getText()) ==
        "Test To-Do";
    })[0]
    .findElement(todoPage.todoComplete)
    .click();
    // mark todo compelete
    await (await driver.findElement(todoPage.clearCompletedButton)).click();
    myTodos = await driver.findElements(todoPage.todos);
    let myTodo = await myTodos.filter(async (todo) => {
      (await (await todo.findElement(todoPage.todoLabel)).getText()) === "Test To-Do";
    });
    // verify todo is no longer in todos list
    expect(myTodo.length).toEqual(0);
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
