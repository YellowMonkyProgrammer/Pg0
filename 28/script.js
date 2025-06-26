gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
//アニメーション　画像の先頭から最後まででアニメーションを実行
gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: '0 0',
    end: '100% 100%',
    scrub: 1
  }
})/*各画像の移動の速度の設定*/
.fromTo('.sky', { y: 0 }, { y: -200 }, 0)
.fromTo('.Neptune', { y: 10 }, { y: -100 }, 0)
.fromTo('.Venus', { y: -30 }, { y: -250 }, 0)
.fromTo('.Falcon',{ y: -30 }, { y: -250 }, 0)
.fromTo('.mountFg', { y: -50 }, { y: -600 }, 0)
.fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
.fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
.fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
;

