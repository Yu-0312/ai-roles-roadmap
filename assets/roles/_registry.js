/* 職位登錄。新增職位:在 assets/roles/ 新增一個檔案呼叫 registerRole({...}),
 * 再到 index.html 與 role.html 各加一行 <script>。欄位格式可參考 fde.js。 */
window.ROLES = window.ROLES || [];
window.registerRole = function(role){ window.ROLES.push(role); };
