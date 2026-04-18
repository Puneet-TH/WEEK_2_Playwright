// @ts-check
import { test, expect } from '@playwright/test';

test('register_demoqa', async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/demo-site/');
  await expect(page).toHaveURL('https://vinothqaacademy.com/demo-site/');
  await page.locator('//input[@id="vfb-5"]').fill('Puneet')
//   await expect(page.locator('//label[@for="vfb-5"]')).toHaveText(['First', 'Name']);
  await page.locator('#vfb-7').fill('Thapliyal')
 await expect(page.locator('#vfb-7')).toHaveValue('Thapliyal');

  await page.locator('#vfb-31-1').click()
  await expect(page.locator('#vfb-31-1')).toBeChecked({checked : true})
  
  

  await page.locator('//input[@id="vfb-13-address"]').fill('kharar')
  await expect(page.locator('//input[@id="vfb-13-address"]')).toBeEnabled()
  await page.locator('//input[@id="vfb-13-address-2"]').fill('Ranjit nagar')
  await expect(page.locator('//input[@id="vfb-13-address-2"]')).toBeVisible()
  await page.locator('//input[@id="vfb-13-state"]').fill('Punjab')
  await page.locator('//input[@id="vfb-13-city"]').fill('Mohali')
  await page.locator('//input[@id="vfb-13-zip"]').fill('12067')
   await page.locator('(//span[@class="select2-selection select2-selection--single"])[1]').click()
  await page.locator('//input[@class="select2-search__field"]').fill('Ind')
  await page.keyboard.press('Enter')



  await page.locator('#vfb-14').fill('thapli@gmail.com')
 await expect(page.locator('//label[@for="vfb-18"]')).toContainText(['Date'])
  await page.locator('#vfb-18').fill('04/03/2026')
  await page.keyboard.press('Enter')
 
  await page.locator('(//span[@class="select2-selection__arrow"])[2]').click()
  await page.locator('//input[@class="select2-search__field"]').fill('11')
  await page.keyboard.press('Enter')
  await page.locator('(//span[@class="select2-selection__arrow"])[3]').click()
  await page.locator('//input[@class="select2-search__field"]').fill('30')
  await page.keyboard.press('Enter')

  await page.locator('//input[@id="vfb-19"]').fill('1111111111')
  await page.locator('//textarea[@id="vfb-23"]').fill('sample query')
  await page.locator('#vfb-3').fill('22')
  await page.locator('//input[@id="vfb-4"]').click()

  await page.screenshot({path: 'screenshot/s3.png'})
  await expect(page).toHaveScreenshot('s3.png');

});
