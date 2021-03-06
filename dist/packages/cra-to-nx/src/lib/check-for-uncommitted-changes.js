"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForUncommittedChanges = void 0;
const child_process_1 = require("child_process");
function checkForUncommittedChanges() {
    const gitResult = child_process_1.execSync(`git status --porcelain`);
    if (gitResult.length > 0) {
        console.log('❗️ Careful!');
        console.log('You have uncommited changes in your repository.');
        console.log('');
        console.log(gitResult.toString());
        console.log('Please commit your changes before running the migrator!');
        process.exit(1);
    }
}
exports.checkForUncommittedChanges = checkForUncommittedChanges;
//# sourceMappingURL=check-for-uncommitted-changes.js.map