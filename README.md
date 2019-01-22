# Pingale

## 🛎 Check a web address exists

### API

```
/ping?url=https://www.website.com
```

### Results

| Status | Meaning
| - | -
| 204 | No content - No URL was supplied
| 404 | Not Found - Request was successful but page was not found
| 500 | Server Error - The request has failed
| * | The response from the requested URL
