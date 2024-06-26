import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('combobox').selectOption('englisch');
  await page.getByLabel('deutsch').check();
  await page.getByRole('button', { name: 'losgeht`s' }).click();
  await page.getByRole('textbox').click();
});