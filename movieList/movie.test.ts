import { Builder, Capabilities, By } from "selenium-webdriver";
// import { afterAll, beforeAll, test } from "../google/node_modules/@jest/globals/build";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () =>{
    await driver.quit();
});

test("I can add movie", async () => {
    let searchBar = await driver.findElement(By.xpath('/html/body/main/section/form/input'))

    await searchBar.sendKeys("Star Wars\n");

    await driver.sleep(5000)
})