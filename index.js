let data = [
  {
    "id": 323,
    "username": "rinood30",
    "profile": {
      "full_name": "Shabrina Fauzan",
      "birthday": "1988-10-30",
      "phones": [
        "08133473821",
        "082539163912"
      ]
    },
    "articles:": [
      {
        "id": 3,
        "title": "Tips Berbagi Makanan",
        "published_at": "2019-01-03T16:00:00"
      },
      {
        "id": 7,
        "title": "Cara Membakar Ikan",
        "published_at": "2019-01-07T14:00:00"
      }
    ]
  },
  {
    "id": 201,
    "username": "norisa",
    "profile": {
      "full_name": "Noor Annisa",
      "birthday": "1986-08-14",
      "phones": []
    },
    "articles:": [
      {
        "id": 82,
        "title": "Cara Membuat Kue Kering",
        "published_at": "2019-10-08T11:00:00"
      },
      {
        "id": 91,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-11-11T13:00:00"
      },
      {
        "id": 31,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-11-11T13:00:00"
      }
    ]
  },
  {
    "id": 42,
    "username": "karina",
    "profile": {
      "full_name": "Karina Triandini",
      "birthday": "1986-04-14",
      "phones": [
        "06133929341"
      ]
    },
    "articles:": []
  },
  {
    "id": 201,
    "username": "icha",
    "profile": {
      "full_name": "Annisa Rachmawaty",
      "birthday": "1987-12-30",
      "phones": []
    },
    "articles:": [
      {
        "id": 39,
        "title": "Tips Berbelanja Bulan Tua",
        "published_at": "2019-04-06T07:00:00"
      },
      {
        "id": 43,
        "title": "Cara Memilih Permainan di Steam",
        "published_at": "2019-06-11T05:00:00"
      },
      {
        "id": 58,
        "title": "Cara Membuat Brownies",
        "published_at": "2019-09-12T04:00:00"
      }
    ]
  }
]

filterNoPhone = () => {
  let filterData = data.filter(i => {
    return i.profile.phones.length <= 0
  })
  console.log(filterData)
}

filterArticle = () => {
  let filterData = data.filter(i => {
    return i["articles:"].length > 0
  })
  console.log(filterData)
}
filterHaveAnnis = () => {
  let filterData = data.filter(i => {
    return i.profile.full_name.includes("Annis")
  })
  console.log(filterData)
}
filterArt2020 = () => {
  let filterData = data.filter(i => {
    for (let j = 0; j < i["articles:"].length; j++) {
      if (i["articles:"][j]) {
        let d = new Date(i["articles:"][j].published_at)
        return d.getFullYear() == 2020
      }
    }
  })
  console.log(filterData)
}

filterBorn1986 = () => {
  let filterData = data.filter(i => {
    let year = new Date(i.profile.birthday)
    return year.getFullYear() == 1986
  })
  console.log(filterData)
}

filterTips = () => {
  let filterData = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i]["articles:"].length; j++) {
      if (data[i]["articles:"][j].title.includes("tips") || data[i]["articles:"][j].title.includes("Tips")) {
        filterData.push(data[i]["articles:"][j])
      }
    }
  }
  console.log(filterData)
}

filterArtAugust = () => {
  let filterData = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i]["articles:"].length; j++) {
      let dateBorder = new Date("2019-08-01T00:00:00")
      let dateFiltered = new Date(data[i]["articles:"][j].published_at)
      if (dateFiltered < dateBorder) {
        filterData.push(data[i]["articles:"][j])
      }
    }
  }
  console.log(filterData)
}

// filterNoPhone()
// filterArticle()
// filterHaveAnnis()
// filterArt2020()
// filterBorn1986()
// filterTips()
filterArtAugust()