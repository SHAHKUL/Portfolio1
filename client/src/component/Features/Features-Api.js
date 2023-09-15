const data = [
  {
    id: 1,
    image: "fa-brands fa-html5",

    title: "HTML",
    color: "#FF5733",

  },
  {
    id: 2,
    image: "fa-brands fa-css3-alt",
    title: "CSS",
    color: "#262de4",
  },
  {
    id: 3,
    image: "fa-brands fa-square-js",
    title: "Java Script",
    color: " #f7df1e",
  },
  {
    id: 4,
    image: "fa-brands fa-react",
    title: "React",
    color: "#61dbfb",
  },
  {
    id: 5,
    image: "fa-brands fa-node",
    title: "Node Js",
    color: "#68A063",
  },
  {
    id: 6,
    photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhISBxMVFhUSFhUVFxgXGBcbGRIXGRUYFhoYFRcdHSggGBoqGxgVIzEhJSorLi4uIx8zODUtNygvLisBCgoKDg0OGhAQGC0gIB0xLTc1LTcsNzc1KzcwNSsrLSstNzcrLSstLS8tKys3LS0tLSstLS0rKysrKy0tNy0rK//AABEIAKgBKwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAgQHA//EADkQAAIBAwMCAwYDBwMFAAAAAAABAgMEEQUSIQYxQVFhBxMicYGRFCMyFRZScqGxwUKSszM1NkOi/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAEEBQL/xAAeEQEAAgICAwEAAAAAAAAAAAAAAQIDEQQxEiFBUf/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAGKk1Tg3NpJLLb8CtWnVtO41z3WUqclthJ/6pp8/JNYx5kb15rDdRW1B8cSqY8f4YfLxZS7v4oxz6lPLyJi2q/FLNyZrbVfj2xGSq9Ca89StHSu3mpSS5fecH2fzXZlqLVLRaNwtUvF6+UAAOnYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaye2Lb8DY4tam6ekV3DuqVRr5qDInpEzqHklzdu9vKlV/wDslKX0fb/5UT4XT+FfU0o8QWPJf2Fy/hX1MjuWHvfbs6dv/wBm65RqeG5Ql/JNqLf04f0PZTwWbxF/JnutrNztoOXdxTf2LvFn1MNDhz6mH2BgZLa6yDGTIAAAADGQMgxkyABjI8QMgxkyBhvC+I194vNfcxWoxr09tZJp90/ErlK0p/t/3bituZceH6MgWX3i819zYjq+i0Kq+GO1+ceGv8HDa3VTTb73V23KLxh+WXhP5ATspqP6mjHvF5r7o49YtYVbOcqkU5Ri8PxXiR+iWFK5sW68E3uaz49kBPJqXYyV2MXpusxhbt7ZOPwvyeU/t3LEAAAAAAAAAAAAAADStTVWk4z7STT+qwbmAPEatu7O4lSq96bcHn0eE/qufqfK5fwr6l3690J+8/FWiz4VUv6TX9mUa5/RF+HPyMu9PG2mLkxzS81bWFs72/pUqfepOMfo2tz+kcs9xjDbTxHjjC9Cg+znQZKf4u7WOGqSfin3n9ey9Pmegdi5gpqu/wBaHFxzWu5+vJ9Xt7q29p9C3o3taXvIOrB1JZVLdGrF4pJqEmtmU3F8vnJv150zPp6xV/p91curTqQ3upWk92+ahlLKS5kvh/T6H31u7py9s1nJTjtjQjFvcsKTVw8N/Jr7kz7XK8P3FrRUlunK22rKy1+JpPK81hMsLTlXS1Tq3SKdxqt5X95VgpwjTbp0aW6K4VNcy+cm36mfZLqta50+vb6hOU5W1TZGUm3LbmUWnJ8vEoyxnLxgsHRtzD90bV744jRp7uV8Pwrh+RUPZNcQeq6hmSzOs3HlZkveVeV5gduoapW6l67lp1CrOjQoU5VKzpycalZx92tiqLmMPzVzFp8M5es+k/2DYO96arXFKdD4pr31WcZxzy2pye5rvh5T5OK7uP3S9q07jUuKN3GUVPwjGap5efSdKOfSSLd17rNG36TrbZxlKtB06cYtSlUlNYSil3A36d1KfVnR8ZwqSo1ZJwnOmotwqQliTgpprDxnnsmULo+0utU6kvrepe11sWypV3OVWUVVlFRpuTapbscuKz2xgvns+0qWg9JU43/wzluqzTa/Lc3na36R2p+uSo+za4iuu9ScpJKbltba+LFxPt590Bx6vYVfZ91RaVLG4qzpV5KM41Jt5W6EZKfOJcS3KWM5Xc9J6w1h6D03XuKSzKnFbU+zlKShHPpukiie2etH39kk03GpNtJ8rmD5Xgeg63SoahoNeN606Mqc97jziKTbax4rGV6pAVLQul6fUfTNOvrFavUr14b/AHqrVYe6cuypwhJQjFccY58SI9mtrc6xVn+NvrnZZ1oL3W/Mau1ZW6b+PGUntzhnF0bqrpWVWjY6pRo26m1S9/STryhJZcofmRjFPLw+eU3hdj0bo7T7TS9KVPRpxqLLlKe6MpVJPvKbXj/QCu6tqlbqHrj9m2lWdKjRg6lxKm9tSphR/LjNcwWalPLjh8nN1j0f+xtOledNVrijUoLfJe/qzjOK7tqcmm15PKfkR+qVv3R9q34m+yqF1Fxc8cRU4wT581OlBv0foXHrjWqFt0nXbqQfvacoU1FqTqSksRjBLmTA6Ohtdl1D07TrV1iacoVMdt8Xhtej4f1FP/yd/OX/ABnL7NtIqaH0pCF+ts5ynVlH+De+It+aio59T6q4jDqFzk1ty1nw/Rj+4FlK91OvzYY74l/j/JL1L+lTjmdSP3RG06MtV1BVKiapx/TnvLDz2+YEjf8A/bJ7v4H/AGIvRoVpWb/DTjFbnw4tvOF45JPVqsYWE1NpNxePU4OnriFO0lGcknubw3jhpEDn95PTtR3ahFScv9a8F24XZFihJTinHs+SC1eotQrQp2fxNZba5Uc8cv7slJN21vFU+cLHzxhAdQPnRnvjz4cf0T/yfQkAAAAAAAAAAAAAGJR3Ral4lUl0lbS1jbKH5f8A1tuXjfnbj+XGPh7FsNdi35xzjGfQ5tWJ7RNYnuCEdqwvAzKKksS8TIOkoJ9HabKLUrG1aby/yafL75fHc+9501ZXsoO8taE3TioQ3U4S2RXCjHK4XoSwAiqHTdlb2lSlQtaEadXmpBU4KNT+eOMS+ppb9K2FtXjO2tLeE4PMZRpQUoPzi0uCYAHLf6fS1K3cNQpxqRfhJJr+pH6V0rY6PV3abbUqcvOMVlLyTeWl8iaAHPfWVPULSVK9hGcJrEoyWVJeTXiRVPo3TaVSMqVlbKUGnFqlBOLXKaaXBOgCFuuktPvLqdW7tLec6jzOU6cZSk8Y5bXkRvU97R6E6TlLSLeCW5RhTilGnvqPGZJdlny79vEthzajY09Tsp0b6KlCaxKL8fH75w8gUrRugNO1DS6dbUIe9qVoqpKcZ1KUG5pPEKdOUYxiuyWPm2yJodNw6d9ptpT6flLbOnOrWg5N+6ppOPxN8uMpNbc85T9SfsvZ7HTsx0y+vKVNvPu4VFtXy44fqiw6HoNDRacvwkW51HuqVJtzqVXjGalR8yA676wpajbunf04VIvvGaUl9mR2l9KWOk1t+nWtGnJdmoLK/lb/AE/QmgBrUgqsGqiTT7p9mc/7Oo+FOH+1HUAOenZU6TzThBP0ijoAA+Na1p15ZrQjJrzSZ83p1F96cP8AajqAGlOlGlHFNJL0WDM4Kf6kbADEY7VwZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=",
    title: "Mongo Db",
    color: "",
  },
  {
    id: 7,
    photo: "https://www.ramzamani.com/media/blog/mongoose.png ",
    title: "Mongoose",
    color: "",
  },
  {
    id: 8,
    photo: "https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png",
    title: "Express Js",
    color: "",
  },
  {
    id: 9,
    image: "fa-brands fa-bootstrap",
    title: "Boostrap",
    color: "#563d7c",
  },
  {
    id: 10,
    photo: " https://miro.medium.com/v2/resize:fit:1400/1*TTM5AleQfFJ-mItttJROdg.jpeg",
    title: "MySQL",
    color: "",
  },
  {
    id: 11,
    photo: "data:image/png;base64,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",
    title: "Postman",
    color: "",
  },
  {
    id: 12,
    image: "fa-brands fa-git-alt",
    title: "Git",
    color: " #f34f29",

  },
  {
    id: 13,
    photo: "data:image/png;base64,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 ",
    title: "Redux",

  },
  {
    id: 14,
    photo: "data:image/png;base64,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",
    title: "Netlify",
    color: "",
  },
  {
    id: 15,
    photo: "data:image/png;base64,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 ",
    title: "Vercel ",
    color: "",
  },
]
export default data
