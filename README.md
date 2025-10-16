SECURITY:
- No security just random anonymous ID (random generated on each PC) to allow CRUD.
- Can be tweak on Firebase's realtime database rules.

VARIABLES:
- Random generated PK save to firebase as (pegawai_data/PK...).
- Variable's use: name, ic, email, phone, unit, jawatan_kini, jawatan_datang, jawatan_asal, timestamp, photoBase64.
- timestamp: record the time the employee's details were added.
- photoBase64: save uploaded photo on the addForm.html into Base64 string format because storage isn't available for Spark(Free) plan in firebase.

JS:
- Most of functions are local so there only 2 functions globally.
