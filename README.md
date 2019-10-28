[Blue Oak Council's copyleft license families](https://blueoakcouncil.org/copyleft#copyleft-families) in JSON format

# Data

This package exports an Object.  Keys are names of families of copyleft licenses.  Values are Arrays.

Each element of a copyleft-family Array is an Object:

```javascript
{
  "id": "GPL-2.0-only", // SPDX or temporary ID
  "name": "GNU General Public License v2.0 only",
  "url": "https://spdx.org/licenses/GPL-2.0-only.html"
}
```

# Versioning

This package's versions track the version of the copyleft families list.  Version 1 of the copyleft families is version 1.0.0 of this package.  Any changes to the content of the list increment that version number.  Any technical changes to this package only, and not to the content of the list, will be minor or patch releases.
