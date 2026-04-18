// @ts-check
import { test, expect } from '@playwright/test';

test('register_demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.locator('//input[@id="firstName"]').fill('Puneet')
  await expect(page.locator('//label[@id="userName-label"]')).toHaveText(['Name']);
  await page.locator('//input[@id="lastName"]').fill('Thapliyal')
await expect(page.locator('//input[@id="lastName"]')).toHaveValue('Thapliyal');

  await page.locator('//input[@id="userEmail"]').fill('thapliyal@gmail.com')

  await page.locator('//input[@class="form-check-input" ][@value="Male"]').click()
  await expect(page.locator('//input[@class="form-check-input" ][@value="Male"]')).toBeChecked({checked : true})
  
  await page.locator('//input[@id="userNumber" ]').fill('1111111111')
  await expect(page.locator('//input[@id="userNumber"]')).toBeVisible()

  await page.locator('//input[@id="dateOfBirthInput" ]').fill('18 Apr 2026')
  await expect(page.locator('//input[@id="dateOfBirthInput"]')).toBeEnabled()

  await page.locator('//input[@id="subjectsInput"]').fill('Math')
  await page.keyboard.press('Enter')
  await page.locator('//input[@id="hobbies-checkbox-1"]').click()
  await page.locator('//textarea[@id="currentAddress"]').fill('kharar mohali 12071')
 await expect(page.locator('//label[@id="currentAddress-label"]')).toContainText(['Current'])
  await page.locator('(//div[@class="css-hlgwow"])[1]').click()
  await page.keyboard.press('Enter')
  await page.locator('(//div[@class="css-hlgwow"])[2]').click()
  await page.keyboard.press('Enter')
  await page.locator('//button[@id="submit"]').click()
  await page.screenshot({path: 'screenshot/s2.png'})
  await expect(page).toHaveScreenshot('s2.png');

});
