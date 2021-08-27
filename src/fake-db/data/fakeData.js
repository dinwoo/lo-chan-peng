import mock, { withDelay } from "@/fake-db/mock.js"

mock.onGet("/index/banners").reply(() => {
  const response = {
    data: {
      pc: ["bg.jpg", "bg2.jpg"],
      mobile: ["bg.jpg", "bg2.jpg"]
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/news/list").reply(() => {
  const response = {
    data: {
      news: [
        {
          id: 1,
          title: "唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出",
          description:
            "早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。",
          img: "https://xxx/ccc.png",
          dateTime: "01 Jul 2021"
        }
      ]
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/news/detail").reply(() => {
  const response = {
    data: {
      id: 1,
      title: "唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出",
      description:
        "早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。",
      imgList: ["news-example.jpg", "news-example.jpg"],
      dateTime: "01 Jul 2021",
      otherNews: [
        {
          id: 1,
          title: "唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出",
          description:
            "早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        },
        {
          id: 2,
          title: "唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出",
          description:
            "早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        },
        {
          id: 3,
          title: "唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出",
          description:
            "早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        },
        {
          id: 4,
          title: "唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出",
          description:
            "早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        },
        {
          id: 5,
          title: "唯一亞洲藝術家「羅展鵬」受邀與世界藝術大師共同展出",
          description:
            "早年陸續榮獲國內多個大型藝術獎項，如:聯邦美術新人獎(2004)、奇美藝術獎 (2007)、國泰藝術獎新世紀潛力畫展銀獎(2006)、高雄美術獎(2008)。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        }
      ]
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onGet("/work/years").reply(() => {
  const response = {
    data: { years: ["2021", "2020", "2019", "2018"] },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/work/list").reply(() => {
  const response = {
    data: {
      works: [
        {
          id: 1,
          name: "超強的大肌肌",
          img: "https://xxx/ccc.png",
          type: "水墨",
          width: 80,
          height: 96,
          unit: "cm",
          year: "1980"
        }
      ],
      allPages: 5,
      currentPage: 1,
      amount: 150
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/contact/send").reply(() => {
  const response = {
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/course/list").reply(() => {
  const response = {
    data: {
      courses: [
        {
          id: 1,
          title: "【國際藝術家的油畫課｜從入門到經典三大技法】",
          description:
            "當代寫實藝術大師 羅展鵬 老師，甫於 2021 年初榮獲 Art Renewal Center 的三大殊榮，也曾開設「寫實人像素描」線上課程，收到許多學員的熱烈回饋。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        }
      ]
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/course/detail").reply(() => {
  const response = {
    data: {
      id: 1,
      title: "【國際藝術家的油畫課｜從入門到經典三大技法】",
      description:
        "當代寫實藝術大師 羅展鵬 老師，甫於 2021 年初榮獲 Art Renewal Center 的三大殊榮，也曾開設「寫實人像素描」線上課程，收到許多學員的熱烈回饋。",
      imgList: ["news-example.jpg", "news-example.jpg"],
      dateTime: "01 Jul 2021",
      buyScript: "購買外連結課程的按鈕script（這段待討論）",
      otherCourses: [
        {
          id: 1,
          title: "【國際藝術家的油畫課｜從入門到經典三大技法】",
          description:
            "當代寫實藝術大師 羅展鵬 老師，甫於 2021 年初榮獲 Art Renewal Center 的三大殊榮，也曾開設「寫實人像素描」線上課程，收到許多學員的熱烈回饋。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        },
        {
          id: 2,
          title: "【國際藝術家的油畫課｜從入門到經典三大技法】",
          description:
            "當代寫實藝術大師 羅展鵬 老師，甫於 2021 年初榮獲 Art Renewal Center 的三大殊榮，也曾開設「寫實人像素描」線上課程，收到許多學員的熱烈回饋。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        },
        {
          id: 3,
          title: "【國際藝術家的油畫課｜從入門到經典三大技法】",
          description:
            "當代寫實藝術大師 羅展鵬 老師，甫於 2021 年初榮獲 Art Renewal Center 的三大殊榮，也曾開設「寫實人像素描」線上課程，收到許多學員的熱烈回饋。",
          img: "news-example.jpg",
          dateTime: "01 Jul 2021"
        }
        // {
        //   id: 4,
        //   title: "【國際藝術家的油畫課｜從入門到經典三大技法】",
        //   description:
        //     "當代寫實藝術大師 羅展鵬 老師，甫於 2021 年初榮獲 Art Renewal Center 的三大殊榮，也曾開設「寫實人像素描」線上課程，收到許多學員的熱烈回饋。",
        //   img: "news-example.jpg",
        //   dateTime: "01 Jul 2021",
        // },
      ]
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

// member

mock.onPost("/member/signup").reply(() => {
  const response = {
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/member/validation").reply(() => {
  const response = {
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onGet("/member/info").reply(() => {
  const response = {
    data: {
      name: "Daniel",
      birthday: "2000/01/01",
      account: "test",
      password: "1234",
      email: "test@test.com"
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPut("/member/edit").reply(() => {
  const response = {
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/member/signin").reply(() => {
  const response = {
    data: {
      status: 1,
      name: "Daniel",
      birthday: "2000/01/01",
      account: "test"
    },
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPost("/member/password/trigger").reply(() => {
  const response = {
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})

mock.onPut("/member/password/trigger").reply(() => {
  const response = {
    code: 200,
    msg: ""
  }
  return withDelay(500, [200, response])
})
