const request = require("supertest");
const app = require("../app");

describe("Books API", () => {
  it("GET /books should return an empty array initally", async () => {
    response = await request(app).get("/books");
    expect(response.body.books).toEqual([]);
  });

  it("POST /books should create a new book", async()=>{
    const newBook = {
      isbn: "06911261518",
      amazon_url: "http://a.co/eobPtX2",
      author: "Matthew Lane",
      lanugage: "english",
      pages: 264,
      publisher: "Princeton University Press",
      title: "Power- Up: Unlocking the Hidden Mathematics in Video Games",
      year: 2017,
    };

    const res = await request(app).post("/books").send(newBook);
    expect(statusCode.toBe(201);
    expect(res.body.book).toHaveProperty("isbn");
  });

  

