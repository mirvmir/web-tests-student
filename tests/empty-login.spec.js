import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Вход и Регистрация', { exact: true }).click();
  await page.getByRole('button', { name: 'Войти', exact: true }).click();

  const emailError = page.locator('[data-marker="email-error"]');
  const passwordError = page.locator('[data-marker="password-error"]');

  await expect(emailError).toHaveText('Email обязателен');
  await expect(passwordError).toHaveText('Пароль обязателен');
});
