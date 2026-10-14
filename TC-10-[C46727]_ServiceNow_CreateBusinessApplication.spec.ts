import { leapwork } from "./leapwork";

import { ServiceNowLoginToServiceNow } from "@assets/ServiceNow/ServiceNow_LoginLogout/ServiceNow_LoginToServiceNow";
import { filterNavMenuSearch } from "@assets/ServiceNow/Helpers/filterNavMenuSearch";
import { selectDropDownValueByValue } from "@assets/ServiceNow/Helpers/selectDropDownHelper";
import { BusinessApplicationLocators as bl } from "@assets/ServiceNow/Pages/businessapplication.locators";
import { ServiceNowLogOut } from "@assets/ServiceNow/ServiceNow_LoginLogout/ServiceNow_LogOut";

leapwork.variables.set("description", "Detailed Descripton added", leapwork.storage.LOCAL);
const lw__description = leapwork.variables.get("description", leapwork.storage.LOCAL) as string;

const businessAppName = `TestBusinessApplication_${Date.now()}`;
leapwork.variables.set("name", businessAppName , leapwork.storage.LOCAL);
const lw__name = leapwork.variables.get("name", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: 7ca55fc9
await leapwork.step("Use test case: ServiceNow_LoginToServiceNow", async () => {
    return await ServiceNowLoginToServiceNow();
}, { action: "asset_reference", linkedAssetType: "test-case" });
    
// ai-studio-step-id: 6eb199d9
await leapwork.step("Use TypeScript asset: FilterHelper", async () => {
    await filterNavMenuSearch(page,"Business Applications", "Self-Service","Business Applications")
}, { action: "asset_reference" });

// ai-studio-step-id: RVYR6StX
await leapwork.step("Click the New button on the Business Applications list", async () => {
    // Click button "New"
    await page.waitForTimeout(10000);
    await page.getByRole('button', { name: 'New' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"sysverb_new\"]" });

// ai-studio-step-id: MfHHf6kI
await leapwork.step("Click the Name field on the New Business Application form", async () => {
    // Click textbox " Name"
    await page.getByRole('textbox', { name: 'Name' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"cmdb_ci_business_app.name\"]" });

// ai-studio-step-id: lcJMdD7K
await leapwork.step(`Fill the Name field with "${lw__name}" on the Business Application form`, async () => {
    // Fill textbox " Name"
    await page.getByRole('textbox', { name: 'Name' }).fill(String(lw__name));
}, { action: "input", relativeXpath: "//*[@id=\"cmdb_ci_business_app.name\"]" });

// ai-studio-step-id: pw1k9hb320
await leapwork.step(`Validate the Name field shows ${lw__name} on the New Business Application form`, async () => {
    // Assert textbox " Name" contains "TestApp1"
    await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue(lw__name);
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.name\"]" });

// ai-studio-step-id: pw1l1jimu0
await leapwork.step("Select \"Homegrown\" from Application type", async () => {
    // Click combobox "Field value has changed since last updateApplication type"
    //await page.getByLabel('Application type').click();
    const applicationTypeVal = 'homegrown';
    await selectDropDownValueByValue(page,bl.applicationType,applicationTypeVal,'#gsft_main');
});

// ai-studio-step-id: pw1urdvkd0
await leapwork.step("Validate that Application type shows \"Homegrown\" on the New Record | Business Application page", async () => {
    // Assert combobox "Field value has changed since last updateApplication type" contains "Homegrown"
    await expect(page.getByLabel('Application type')).toHaveValue("homegrown");
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.application_type\"]" });

// ai-studio-step-id: pw1evm4a00
await leapwork.step("Select '.net' from Technology Stack", async () => {
    // Assert combobox "Field value has changed since last updateTechnology stack" contains ".net"
    const techStackVal = '.net';
    await selectDropDownValueByValue(page,bl.technologyStack,techStackVal,'#gsft_main');
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.technology_stack\"]" });

// ai-studio-step-id: pw1h0o9bn0
await leapwork.step("Validate Technology Stack shows'.net' on the new Record | Business Application Page", async () => {
    // Assert combobox "Field value has changed since last updateTechnology stack" contains ".net"
    await expect(page.getByLabel('Technology stack')).toHaveValue(".net");
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.technology_stack\"]" });

// ai-studio-step-id: H5wNAzug
await leapwork.step("Select \"Web Based\" from Architecture type", async () => {
    // Click combobox "Field value has changed since last updateArchitecture type"
    //await page.getByLabel('Architecture type').click();
    const architectureTypeVal = 'web';
    await selectDropDownValueByValue(page,bl.architectureType,architectureTypeVal,'#gsft_main');
}, { action: "click", relativeXpath: "//*[@id=\"cmdb_ci_business_app.architecture_type\"]" });

// ai-studio-step-id: QRUhgc2l
await leapwork.step("Validate the Business Application's Architecture type is set to \"Web Based\"", async () => {
    // Assert combobox "Field value has changed since last updateArchitecture type" contains "Web Based"
    await expect(page.getByLabel('Architecture type')).toHaveValue("web");
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.architecture_type\"]" });

// ai-studio-step-id: hCu6h35f
await leapwork.step("Select \"Hybrid\" from Install type", async () => {
    // Click combobox "Field value has changed since last updateInstall type"
    //await page.getByLabel('Install type').click();
    const installTypeVal = 'hybrid';
    await selectDropDownValueByValue(page,bl.installType,installTypeVal,'#gsft_main');
}, { action: "click", relativeXpath: "//*[@id=\"cmdb_ci_business_app.install_type\"]" });

// ai-studio-step-id: AydLpRFW
await leapwork.step("Validate the Business Application form's Install type is set to \"Hybrid\"", async () => {
    // Assert combobox "Field value has changed since last updateInstall type" contains "Hybrid"
    await expect(page.getByLabel('Install type')).toHaveValue("hybrid");
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.install_type\"]" });

// ai-studio-step-id: HdbBHRz7
await leapwork.step("Select \"0-49\" from User base", async () => {
    // Click combobox "Field value has changed since last updateUser base"
    //await page.getByLabel('User base').click();
    const userBaseVal = '49';
    await selectDropDownValueByValue(page,bl.userBase,userBaseVal,'#gsft_main');
}, { action: "click", relativeXpath: "//*[@id=\"cmdb_ci_business_app.user_base\"]" });

// ai-studio-step-id: 7KWVvkMM
await leapwork.step("Validate the User base field shows \"0-49\" on the New Business Application form", async () => {
    // Assert combobox "Field value has changed since last updateUser base" contains "0-49"
    await expect(page.getByLabel('User base')).toHaveValue("49");
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.user_base\"]" });

// ai-studio-step-id: nrti9BRU
await leapwork.step("Select \"Windows\" from Platform", async () => {
    // Click combobox "Field value has changed since last updatePlatform"
    //await page.getByLabel('Platform', { exact: true }).click();
    const platformVal = 'windows';
    await selectDropDownValueByValue(page,bl.platform,platformVal,'#gsft_main');
}, { action: "click", relativeXpath: "//*[@id=\"cmdb_ci_business_app.platform\"]" });

// ai-studio-step-id: O4ZxFv5Z
await leapwork.step("Validate the Business Application form's Platform field is set to \"Windows\"", async () => {
    // Assert combobox "Field value has changed since last updatePlatform" contains "Windows"
    await expect(page.getByLabel('Platform', { exact: true })).toHaveValue("windows");
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.platform\"]" });

// ai-studio-step-id: UFCUUzXP
await leapwork.step("Click the Description field on the New Business Application form", async () => {
    // Click textbox " Description"
    await page.getByRole('textbox', { name: ' Description' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"cmdb_ci_business_app.short_description\"]" });

// ai-studio-step-id: y2gsXgKI
await leapwork.step(`Fill the Description field with "${lw__description}" on the Business Application form`, async () => {
    // Fill textbox " Description"
    await page.getByRole('textbox', { name: ' Description' }).fill(String(lw__description));
}, { action: "input", relativeXpath: "//*[@id=\"cmdb_ci_business_app.short_description\"]" });

// ai-studio-step-id: fz1UtIJQ
await leapwork.step("Validate the Description field shows \"Detailed Descripton added\" on the New Record page", async () => {
    // Assert textbox " Description" contains "Detailed Descripton added"
    await expect(page.getByRole('textbox', { name: ' Description' })).toHaveValue("Detailed Descripton added");
}, { action: "validate", relativeXpath: "//*[@id=\"cmdb_ci_business_app.short_description\"]" });

// ai-studio-step-id: solcTl0c
await leapwork.step("Click the lookup button for the IT Application owner field", async () => {
    // Click span
    await page.getByRole('button', { name: 'Look up value for field: IT' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"lookup.cmdb_ci_business_app.it_application_owner\"]/span" });

// ai-studio-step-id: 1azrtWSz
await leapwork.step("Click Abel Tuter in the user list", async () => {
    // Click button "Abel Tuter"
    await page.getByRole('button', { name: 'Abel Tuter' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"row_sys_user_62826bf03710200044e0bfc8bcbe5df1\"]/td[3]/a" });

// ai-studio-step-id: nkylEAEO
await leapwork.step("Click the add-record icon for the IT Application owner field", async () => {
    // Click div
    await page.locator('[id="element.cmdb_ci_business_app.it_application_owner"] > .col-xs-2').click();
}, { action: "click", relativeXpath: "//*[@id=\"element.cmdb_ci_business_app.it_application_owner\"]/div[3]" });

// ai-studio-step-id: 7yxxaSaF
await leapwork.step("Click the Submit button to create the new Business Application record", async () => {
    // Click button "Submit"
    await page.locator('#sysverb_insert_bottom').click();
}, { action: "click", relativeXpath: "//*[@id=\"sysverb_insert_bottom\"]" });

// ai-studio-step-id: gjLbVWHm
await leapwork.step("Click the Search box in the Business Applications list", async () => {
    // Click searchbox "Search"
    await page.getByRole('searchbox', { name: 'Search', exact: true }).click();
}, { action: "click", relativeXpath: "//*[@id=\"22d593c9c3ee8f100e477275e4013104_text\"]" });

// ai-studio-step-id: FpD8OUJE
await leapwork.step(`Fill the Business Applications search field with "${lw__name}"`, async () => {
    // Fill searchbox "Search"
    await page.getByRole('searchbox', { name: 'Search', exact: true }).fill(String(lw__name));
}, { action: "input", relativeXpath: "//*[@id=\"22d593c9c3ee8f100e477275e4013104_text\"]" });

// ai-studio-step-id: k7tIJIJp
await leapwork.step("Press Enter on the Business Applications list page.", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pws44t3q00
await leapwork.step(`Validate the Business Applications list shows ${lw__name}`, async () => {
    // Assert link "Open record: TestBusinessApplication_1785939435191" contains "TestBusinessApplication_1785939435191"
    await page.waitForSelector("[id*='row_cmdb_ci_business_app']");
    await expect(page.frameLocator('#gsft_main').getByRole('link', { name: `Open record: ${lw__name}` })).toContainText(String(lw__name));
}, { action: "validate", relativeXpath: `//*[@id*='row_cmdb_ci_business_app']`});

// ai-studio-step-id: 1d3d2f53
await leapwork.step("Use test case: ServiceNow_LogOut", async () => {
    return await ServiceNowLogOut();
}, { action: "asset_reference", linkedAssetType: "test-case" });