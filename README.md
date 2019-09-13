# Product on-site test mockup api

### How to start
1. Git clone this repository.
2. Run `npm start`.

### GET /search

| Argument  | Query string | Description                            | Example    |
|-----------|--------------|----------------------------------------| ---------- |
| Text      | `q`          | The text to search.                     | `china`    |
| Topics    | `t`          | The topics to search, delimited by `,` | `Hong Kong,Asia`          |

#### Sample query
#### Search text with `investor` and topics with `Hong Kong` and `Asia`

`http://localhost:3001/?q=investor&t=Hong%20Kong,Asia`

#### Response
```
[
  {
    "id": 7,
    "text": "Hong Kong property investors ignore Singapore in favour of cheaper options elsewhere",
    "topics": [
      "Hong Kong",
      "Asia"
    ],
    "image": "http://localhost:3001/img/7.jpg"
  }
]
```

### GET /topics

#### Response
```
[
  "Hong Kong",
  "Asia",
  "China",
  "Europe",
  "Fashion",
  "Music"
]
```
