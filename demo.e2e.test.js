describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com');
      await page.screenshot({path: './demo.png'})
    });
  
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
  });