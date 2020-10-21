const messages = [
  {
    id: 0,
    name: "Inbox",
    messages: [
      {
        id: 0,
        from: "Lasse",
        to: "you",
        created: "2020-10-20T17:11:00.350Z",
        body: "Hej vgd?"
      },
      {
        id: 1,
        from: "Lasse",
        to: "you",
        created: "2020-10-20T17:12:30.350Z",
        body: "Ses?"
      },
      {
        id: 2,
        from: "Lasse",
        to: "you",
        created: "2020-10-20T17:19:30.350Z",
        body: "Krya!"
      }
    ]
  },
  {
    id: 1,
    name: "Sent",
    messages: [
      {
        id: 0,
        from: "you",
        to: "Lasse",
        created: "2020-10-20T17:12:00.350Z",
        body: "Inget, sj?"
      },
      {
        id: 1,
        from: "you",
        to: "Lasse",
        created: "2020-10-20T17:18:00.350Z",
        body: "Kan inte, har symtom :'("
      }
    ]
  }
]

export default messages;