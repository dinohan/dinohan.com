// aws s3 sync . s3://dinohan.com
"use strict";

const title = document.getElementById("des-title");
const subtitle = document.getElementById("des-subtitle");
const body = document.getElementById("des-body");

const description = [
  {
    title: "Fast Learning",
    subtitle: "Dino는 빠르게 배웁니다.",
    body:
      "프로젝트를 중심으로 새로운 지식을 습득하고, 문제에 직접 부딪히며 해결책을 찾아갑니다.",
  },
  {
    title: "Sociable",
    subtitle: "Dino는 쉽게 친해집니다.",
    body: "넓고 긍정적인 인간관계를 지향합니다.",
  },
  {
    title: "Flexible",
    subtitle: "Dino는 새로운 환경에 잘 적응합니다.",
    body:
      "새로운 환경에 내던져져도 빠르게 환경을 파악하고, 자신의 능력을 발휘해 냅니다.",
  },
  {
    title: "Challenging",
    subtitle: "Dino는 끊임없이 도전합니다.",
    body:
      "학과 내 1등에 도전, 대규모 개발 팀 리딩에 도전, 새로운 팀 구조 도입에 도전, 새로운 기술 스택 사용에 도전.",
  },
];

function mouseOver(index) {
  title.innerHTML = description[index].title;
  subtitle.innerHTML = description[index].subtitle;
  body.innerHTML = description[index].body;
}
