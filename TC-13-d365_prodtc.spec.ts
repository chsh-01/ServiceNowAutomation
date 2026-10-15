import { leapwork } from "./leapwork";

import { SUBLoginToCE } from "@assets/D365/CE/Subflows/SUB-Login to CE";
import { SUBClickSalesHub } from "@assets/D365/CE/Subflows/SUB-Click Sales hub";

const randomFiveDigits = Math.floor(10000 + Math.random() * 90000).toString();

await leapwork.variables.set(
    "firstName",
    `QA${randomFiveDigits}`,
    leapwork.storage.LOCAL
);
const lw__firstName = leapwork.variables.get(
    "firstName",
    leapwork.storage.LOCAL
) as string;

await leapwork.variables.set(
    "lastName",
    `QA${randomFiveDigits}`,
    leapwork.storage.LOCAL
);
const lw__lastName = leapwork.variables.get(
    "lastName",
    leapwork.storage.LOCAL
) as string;

await leapwork.variables.set(
    "eG1234567890",
    `${randomFiveDigits}${randomFiveDigits}`,
    leapwork.storage.LOCAL
);
const lw__eG1234567890 = leapwork.variables.get(
    "eG1234567890",
    leapwork.storage.LOCAL
) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw11k4qpc0
await leapwork.step("Use test case: SUB-Login to CE", async () => {
    return await SUBLoginToCE();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pwibsekn00
await leapwork.step("Use test case: SUB-Click Sales hub", async () => {
    await page.waitForURL(
        "https://leapwork-sandbox.crm4.dynamics.com/main.aspx?forceUCI=1&pagetype=apps", 
    {timeout: 10000, waitUntil: 'domcontentloaded'}
    );
    await logInfo('Application loaded');
    
    return await SUBClickSalesHub();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: pw1y8kory0
await leapwork.step("Click Contacts in the Dynamics 365 navigation menu", async () => {
    // Click span
    await page.waitForTimeout(10000);
    await page.waitForSelector("div[title='Contacts']", {state: 'visible', timeout:20000});
    const contactsLink = page.getByText('Contacts', { exact: true });
    if(await contactsLink.isVisible()){
        await contactsLink.click();
    }
}, { action: "click", relativeXpath: "//div[@class='pa-bi flexbox']/descendant::div[@role='presentation' and @title='Contacts']" });

// ai-studio-step-id: pwnrr4id00
await leapwork.step("Click New to create a new Contact record", async () => {
    // Click span
    await page.waitForSelector("//span[contains(text(),'New')]", {state: 'visible', timeout: 20000});
    const newBtn = page.getByRole('menuitem', { name: 'New Create a new Contact' });
    await expect(newBtn).toBeVisible();
    await logInfo(`${await newBtn.isVisible()}`)
    await newBtn.click();
}, { action: "click", relativeXpath: "//span[contains(text(),'New')]" });

// ai-studio-step-id: pw14ua96s0
await leapwork.step("Click the First Name field in the New Contact form", async () => {
    // Click textbox "First Name"
    await page.getByRole('textbox', { name: 'First Name' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"id-1fed44d1-ae68-4a41-bd2b-f13acac4acfa-1-fullname_compositionLinkControl_firstname4273edbd-ac1d-40d3-9fb2-095c621b552d-fullname_compositionLinkControl_firstname.fieldControl-text-input-component\"]" });

// ai-studio-step-id: pww7jth700
await leapwork.step(`Fill First Name with "${lw__firstName}"`, async () => {
    const locator = page.locator("internal:role=textbox[name=\"First Name\"i]");
    await locator.click({ force: true });
    await locator.fill(String(lw__firstName));
}, { action: "input", relativeXpath: "//*[@id=\"id-1fed44d1-ae68-4a41-bd2b-f13acac4acfa-1-fullname_compositionLinkControl_firstname4273edbd-ac1d-40d3-9fb2-095c621b552d-fullname_compositionLinkControl_firstname.fieldControl-text-input-component\"]" });

// ai-studio-step-id: pwkyqnse00
await leapwork.step("Click the Last Name field in the Contact Information form", async () => {
    // Click textbox "Last Name"
    await page.getByRole('textbox', { name: 'Last Name' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"id-1fed44d1-ae68-4a41-bd2b-f13acac4acfa-3-fullname_compositionLinkControl_lastname4273edbd-ac1d-40d3-9fb2-095c621b552d-fullname_compositionLinkControl_lastname.fieldControl-text-input-component\"]" });

// ai-studio-step-id: pwt5i28900
await leapwork.step(`Fill the Last Name field with "${lw__lastName}"`, async () => {
    // Fill textbox "Last Name"
    await page.getByRole('textbox', { name: 'Last Name' }).fill(String(lw__lastName));
}, { action: "input", relativeXpath: "//*[@id=\"id-1fed44d1-ae68-4a41-bd2b-f13acac4acfa-3-fullname_compositionLinkControl_lastname4273edbd-ac1d-40d3-9fb2-095c621b552d-fullname_compositionLinkControl_lastname.fieldControl-text-input-component\"]" });

// ai-studio-step-id: pw10ifo3o0
await leapwork.step("Click the Mobile Phone field in the Contact Information form", async () => {
    // Click textbox "Mobile Phone"
    await page.getByRole('textbox', { name: 'Mobile Phone' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/div/span/input[@aria-label=\"Mobile Phone\"]" });

// ai-studio-step-id: pw10yp54f0
await leapwork.step(`Fill the Mobile Phone field with "${lw__eG1234567890}"`, async () => {
    // Fill textbox "Mobile Phone"
    await page.getByRole('textbox', { name: 'Mobile Phone' }).fill(String(lw__eG1234567890));
}, { action: "input", relativeXpath: ".//div/div/div/div/span/input[@aria-label=\"Mobile Phone\"]" });

// ai-studio-step-id: pwfdyfz300
await leapwork.step("Click Save & Close on the New Contact form", async () => {
    await page.getByRole('menuitem', {
        name: 'Save & Close Save and close'
    }).click();

    // Wait 10 seconds after Save & Close
    await page.waitForTimeout(10000);
}, {
    action: "click",
    relativeXpath: "//*[@id=\"contact|NoRelationship|Form|Mscrm.SaveAndClosePrimary12-button\"]/span/span[2]"
});

const fullName = `${lw__firstName} ${lw__lastName}`;

// ai-studio-step-id: pwhcosvs00
await leapwork.step("Click the Contact Filter by keyword search box in My Active Contacts", async () => {
    const searchBox = page.locator("#quickFind_text_3");

    await expect(searchBox).toBeVisible({ timeout: 10000 });
    await searchBox.click();
}, {
    action: "click",
    relativeXpath: "//*[@id='quickFind_text_3']"
});

// ai-studio-step-id: pw8vssed00
await leapwork.step(`Fill the Contact Filter by keyword with "${fullName}"`, async () => {
    const searchBox = page.locator("#quickFind_text_3");

    await expect(searchBox).toBeVisible({ timeout: 10000 });
    await searchBox.fill(fullName);

    // Wait 5 seconds after entering the value
    await page.waitForTimeout(5000);

    // Press Enter on the same search box
    await searchBox.press("Enter");
}, {
    action: "input",
    relativeXpath: "//*[@id='quickFind_text_3']"
});

// ai-studio-step-id: pw1rnyqiq0
await leapwork.step(`Validate the Contacts My Active Contacts list shows "${fullName}"`, async () => {
    await page.waitForTimeout(10000);

    const contactLink = page.locator(`a[aria-label="${fullName}"]`);

    await expect(contactLink).toBeVisible({ timeout: 10000 });
}, {
    action: "validate"
});