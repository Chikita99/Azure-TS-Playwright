import { test } from '../../fixtures/baseFixture'
import { product } from '../../fixtures/apiFixtures'
import { expect } from '@playwright/test';
import { ApiClient } from '../../helpers/apiClient';

test('Get all products list @T0003', async ({ page }) => {
    const allProductsListResponse = await ApiClient.getAllProductsList(page);
    expect(allProductsListResponse.products[0]).toEqual(product);
})