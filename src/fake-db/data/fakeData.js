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

mock.onPost("/contact/send").reply(() => {
  const response = {
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

mock.onPost("/news/list").reply(() => {
  const response = {
    data: {
      news: [
        {
          id: 1,
          title: "",
          description: "描述",
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
      title: "",
      description: "描述",
      imgList: ["https://xxx/ccc.png", "https://xxx/ccc.png"],
      dateTime: "01 Jul 2021",
      otherNews: [
        {
          id: 1,
          title: "",
          description: "描述",
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

mock.onPost("/course/list").reply(() => {
  const response = {
    data: {
      courses: [
        {
          id: 1,
          title: "",
          description: "描述",
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

mock.onPost("/course/detail").reply(() => {
  const response = {
    data: {
      id: 1,
      title: "",
      description: "描述",
      imgList: ["https://xxx/ccc.png", "https://xxx/ccc.png"],
      dateTime: "01 Jul 2021",
      buyScript: "購買外連結課程的按鈕script（這段待討論）",
      otherCourses: [
        {
          id: 1,
          title: "",
          description: "描述",
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
