import { expect, test } from '@playwright/test'
import excel from 'exceljs'
test("flipkart", async({page}) => {
       let book = new excel.Workbook()
            await book.xlsx.readFile("C:/Users/ASUS/Desktop/asingment-playwright-1/Excel/flipkart.xlsx")
            let sheet2 = await book.getWorksheet("Sheet2")
            if(!sheet2){
                  sheet2 = await book.addWorksheet("Sheet2")
            }
      await page.goto("https://www.flipkart.com/")
      await page.locator('//span[@role="button"]').click()
      await page.locator('(//div[@class="css-g5y9jx"])[27]').click()
      await page.locator('//a[@href="/upp/~cs-g50no38urc/pr?sid=upp&collection-tab-name=Induction+base&pageCriteria=default&BU=Home"]').click()
      await page.locator('(//div[@class="ybaCDx"])[1]').click()
      await page.locator('(//div[@class="WNv7PR"])[1]').click()

      const [page2] = await Promise.all([
                  page.waitForEvent('popup'),
                  page.locator('//a[@title="LAZYwindow Iron Tadka Pan and Foldable Plastic Whisker Hand Blender Mixer Tadka Pan 12 cm diameter 0.5 L capacity"]').click()
            ]);
      const name = await page2.locator('//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]').innerText()
      await expect(await page2.locator('//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]')).toContainText("Iron")
      const price = await page2.locator('//div[@class="v1zwn21l v1zwn20 _1psv1zeb9 _1psv1ze0"]').innerText()
      console.log(name);
      console.log(price);
     
      await expect(name.length).toBeGreaterThan(0)
      await expect(parseInt(price.slice(1))).toBeGreaterThan(0)

      sheet2.getRow(1).getCell(1).value = name;
      sheet2.getRow(2).getCell(1).value = price;
      
      await book.xlsx.writeFile('C:/Users/ASUS/Desktop/asingment-playwright-1/Excel/flipkart.xlsx')

})
