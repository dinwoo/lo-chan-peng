import mock, { withDelay } from "@/fake-db/mock.js"

mock.onGet("/test").reply(() => {
  const response = {
    success: true,
    message: "成功",
    data: [
      {
        id: 1
      }
    ]
  }
  return withDelay(500, [200, response])
})
