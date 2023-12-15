import { expect } from '@playwright/test';

export async function isTrue(condition: boolean) {
  await expect(condition).toBeTruthy();
}

export async function isFalse(condition: boolean) {
  await expect(condition).toBeFalsy();
}
