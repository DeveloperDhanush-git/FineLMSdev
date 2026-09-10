// import {test, expect} from "@playwright/test"
// test("Type a Movie name", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/input-fields")
//     await page.getByLabel("Movie name").fill("KGF")
//     await page.getByRole("button",{name: "Submit"}).click();
//     await expect(page.getByTestId("result-s01")).toHaveText("You entered: KGF");
// })
// test("Append Text & Press Tab", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/input-fields")
//     const movieinput = await page.getByTestId("input-append")
//     await movieinput.fill("Avengers");
//     await movieinput.press("End")
//     await movieinput.type(" end game")
//     await movieinput.press("Tab")
//     await expect(page.getByTestId("result-s02")).toHaveText("Current value: Avengers end game")
// })

// test("Drag and drop", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/drag-drop")
//     const src = await page.getByTestId("dd-item")
//     const tar = await page.getByTestId("dd-drop-zone")
//     await src.dragTo(tar);
// })

// test("File Upload", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/file-upload")
//     await page.getByTestId('fu-single-input')
//     .setInputFiles('testdata.pdf')
// })
// test("Multi File Upload", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/file-upload")
//     await page.getByTestId('fu-multi-input')
//     .setInputFiles(['testdata.pdf', 'testdata2.pdf'])
// })
// test("login and download file", async({page})=>{
//     await page.goto("http://localhost:4321/login")
//     await page.getByLabel("Email Address").fill("admin@test.com")
//     await page.getByPlaceholder("••••••••••••").fill("admin123")
//     await page.getByRole("button",{name:"Sign In", exact:true}).click()
//     await page.goto("http://localhost:4321/manageCourses/70b18739-d2e1-4729-b846-dc37bdadbad6")
//     await page.getByRole("button",{name:" Download"}).click()
//     await expect(page.getByRole("dialog")).toBeVisible()
//     await page.getByRole("radio",{name:"PDF"}).check()
//     await expect(page.getByRole("radio",{name:"PDF"})).toBeChecked()
//     const downloadpromise = page.waitForEvent("download")
//     await page.getByRole("button",{name:"Export"}).click()
//     const download = await downloadpromise
//     await download.saveAs("./download/syllabus.pdf")
// })  

// test("New Tab", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/tabs-windows")
//     const newpage = page.waitForEvent("popup")
//     page.getByTestId('tw-open-new-tab').click()
//     const tabpage = await newpage
// })
// test("New Tab", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/dropdowns")
//     await page.getByRole('combobox', { name: 'Select Fruit' }).selectOption("Apple")
// })
// test("Pop Up", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/alerts-dialogs")
//     await page.getByTestId("open-info-dialog").click()
//     await page.getByRole("button",{name:"Got It"}).click()
// })
// test("Pop Up", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/data-table")
//     const tablerow = await page.locator("tr[data-testid='book-row'][data-book-id='book-001']")
//     await tablerow.getByRole("button",{name:"Edit"}).click()
//     await page.getByRole("button",{name:"Save Changes"}).click()
// })
// test("Date", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/date-picker")
//     await page.getByTestId('dp-basic-input').fill("2026-11-09")
// })

// test("kanban drag", async({page})=>{
//     await page.goto("https://qaplayground.com/practice/drag-drop")
//     const src = page.locator('[data-task-id="task-1"]')
//     const tar = page.getByText('Refactor page objects', { exact: true })
//     await src.dragTo(tar)
// })