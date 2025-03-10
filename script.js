const num = document.querySelector(".title span");
const title = document.querySelector(".title h1");
const topic = document.querySelector(".topic h2");
const info = document.querySelector(".info");
const fact = document.querySelector(".fact-content p");

const buttons = document.querySelectorAll(".orange-round-button");

const video = document.querySelector(".topic-video");
const img = document.querySelector(".fact-img");

const data = [
  {
    num: "1",
    title: "Нагрев",
    topic: "Как вскипятить воду быстрее, чем вы читаете этот текст?",
    info: `Кофемашина получает кипяток почти мгновенно с помощью устройства под названием термоблок. <span class="term">Термоблок</span> - это тонкая трубка для воды, вокруг которой расположен нагревательный элемент высокой мощности. Нагревательный элемент преобразует электрическую энергию в тепло. Он создает достаточна тепла, чтобы нагревать воду, пока та проходит через трубку.`,
    fact: "В данной кофемашине используется непревычный на вид шестерёнчатый насос, он проталкивает воду с помощью вращающихся шестерней.",
    video: "./public/videos/1.mp4",
    img: "./public/images/gear.gif",
    poster: "./public/images/cover_1.png",
  },
  {
    num: "2",
    title: "Измельчение",
    topic: "Как измельчить все зёрна и не пропустить ни одного?",
    info: `Зерна проходят через <span class="term">кононическую мельницу</span> - это стальной или керамический конус, который вращается внутри неподвижного кольца. Зёрна перемалываются между конусом и стенками кольца. По мере уменьшения частиц они проваливаются между конусом и стенками кольца все меньше. При достижении нужного размера частицы проходят дальше.`,
    fact: "Конус мельницы двигается медленно и поэтому не перегревается при работе. Это помогает сохранить вкус кофе.",
    video: "./public/videos/2.mp4",
    img: "./public/images/grinder.png",
    poster: "./public/images/cover_2.png",
  },
  {
    num: "3",
    title: "Перколяция",
    topic: "Как превратить кипяток и зёрна в бодрящий напиток?",
    info: `В основе приготовления кофе лежит <span class="term">перколяция</span> - процесс протекания жидкости через пористые материалы. Горячая вода под давлением через измельченные кофейные зёрна. Растворимые компоненты извлекаются из полотых зёрен и попадают в воду, создавая напиток. Нерастворимая часть остается в фильтре и выбрасывается.`,
    fact: "Некоторые из первых эспрессо-машин использовали для перколяции поршни, прикрепленные к большим рычагам. Бариста приходилось вручную тянуть эти рычаги, чтобы заставить воду проходить через кофе. Отсюда и термин Pull an espresso.",
    video: "./public/videos/3.mp4",
    img: "./public/images/perk.png",
    poster: "./public/images/cover_3.png",
  },
];

buttons[0].classList.add("active");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const elements = [num, title, topic, info, fact, img, video];

    elements.forEach((el) => el.classList.remove("show"));

    setTimeout(() => {
      num.textContent = data[index].num;
      title.textContent = data[index].title;
      topic.textContent = data[index].topic;
      info.innerHTML = data[index].info;
      fact.textContent = data[index].fact;
      img.src = data[index].img;

      video.src = data[index].video;
      video.poster = data[index].poster;
      video.load();

      elements.forEach((el) => el.classList.add("show"));

      window.scrollTo({
        top: 0,
      });
    }, 500);
  });
});
